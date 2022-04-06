import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import argentLogo from "../../assets/img/argentBankLogo.png";

function MainNav() {
  return (
    <nav className="main-nav">
      <Link to={ROUTES.HOME} className="main-nav-logo">
        <img className="main-nav-logo-image" src={argentLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to={ROUTES.SIGN_IN} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default MainNav;
