import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '../libs/api.ts'

export interface AuthState {
  token: string | null
  error: string | null
  remember: boolean
  isLoading: boolean
}

const initialState: AuthState = {
  token: null,
  error: null,
  remember: false,
  isLoading: false,
}

export const checkToken = createAsyncThunk('token', async (_, { dispatch }) => {
  dispatch(setLoading(true))
  if (!(sessionStorage.getItem('token') || localStorage.getItem('token'))) {
    dispatch(setLoading(false))
    return null
  }

  dispatch(setLoading(false))

  return sessionStorage.getItem('token') || localStorage.getItem('token')
})

export const login = createAsyncThunk<
  string,
  { email: string; password: string; remember: boolean }
>(
  'auth/login',
  async (
    credentials: { email: string; password: string; remember: boolean },
    { rejectWithValue }
  ) => {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      const { token } = data.body

      if (credentials.remember) {
        localStorage.setItem('token', token)
      }
      sessionStorage.setItem('token', token)

      return token
    }

    const error = data.message as string

    return rejectWithValue(error)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      state.token = null
      state.error = null
    },
    setLoading(state, action) {
      console.log('payload', action.payload)
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null
        state.error = (action.payload as string) ?? "Une erreur s'est produite"
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.token = action.payload
        state.error = null
      })
  },
})

export const { logout, setLoading } = authSlice.actions
export const authReducer = authSlice.reducer
