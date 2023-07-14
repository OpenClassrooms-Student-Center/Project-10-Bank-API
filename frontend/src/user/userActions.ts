import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '../libs/api.ts'
export interface UserState {
  firstName: string | null
  lastName: string | null
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
}

export const fetchUser = createAsyncThunk<
  {
    firstName: string
    lastName: string
  },
  string
>('user/show', async (token) => {
  try {
    const response = await fetch(`${url}/user/profile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return { firstName: data.body.firstName, lastName: data.body.lastName }
  } catch (error: any) {
    return error.data.message
  }
})

export const edit = createAsyncThunk<
  { firstName: string; lastName: string },
  { token: string; user: { firstName: string; lastName: string } }
>('user/edit', async ({ token, user }) => {
  try {
    const response = await fetch(`${url}/user/profile`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    })
    const data = await response.json()

    return { firstName: data.body.firstName, lastName: data.body.lastName }
  } catch (error: any) {
    return error.data.message
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
      })
      .addCase(fetchUser.rejected, (state) => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        state.firstName = ''
        state.lastName = ''
      })
      .addCase(edit.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
      })
      .addCase(edit.rejected, (state) => {
        state.firstName = ''
        state.lastName = ''
      })
  },
})

export const userReducer = userSlice.reducer
