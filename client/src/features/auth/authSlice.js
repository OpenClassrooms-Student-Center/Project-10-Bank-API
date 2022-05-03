import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from '../../services/auth.services'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const previousToken = JSON.parse(localStorage.getItem('token'))
    if (previousToken) {
      return previousToken
    }
    try {
      const token = await auth(credentials)
      if (token) {
        localStorage.setItem('token', JSON.stringify(token))
      }

      return token
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    localStorage.clear()
    return thunkAPI.fulfillWithValue('logged out')
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong')
  }
})

const initialState = {
  token: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload
      state.isLoading = false
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [logout.pending]: (state) => {
      state.isLoading = true
    },
    [logout.fulfilled]: (state) => {
      state.token = null
      state.isLoading = false
    },
    [logout.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export default authSlice.reducer
