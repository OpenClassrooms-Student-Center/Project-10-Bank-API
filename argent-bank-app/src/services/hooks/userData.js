import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/axios';
import { URL_PROFILE } from '../../config';

import { setUser } from '../../utils/slices/userSlice';

export function GetDatas() {
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.post(URL_PROFILE, null, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    }
                })
                const userDataFromAPI = response.data.body
                setUserData(userDataFromAPI)
                dispatch(setUser(userDataFromAPI)) // update user state with the datas
            } catch (error) {
                console.error('Erreur lors de la récupération des données.')
            }
        }
        fetchUserData()
    }, [accessToken, dispatch]);

    return {
        userData
    }
}

export async function GetUserDatas() {
    try {
        const res = await axiosInstance(URL_PROFILE)
        return res.data.body
    } catch (error) {
        throw new Error(error)
    }
}

