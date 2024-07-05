import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from '../features/accountsSlice';
import loginReducer from '../features/loginSlice';
import profileReducer from '../features/profileSlice';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
