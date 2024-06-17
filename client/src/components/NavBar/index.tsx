import { Link, Location, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const loc: Location = useLocation();
  return (
    <nav className="flex justify-between items-center py-1.5 px-5">
      <Link className="flex items-center" to="/">
        <img className="max-w-full w-50" src="/src/assets/images/argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link className="font-bold text-blue-grey mr-2" to="/sign-in">
        <span className='mr-2'>
          <FontAwesomeIcon icon={faCircleUser} /> Sign In
        </span>
        {loc.pathname === '/dashboard' && (
          <span>
            <FontAwesomeIcon icon={faRightFromBracket} /> Sign out
          </span>
        )}
      </Link>
    </nav>
  );
}

export default NavBar;
