import { useState } from "react"
import { URL_LOGIN } from "../../config"
import Axios from "axios"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async () => {
        
            try {
                const response = await Axios.post(URL_LOGIN, {
                    email,
                    password
                })
        
                // if connexion successfull, set the token into the local storage
                const token = response.data.body.token
                localStorage.setItem('authToken', token)

                return true
                
            } catch (error) {
                console.error(errorMessage)
                setErrorMessage('Identifiants incorrects')
                return false
            }
    }

    return { email, setEmail, password, setPassword, handleLogin, errorMessage , setErrorMessage }
}

export default UserLogin