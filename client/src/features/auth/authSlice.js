import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'

// Get token from localStorage
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
  token: token || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload
      state.isSuccess = true
      state.isLoading = false
      state.message = 'Login successful'
    },
    [login.rejected]: (state, action) => {
      state.token = null
      state.isError = true
      state.isLoading = false
      state.message = action.payload
    },
    [logout.fulfilled]: (state) => {
      state.token = null
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
    }
  }
})

export default authSlice.reducer
