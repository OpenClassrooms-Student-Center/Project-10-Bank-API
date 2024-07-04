import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/loginSlice';
import { clearProfile, selectProfile } from '../features/profileSlice';
import { clearAccounts } from '../features/accountsSlice';

/**
 * A React functional component that displays menu when user is connected.
 * It contains a logout link
 * @returns {JSX.Element}
 */
const LoggedMenuListItems = () => {
  const dispatch = useDispatch();
  const [userFirstName, setUserFirstName] = useState('');

  // Get the profile state from the Redux store
  const profile = useSelector((state) => selectProfile(state));

  useEffect(() => {
    if (profile && profile.firstName !== userFirstName) {
      setUserFirstName(profile.firstName);
    }
  }, [profile, userFirstName]);

  const logoutUser = () => {
    dispatch(clearAccounts());
    dispatch(clearProfile());
    // Update the profile states from the Redux store
    dispatch(logout());
  };

  return (
    <div className='nav__list-item'>
      <Link to={'/profile'} className='nav__item'>
        <i className='fa fa-user-circle icon'></i>
        <span className='nav__item-text'>{userFirstName}</span>
      </Link>
      <Link onClick={logoutUser} className='nav__item'>
        <i className='fa fa-sign-out icon'></i>
        <span className='nav__item-text'>Sign Out</span>
      </Link>
    </div>
  );
};

export default LoggedMenuListItems;
