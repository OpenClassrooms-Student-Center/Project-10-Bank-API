import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'

// Get token from localStorage
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
  isLoading: false,
  token: token || null,
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
      localStorage.removeItem('token')
      state.message = 'Logout successful'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.token = payload
      localStorage.setItem('token', JSON.stringify(state.token))
      state.message = 'Login successful'
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false
      state.message = payload
    })
  }
})

export default authSlice.reducer
export const { logout } = authSlice.actions
