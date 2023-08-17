import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../../services/hooks/userActions";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        updateUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        })
    }
})

export const { setUser, updateUser } = userSlice.actions
export default userSlice.reducer