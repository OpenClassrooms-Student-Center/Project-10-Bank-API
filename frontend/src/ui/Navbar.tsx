import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../auth/authSelectors.ts'
import { logout } from '../auth/authActions.ts'
import { ThunkDispatch } from 'redux-thunk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons'

import { getFirstName } from '../user/userSelectors.ts'

export const Navbar = () => {
  const token = useSelector(getToken)
  const firstName = useSelector(getFirstName)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <>
            <NavLink className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
            </NavLink>
            <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}
