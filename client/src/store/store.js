import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})

export default store
