import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import UserLogin from '../../services/hooks/userLogin';
import { URL_LOGIN, URL_PROFILE } from '../../config';
import { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';



function Form() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const accessToken = useSelector(state => state.auth.accessToken)
    const { email, setEmail, password, setPassword, handleLogin, errorMessage, setErrorMessage } = UserLogin();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate()


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Veuillez saisir votre email et votre mot de passe.');
            return;
        }

        const loginResult = await handleLogin();

        setLoginSuccess(loginResult);

    }

    useEffect(() => {
        if(loginSuccess){

            if (isAuthenticated || loginSuccess) {
                navigate(URL_PROFILE);
            } else {
                navigate(URL_LOGIN);
            }
        }
    }, [loginSuccess, accessToken, isAuthenticated, navigate]);


    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {errorMessage && <div>{errorMessage}</div>}
                <button
                    type='submit'
                    className="sign-in-button"
                >
                    Sign In
                </button>


            </form>
        </section>
    );
}



export default Form;