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
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const storedRememberMe = localStorage.getItem('rememberMe');
        if (storedRememberMe === 'true') {
            setRememberMe(true);
        }
    }, []);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Veuillez saisir votre email et votre mot de passe.');
            return;
        }

        localStorage.setItem('rememberMe', rememberMe.toString());

        if(rememberMe) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
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

    useEffect(() => {
        if(rememberMe) {
            const storedEmail = localStorage.getItem('email')
            const storedPassword = localStorage.getItem('password')
            setEmail(storedEmail || '')
            setPassword(storedPassword || '')
        }
    }, [rememberMe, setEmail, setPassword]);


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
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        checked={rememberMe}
                        onChange={handleRememberMeChange} 
                    />
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