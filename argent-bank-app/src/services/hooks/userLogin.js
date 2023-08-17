import { useState } from "react"
import { URL_LOGIN } from "../../config"
import { axiosInstance } from "../../api/axios"
import { useDispatch } from 'react-redux'
import { setAccessToken } from "../../utils/slices/authSlice"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post(URL_LOGIN,
                { email, password },
                {
                    headers: {'Content-Type': 'application/json',
                    withCredentials: true,
                    },
                })
            // if connexion successfull, set the token into the local storage
            
            const accessToken = response.data.body.token

            localStorage.setItem('authAccessToken', accessToken)
            dispatch(setAccessToken(accessToken))

            return true

        } catch (error) {
            console.error(errorMessage)
            setErrorMessage('Identifiants incorrects')
            return false
        }
    }


    return { email, setEmail, password, setPassword, handleLogin, errorMessage, setErrorMessage }
}

export default UserLogin