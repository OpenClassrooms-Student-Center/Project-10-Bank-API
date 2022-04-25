import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { connect } from 'react-redux'

const LoginForm: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();

    const handleSubmit: Function = (event: any) => {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)(dispatch);
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle"/>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <Link to="/profile" className="sign-in-button">Sign In</Link> */}
                    <button className="sign-in-button" type="submit">Sign In</button>
                    {/* <!-- SHOULD BE THE BUTTON BELOW -->
                    <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default connect()(LoginForm);