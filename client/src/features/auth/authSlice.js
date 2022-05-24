import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'
import authHelpers from '../../utils/authHelpers'

const initialState = {
  isLoading: false,
  isAuth: !!authHelpers().getToken(),
  rememberMe: false,
  message: ''
}

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    const { email, password, rememberMe } = formData
    try {
      const token = await authService.login({ email, password })
      return { token, rememberMe }
    } catch (error) {
      const { message } = error.response.data
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = false
      state.isAuth = false
      state.message = 'Logout successful'
      authHelpers().removeToken()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isAuth = true
      state.rememberMe = payload.rememberMe
      state.message = 'Login successful'
      const storage = state.rememberMe ? localStorage : sessionStorage
      authHelpers(storage).setToken(payload.token)
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false
      state.message = payload
    })
  }
})

export default authSlice.reducer
export const { logout } = authSlice.actions
