import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import LoggedMenuListItems from '../components/LoggedMenuListItems';
import UnloggedMenuListItems from '../components/UnloggedMenuListItems';
import { selectLogin } from '../features/loginSlice';

/**
 * A React functional component that renders the navigation menu.
 * The menu shows different items based on the user's login status.
 * @returns {JSX.Element}
 */
const Menu = () => {
  // Get the login state from the Redux store
  const login = useSelector((state) => selectLogin(state));
  return (
    <nav className='nav'>
      <Link to={'/'} className='nav__logo'>
        <img className='nav__logo-image' src={logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {login ? <LoggedMenuListItems /> : <UnloggedMenuListItems />}
    </nav>
  );
};

export default Menu;
