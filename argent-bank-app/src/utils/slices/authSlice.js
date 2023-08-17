import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        isAuthenticated: false,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.accessToken = null
            state.isAuthenticated = false
        }
    }
})

//verify if token is present at the start 
export const checkToken = () => (dispatch) => {
    const token = localStorage.getItem('authAccessToken')
    if (token) {
        dispatch(setAccessToken(token))
    }
}

export const { setAccessToken, logout } = authSlice.actions

export default authSlice.reducer

