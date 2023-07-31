import './profile.css'
import Button from '../../components/Button/Button'

function Profile() {
    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button text="Edit Name" className="edit-button" />
            </div>
            <h2 className="sr-only">Accounts</h2>
        </main>
    )
}

export default Profile 