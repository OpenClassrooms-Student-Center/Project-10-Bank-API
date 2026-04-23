import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import useDispatch pour envoi des actions au store Redux
import { useDispatch } from 'react-redux';
// Import actions du userSlice
import { setUser, updateName } from '../../redux/slices/userSlice';
import './Profile.css';

function Profile() {
  // Modification en setUserState pour éviter conflit avec Redux "setUser"
  const [user, setUserState] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  // La fonction qui envoie les actions au store Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/sign-in');
      return;
    }

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserState(data.body);
        setFirstName(data.body.firstName);
        setLastName(data.body.lastName);
        // Remplacement localStorage.setItem par un dispatch Redux. Lecture data direct de redux pour Header
        dispatch(setUser({
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        }));
      })
      .catch(() => {
        navigate('/sign-in');
      });
  // Dispatch ajouté dans les dépendances du useEffect
  }, [navigate, dispatch]);

  const handleSave = () => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserState(data.body);
        // Remplace localStorage.setItem par dispatch Redux. MàJ et render auto pour le header
        dispatch(updateName({
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        }));
        setIsEditing(false);
      })
      .catch(() => {
        console.error('Erreur lors de la mise à jour');
      });
  };

  return (
    <>
      <div className="header">
        {isEditing ? (
          <>
            <h1>Welcome back</h1>
            <div className="edit-form">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div className="edit-buttons">
              <button className="edit-button" onClick={handleSave}>Save</button>
              <button className="edit-button" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : '...'}</h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          </>
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
    </>
  );
}

export default Profile;