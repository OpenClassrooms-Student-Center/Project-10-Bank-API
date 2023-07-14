import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '../libs/api.ts'

export interface AuthState {
  token: string | null | undefined
  error: string | null
  remember: boolean
  isAuth: boolean
}

const initialState: AuthState = {
  token: undefined,
  error: null,
  remember: false,
  isAuth: false,
}

export const login = createAsyncThunk<
  string,
  { email: string; password: string; remember: boolean }
>(
  'auth/login',
  async (credentials: {
    email: string
    password: string
    remember: boolean
  }) => {
    const response = await fetch(`${url}/user/login`, {
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

    if (response.status === 200) {
      if (credentials.remember) {
        localStorage.setItem('token', data.body.token)
      } else {
        sessionStorage.setItem('token', data.body.token)
      }

      return data.body.token
    }

    throw new Error(data.message)
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
    checkToken(state) {
      if (!(sessionStorage.getItem('token') || localStorage.getItem('token'))) {
        state.token = null
      }

      state.token =
        sessionStorage.getItem('token') || localStorage.getItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload
        state.isAuth = true
      })
      .addCase(login.rejected, (state) => {
        state.token = undefined
        state.isAuth = false
      })
  },
})

export const { logout, checkToken } = authSlice.actions
export const authReducer = authSlice.reducer
