import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../auth/authSelectors.ts'
import { logout } from '../auth/authActions.ts'
import { ThunkDispatch } from 'redux-thunk'

export const Navbar = () => {
  const token = useSelector(getToken)
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
          <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}
