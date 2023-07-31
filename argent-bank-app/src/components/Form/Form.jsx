import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Form() {
    return (
        <section class="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form>
                <div class="input-wrapper">
                    <label for="username">Username</label
                    ><input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label
                    ><input type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" /><label for="remember-me"
                    >Remember me</label
                    >
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                <Link to="/profile" class="sign-in-button">Sign In</Link>
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                {/* <button class="sign-in-button">Sign In</button> */}

            </form>
        </section>
    );
}

export default Form;