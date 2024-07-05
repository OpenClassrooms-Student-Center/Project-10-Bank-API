import { createSlice } from '@reduxjs/toolkit';
import { postLogin } from '../services/loginAPI';
import {
  createThunkAction,
  handleAsyncActions,
} from '../utils/slicerFunctions';

const POST_LOGIN = 'login/postLogin';

export const postLoginAsync = createThunkAction(POST_LOGIN, postLogin);

// Redux slice for login state management
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: JSON.parse(sessionStorage.getItem('login')) || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.login = null;
      state.status = 'idle';
      state.error = null;
      sessionStorage.removeItem('login');
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (postLoginAsync)
    handleAsyncActions(builder, postLoginAsync, 'login', 'status');
  },
  selectors: {
    selectLogin: (state) => state.login,
    selectLoginStatus: (state) => state.status,
    selectLoginError: (state) => state.error,
  },
});

export const { logout } = loginSlice.actions;
export const { selectLogin, selectLoginStatus, selectLoginError } =
  loginSlice.selectors;

export default loginSlice.reducer;
