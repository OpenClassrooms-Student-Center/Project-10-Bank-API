import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import { authReducer, AuthState } from './authActions.ts'

const rootReducer: Reducer<{ auth: AuthState }> = combineReducers({
  auth: authReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof rootReducer>
