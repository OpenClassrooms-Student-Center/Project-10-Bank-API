import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  isLoading: false,
  isError: false,
  profile: { firstName: '' },
  isEditing: false,
  message: ''
}

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (_, thunkAPI) => {
    try {
      return await userService.getProfile()
    } catch (error) {
      const { message } = error.response.data
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
      const { message } = error.response.data
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
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.profile = payload
    })
    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.message = payload
    })
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.profile = payload
      state.isEditing = false
    })
    builder.addCase(updateProfile.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.message = payload
    })
  }
})

export default userSlice.reducer
export const { toggleIsEditing } = userSlice.actions
