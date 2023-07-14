import { createSlice } from '@reduxjs/toolkit'

export interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: true,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    isLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const { isLoading } = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer
