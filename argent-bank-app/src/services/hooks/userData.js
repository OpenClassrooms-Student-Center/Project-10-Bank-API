import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import { URL_PROFILE } from '../../config';
import { userDatas } from '../../api/api';

export function GetDatas() {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const accessToken = localStorage.getItem('authAccessToken')

        if (accessToken) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

            userDatas().then((data) => {
                setUserData({
                    firstName: data.firstName,
                    lastName: data.lastName,
                })
            }).catch((error) => {
                console.error('Erreur lors de la récupération des données')
            })

        } else {
            console.log('Token manquant')
        }
    }, []);

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

