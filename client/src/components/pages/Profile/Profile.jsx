import { useSelector, useDispatch } from 'react-redux'
import {
  updateProfile,
  toggleIsEditing
} from '../../../features/user/userSlice'
import ProfileForm from './ProfileForm'
import { selectUser } from '../../../utils/selectors'

function Profile() {
  const dispatch = useDispatch()
  const { profile, isEditing, isLoading, isError, message } =
    useSelector(selectUser)

  const handleEditProfile = () => dispatch(toggleIsEditing())
  const handleSaveProfile = (formData) => dispatch(updateProfile(formData))

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{message}</div>

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile.firstName} {profile.lastName}!
        </h1>
        {isEditing ? (
          <ProfileForm
            handleEditProfile={handleEditProfile}
            handleSaveProfile={handleSaveProfile}
            firstName={profile.firstName}
            lastName={profile.lastName}
          />
        ) : (
          <button
            type="button"
            onClick={handleEditProfile}
            className="edit-button"
          >
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
    </main>
  )
}

export default Profile
