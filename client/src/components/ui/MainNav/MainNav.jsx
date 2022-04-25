import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/auth/actions.creator";
import ROUTES from "../../../constants/routes";
import argentLogo from "../../../assets/img/argentBankLogo.png";

function MainNav() {
  const { authenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link to={ROUTES.HOME} className="main-nav-logo">
        <img className="main-nav-logo-image" src={argentLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {authenticated ? (
          <button className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            Sign Out
          </button>
        ) : (
          <Link to={ROUTES.SIGN_IN} className="main-nav-item">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default MainNav;
