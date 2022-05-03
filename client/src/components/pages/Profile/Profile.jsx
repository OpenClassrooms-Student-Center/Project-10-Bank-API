import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getProfile,
  updateProfile,
  toggleIsEditing
} from '../../../features/user/userSlice'
import EditUser from './EditProfile'

function Profile() {
  const dispatch = useDispatch()
  const { profile, isEditing, isError, isLoading, message } = useSelector(
    (state) => state.user
  )

  const handleEditProfile = () => dispatch(toggleIsEditing())
  const handleSaveProfile = (formData) => dispatch(updateProfile(formData))

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

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
          <EditUser
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
