import './profile.css'
import Button from '../../components/Button/Button'
import Account from '../../components/Account/Account'
import { GetDatas } from '../../services/hooks/userData'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../utils/slices/userSlice'
import EditProfile from '../../components/EditProfile/EditProfile'


function Profile() {
    const [refreshUserData, setRefreshUserData] = useState(false)
    const { userData } = GetDatas(refreshUserData)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()
    const { firstName, lastName } = useSelector((state) => state.user);
    const accessToken = useSelector(state => state.auth.accessToken)
    console.log(useSelector((state) => state.user ))
    console.log("Profile acccessToken" , accessToken)



    const handleUpdateSuccess = () => {
        dispatch(setUser({ firstName: userData.firstName, lastName: userData.lastName }));
    }

    const handleUserDataRefresh = () => {
        setRefreshUserData(!refreshUserData)
    }

    const handleUserUpdate = (newFirstName, newLastName) => {
        dispatch(setUser({ firstName: newFirstName, lastName: newLastName }));
      };

    return (
        <main className='main bg-dark'>
            <div className="header">
                {isEditing ? (
                    <h1>Edit Your Profile</h1>
                ) : (
                    <h1>Welcome back<br /> {firstName} {lastName} </h1>
                )}
                {!isEditing && (
                    <Button text="Edit Name" className="edit-button" onClick={() => setIsEditing(true)} />
                )}

            </div>
            {isEditing ? (
                <EditProfile 
                    userData={userData} 
                    onUpdateSuccess={handleUpdateSuccess} 
                    onUserDataRefresh={handleUserDataRefresh} 
                    onUserUpdate={handleUserUpdate} 
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