import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})

export default store
