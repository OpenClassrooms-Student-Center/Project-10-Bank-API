import { createSlice } from '@reduxjs/toolkit';

const userInformationSlice = createSlice({
    name: 'userInformation',
    initialState: {
        userData: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            userName: '',
        },
    },
    reducers: {
        setUserInformation: (state, action) => {
            state.userData = action.payload.body;
        },
        editUserNameInformation: (state, action) => {
            state.userData.userName = action.payload
        }
    },
},)


export const { setUserInformation, editUserNameInformation } = userInformationSlice.actions;
export default userInformationSlice.reducer;