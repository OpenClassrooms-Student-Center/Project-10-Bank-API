import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, editUserProfileToggle } from "../../../store/user/action.creator";
import EditUser from "./EditProfile";

function Profile() {
  const dispatch = useDispatch();
  const { loading, error, profile, editing } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleEditUserProfileToggle = () => dispatch(editUserProfileToggle());

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile.firstName} {profile.lastName}!
        </h1>
        {editing ? (
          <EditUser handleEditUserProfileToggle={handleEditUserProfileToggle} />
        ) : (
          <button onClick={handleEditUserProfileToggle} className="edit-button">
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
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
