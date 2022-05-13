import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'
import userHelpers from '../../helpers/userHelpers'

const initialState = {
  isLoading: false,
  isError: false,
  profile: userHelpers.getProfile() || { firstName: '' },
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
    },
    logout: (state) => {
      state.isLoading = false
      state.isError = false
      state.profile = { firstName: '' }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.profile = payload
      userHelpers.setProfile(payload)
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
      userHelpers.setProfile(payload)
    })
    builder.addCase(updateProfile.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.message = payload
    })
  }
})

export default userSlice.reducer
export const { toggleIsEditing, logout } = userSlice.actions
