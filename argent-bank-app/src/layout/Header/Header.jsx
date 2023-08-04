import { Link } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import UserLogin from '../../services/hooks/userLogin'

function Header() {
    const { accessTokenValid, handleLogout, setAccessTokenValid } = UserLogin()
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {accessTokenValid ? (
                    <Link className="main-nav-item" to="/" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign Out
                    </Link>
                ) : (
                    <Link className="main-nav-item" to="/login">
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;