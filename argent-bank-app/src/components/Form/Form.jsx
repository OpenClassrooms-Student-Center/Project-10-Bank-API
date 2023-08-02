import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Form() {
    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label
                    >
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                <Link to="/profile" className="sign-in-button">Sign In</Link>
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                {/* <button className="sign-in-button">Sign In</button> */}

            </form>
        </section>
    );
}

export default Form;