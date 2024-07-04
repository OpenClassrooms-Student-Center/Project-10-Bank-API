import { createSlice } from '@reduxjs/toolkit';
import { postProfile, updateProfile } from '../services/profileAPI';
import {
  createThunkAction,
  handleAsyncActions,
} from '../utils/slicerFunctions';

const POST_PROFILE = 'profile/postProfile';
const UPDATE_PROFILE = 'profile/updateProfile';

export const postProfileAsync = createThunkAction(POST_PROFILE, postProfile);

export const updateProfileAsync = createThunkAction(
  UPDATE_PROFILE,
  updateProfile
);

// Redux slice for profile state management
export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: JSON.parse(sessionStorage.getItem('profile')) || null,
    status: 'idle',
    error: null,
    updateStatus: 'idle',
  },
  reducers: {
    resetUpdateStatus: (state) => {
      state.updateStatus = 'idle';
      state.error = null;
    },
    clearProfile: (state) => {
      // clear profile when logout
      state.profile = null;
      state.status = 'idle';
      state.error = null;
      state.updateStatus = 'idle';
      sessionStorage.removeItem('profile');
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (postProfileAsync)
    handleAsyncActions(builder, postProfileAsync, 'profile', 'status');
    // Extra reducers to handle async actions (updateProfileAsync)
    handleAsyncActions(builder, updateProfileAsync, 'profile', 'updateStatus');
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectProfileStatus: (state) => state.status,
    selectProfileError: (state) => state.error,
    selectProfileUpdateStatus: (state) => state.updateStatus,
  },
});
export const { resetUpdateStatus, clearProfile } = profileSlice.actions;
export const {
  selectProfile,
  selectProfileStatus,
  selectProfileError,
  selectProfileUpdateStatus,
} = profileSlice.selectors;

export default profileSlice.reducer;
