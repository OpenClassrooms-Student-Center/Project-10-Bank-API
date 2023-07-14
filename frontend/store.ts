import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './src/auth/authActions'
import { userReducer } from './src/user/userActions'
import { loadingReducer } from './src/loading/loadingActions.ts'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  loading: loadingReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
