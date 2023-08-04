import { useState } from "react"
import { URL_LOGIN } from "../../config"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [accessTokenValid, setAccessTokenValid] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async () => {
        
            try {
                const response = await Axios.post(URL_LOGIN, {
                    email,
                    password
                })
        
                // if connexion successfull, set the token into the local storage
                const accessToken = response.data.body.token
                localStorage.setItem('authAcessToken', accessToken)
                console.log('Connexion réussie ! Token d\'accès:', accessToken);

                setAccessTokenValid(true)
                return true
                
            } catch (error) {
                console.error(errorMessage)
                setErrorMessage('Identifiants incorrects')
                return false
            }
    }

    const handleLogout = () => {
        // delete token from the local storage 
        localStorage.removeItem('authAccessToken')
        console.log('Utilisateur déconnecté')
        navigate('/')
        setAccessTokenValid(false)
    }

    return { email, setEmail, password, setPassword, handleLogin, errorMessage , setErrorMessage, handleLogout, accessTokenValid ,setAccessTokenValid }
}

export default UserLogin