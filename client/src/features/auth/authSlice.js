import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../../utils/auth.helpers'

const token = getToken()
const initialState = {
  authenticated: !!token,
  token: token ?? null,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true
    },
    authSuccess: (state, action) => {
      state.loading = false
      state.authenticated = true
      state.token = action.payload
      state.error = null
    },
    authFailure: (state, action) => {
      state.loading = false
      state.authenticated = false
      state.token = null
      state.error = action.payload
    },
    authLogout: (state) => {
      state.loading = false
      state.authenticated = false
      state.token = null
      state.error = null
    }
  }
})
