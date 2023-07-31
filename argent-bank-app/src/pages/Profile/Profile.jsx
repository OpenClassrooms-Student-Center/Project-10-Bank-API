import './profile.css'
import Button from '../../components/Button/Button'
import Account from '../../components/Account/Account'

function Profile() {
    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button text="Edit Name" className="edit-button" />
            </div>
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
        </main>
    )
}

export default Profile 