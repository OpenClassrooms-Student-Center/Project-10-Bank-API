import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { logout } from '../user/userSlice'
import authService from './authservice'
import authHelpers from '../../helpers/authHelpers'
import userHelpers from '../../helpers/userHelpers'

const initialState = {
  isLoading: false,
  token: authHelpers().getToken() || null,
  rememberMe: false,
  message: ''
}

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData)
    } catch (error) {
      const { message } = error.response.data
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.token = payload.token
      state.rememberMe = payload.rememberMe
      state.message = 'Login successful'
      const storage = payload.rememberMe ? localStorage : sessionStorage
      authHelpers(storage).setToken(payload.token)
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false
      state.message = payload
    })
    builder.addCase(logout, (state) => {
      state.isLoading = false
      state.token = null
      state.message = 'Logout successful'
      authHelpers().removeToken()
      userHelpers.removeProfile()
    })
  }
})

export default authSlice.reducer
