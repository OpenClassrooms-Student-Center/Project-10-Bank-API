import { Link } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../utils/slices/authSlice'
import { URL_PROFILE } from '../../config'

function Header() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/" >
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isAuthenticated ? (
                    <div>
                        <Link className="main-nav-item" to={URL_PROFILE}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={handleLogout}>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link className="main-nav-item" to="/login">
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Link>
                        <Link className="main-nav-item" to="/login">
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;