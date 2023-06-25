import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../auth/authSelectors.ts'
import { checkToken, logout } from '../auth/authActions.ts'
import { ThunkDispatch } from 'redux-thunk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import {
  faArrowRightFromBracket,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const token = useSelector(getToken)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    dispatch(checkToken())
  }, [])

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
              Tony
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
