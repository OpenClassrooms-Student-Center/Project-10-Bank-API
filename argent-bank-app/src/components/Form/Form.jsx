import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import UserLogin from '../../services/hooks/userLogin';
import { URL_PROFILE } from '../../config';


function Form() {
    const { email, setEmail, password, setPassword, handleLogin, errorMessage, setErrorMessage } = UserLogin()

    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Veuillez saisir votre email et votre mot de passe.');
            return;
        }

        const loginSuccess = await handleLogin()

        if (loginSuccess) {
            // go to profile page
            navigate(URL_PROFILE)
        } else {
            setErrorMessage('Identifiants incorrects')
        }
    }


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
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                <button type='submit' className="sign-in-button">Sign In</button>
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                {/* <button className="sign-in-button">Sign In</button> */}

            </form>
        </section>
    );
}

export default Form;