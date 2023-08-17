import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";
import { URL_PROFILE } from "../../config";
import { setUser } from "../../utils/slices/userSlice";
import { updateUser as updateUserInRedux } from "../../utils/slices/userSlice";

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { getState, dispatch }) => {
    const accessToken = getState().auth.accessToken
    try {
        const response = await axiosInstance.post(URL_PROFILE, null, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        const userDataFromAPI = response.data.body
        dispatch(setUser(userDataFromAPI))
        return userDataFromAPI
    } catch (error){
        console.error('Erreur lors de la récupération des données')
        throw error
    }
})

export const updateUser = (newUserData) => async (dispatch, getState) => {
    const { auth } = getState()
    const { accessToken } = auth

    try {
        const response = await axiosInstance.post(
            URL_PROFILE,
            newUserData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )

        const updateUserData = response.data.body 
        dispatch(updateUserInRedux(updateUserData))
        return true
    } catch (error) {
        console.error('Erreur lors de la mise à jour des données')
        return false 
    }
}
