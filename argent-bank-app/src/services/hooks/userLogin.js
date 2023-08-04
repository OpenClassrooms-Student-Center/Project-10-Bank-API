import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthProvider"
import { URL_LOGIN } from "../../config"
import axios from '../../api/axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { setAuth } = useContext(AuthContext)
    const [accessTokenValid, setAccessTokenValid] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async () => {

        try {
            const response = await axios.post(URL_LOGIN, {
                email,
                password
            },
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true
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

    // module.exports = { handleLogin }

    return { email, setEmail, password, setPassword, handleLogin, errorMessage, setErrorMessage, handleLogout, accessTokenValid, setAccessTokenValid }
}





export default UserLogin