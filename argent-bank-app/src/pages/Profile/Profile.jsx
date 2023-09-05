import './profile.css'
import Button from '../../components/Button/Button'
import Account from '../../components/Account/Account'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, updateUser } from '../../utils/slices/userSlice'
import EditProfile from '../../components/EditProfile/EditProfile'
import { fetchUserData } from '../../services/hooks/userActions'


function Profile() {
    const dispatch = useDispatch()
    const { firstName, lastName } = useSelector((state) => state.user);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    const handleUserDataRefresh = () => {
        dispatch(fetchUserData())
    }

    const handleEditProfileClick = () => {
        setIsEditing(true)
    }

    const handleReturnToProfile = () => {
        setIsEditing(false)
    }


    return (
        <main className='main bg-dark'>
            <div className="header">
                {isEditing ? (
                    <h1>Edit Your Profile</h1>
                ) : (
                    <h1>Welcome back<br /> {firstName} {lastName} </h1>
                )}
                {!isEditing && (
                    <Button text="Edit Name" className="edit-button" onClick={handleEditProfileClick} />
                )}

            </div>
            {isEditing ? (
                <EditProfile
                    userData={{ firstName, lastName}}
                    onUserDataRefresh={handleUserDataRefresh}
                    onReturnToProfile={handleReturnToProfile}
                />
            ) : (
                <div>
                    <h2 className="sr-only">Accounts</h2>
                    <Account
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"
                    />
                </div>
            )}
        </main>
    )
}

export default Profile 