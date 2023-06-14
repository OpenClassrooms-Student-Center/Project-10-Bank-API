import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '../libs/api.ts'

export interface AuthState {
  token: string | null
  error: string | null
}

const initialState: AuthState = {
  token: null,
  error: null,
}

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
    console.log(data.message)
    const { token } = data.body
    const error = data.message

    return token ?? rejectWithValue(error)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token')
      state.token = null
      state.error = null
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
        state.error = action.payload || "Une erreur s'est produite"
      })
  },
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
