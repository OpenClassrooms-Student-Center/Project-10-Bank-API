import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import ProfileHeader from '../layouts/ProfileHeader';
import { selectLogin } from '../features/loginSlice';
import { postProfileAsync, selectProfile } from '../features/profileSlice';
import { fetchAccountsAsync } from '../features/accountsSlice';

/**
 * A React functional component that renders the user profile page.
 * @returns {JSX.Element}
 */
const Profile = () => {
  const dispatch = useDispatch();

  // Selectors to retrieve data from Redux store
  const login = useSelector((state) => selectLogin(state));
  const profile = useSelector((state) => selectProfile(state));

  // Effect to fetch user profile data when login token changes
  useEffect(() => {
    if (login && login.token) {
      dispatch(postProfileAsync(login.token));
      // Uncomment below line for testing error state:
      // dispatch(postProfileAsync(12345));
    }
  }, [login, dispatch]);

  // Effect to fetch user accounts data when profile data changes
  useEffect(() => {
    if (login && profile) {
      dispatch(fetchAccountsAsync(profile.id));
      // Uncomment below line for testing error state:
      // dispatch(fetchAccountsAsync(1234));
    }
  }, [login, profile, dispatch]);

  return (
    <PageLayout mainClassName='main bg-dark'>
      <>
        <ProfileHeader />
        <Accounts />
      </>
    </PageLayout>
  );
};

export default Profile;
