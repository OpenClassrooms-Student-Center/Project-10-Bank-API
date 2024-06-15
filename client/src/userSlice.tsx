import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Tony Jarvis',
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.name = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
