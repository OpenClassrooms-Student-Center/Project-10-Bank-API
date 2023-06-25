import { createAsyncThunk } from '@reduxjs/toolkit'

export interface UserState {
  firstname: string | null
  error: string | null
  remember: boolean
  isLoading: boolean
}

const initialState: UserState = {
  firstname: sessionStorage.getItem('token') || localStorage.getItem('token'),
  error: null,
  remember: false,
  isLoading: false,
}

export const fetchUser = createAsyncThunk('user')
