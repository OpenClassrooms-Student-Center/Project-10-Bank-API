import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const profile = JSON.parse(localStorage.getItem('profile'))

const initialState = {
  profile: profile || { firstName: '' },
  isEditing: false,
  isLoading: false,
  isError: false,
  message: ''
}

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (_, thunkAPI) => {
    try {
      return await userService.getProfile()
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

export const updateProfile = createAsyncThunk(
  'user/saveProfile',
  async (formData, thunkAPI) => {
    try {
      return await userService.updateProfile(formData)
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing
    }
  },
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.isLoading = true
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
      state.isLoading = false
      state.isError = false
    },
    [getProfile.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    },
    [updateProfile.pending]: (state) => {
      state.isLoading = true
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
      state.isLoading = false
      state.isError = false
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    }
  }
})

export default userSlice.reducer
export const { toggleIsEditing } = userSlice.actions
