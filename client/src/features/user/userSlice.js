import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProfile, updateProfile } from '../../services/user.services'

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (_, thunkAPI) => {
    const previousProfile = JSON.parse(localStorage.getItem('profile'))
    if (previousProfile) {
      return previousProfile
    }
    try {
      const profile = await fetchProfile()
      if (profile) {
        localStorage.setItem('profile', JSON.stringify(profile))
      }
      return profile
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }
)

export const saveProfile = createAsyncThunk(
  'user/saveProfile',
  async (profile, thunkAPI) => {
    try {
      const updatedProfile = await updateProfile(profile)
      if (updatedProfile) {
        localStorage.setItem('profile', JSON.stringify(updatedProfile))
      }
      return updatedProfile
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }
)

const initialState = {
  profile: { firstName: '' },
  isEditing: false,
  isLoading: false,
  error: null
}

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
    },
    [getProfile.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [saveProfile.pending]: (state) => {
      state.isLoading = true
    },
    [saveProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
      state.isLoading = false
    },
    [saveProfile.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export default userSlice.reducer
export const { toggleIsEditing } = userSlice.actions
