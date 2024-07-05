import { useState } from 'react';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loader from '../components/Loader';
import UpdateProfileForm from './UpdateProfileForm';
import {
  selectProfileStatus,
  selectProfileError,
  selectProfile,
} from '../features/profileSlice';
/**
 * A React functional component that displays profile header.
 * @returns {JSX.Element}
 */
const ProfileHeader = () => {
  const profile = useSelector((state) => selectProfile(state));
  const profileStatus = useSelector((state) => selectProfileStatus(state));
  const profileError = useSelector((state) => selectProfileError(state));

  const [isOpenUpdateProfileForm, setIsOpenUpdateProfileForm] = useState(false);
  const toggleUpdateProfileForm = () => {
    setIsOpenUpdateProfileForm(!isOpenUpdateProfileForm);
  };

  if (profileStatus === 'loading') {
    return <Loader />;
  }

  if (profileStatus === 'failed') {
    return <Error errorMessage={profileError} />;
  }

  return (
    profile && (
      <div className='profile__header'>
        {!isOpenUpdateProfileForm && (
          <>
            <h1>
              Welcome back
              <br />
              {profile.firstName} {profile.lastName} !
            </h1>
            <button className='edit-button' onClick={toggleUpdateProfileForm}>
              Edit Name
            </button>
          </>
        )}
        {isOpenUpdateProfileForm && (
          <>
            <h1>Welcome back</h1>
            <UpdateProfileForm
              toggleUpdateProfileForm={toggleUpdateProfileForm}
            />
          </>
        )}
      </div>
    )
  );
};

export default ProfileHeader;
