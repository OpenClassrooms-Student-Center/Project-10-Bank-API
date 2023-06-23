import { createAsyncThunk } from '@reduxjs/toolkit'

export interface UserState {
  token: string | null
  error: string | null
  remember: boolean
  isLoading: boolean
}

const initialState: UserState = {
  token: sessionStorage.getItem('token') || localStorage.getItem('token'),
  error: null,
  remember: false,
  isLoading: false,
}

export const fetchUser = createAsyncThunk('user')
