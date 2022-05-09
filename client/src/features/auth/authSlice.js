import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'
import authHelpers from '../../helpers/authHelpers'
import userHelpers from '../../helpers/userHelpers'

const initialState = {
  isLoading: false,
  token: authHelpers.getToken() || null,
  message: ''
}

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials)
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
      state.token = null
      state.message = 'Logout successful'
      authHelpers.removeToken()
      userHelpers.removeProfile()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.token = payload
      state.message = 'Login successful'
      authHelpers.setToken(payload)
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false
      state.message = payload
    })
  }
})

export default authSlice.reducer
export const { logout } = authSlice.actions
