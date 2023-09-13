import { createContext, useContext ,  useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({ children })  => {
    const [ accessTokenValid, setAccessTokenValid ] = useState(false)
    // const navigate = useNavigate()

    const handleLogout = () => {
        // delete token from the local storage 
        localStorage.removeItem('authAccessToken')
        // navigate('/')
        setAccessTokenValid(false)
    }

    return (
        <AuthContext.Provider value={{accessTokenValid, setAccessTokenValid , handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;