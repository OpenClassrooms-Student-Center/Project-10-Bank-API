import { Link } from 'react-router-dom';
/**
 * A React functional component that displays menu when user isn't connected.
 * It contains a login link
 * @returns {JSX.Element}
 */
const UnloggedMenuListItems = () => {
  return (
    <div>
      <Link to={'/sign-in'} className='nav__item'>
        <i className='fa fa-user-circle icon'></i>

        <span className='nav__item-text'>Sign In</span>
      </Link>
    </div>
  );
};

export default UnloggedMenuListItems;
