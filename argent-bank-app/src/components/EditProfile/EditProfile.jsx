import { useState } from 'react'
import { axiosInstance } from '../../api/axios'
import { URL_PROFILE } from '../../config'

import './editProfile.css'
import Button from '../Button/Button'


function EditProfile({ userData, onUpdateSuccess, onUserDataRefresh }) {
    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLastName] = useState(userData.lastName)
    const [erroMessage, setErrorMessage] = useState('')
    const [updateSuccess, setUpdateSuccess] = useState(false)


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosInstance.put(URL_PROFILE, {
                firstName,
                lastName,
            })
            console.log(response.data)
            setUpdateSuccess(true)
            onUpdateSuccess()
            onUserDataRefresh()
        } catch (error) {
            console.error(error)
            setErrorMessage('An error occured while updating the profile')
        }
    }

    return (
        <section className="sign-in-content">
            <form onSubmit={handleFormSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {erroMessage && <div>{erroMessage}</div>}
                {updateSuccess && (
                    <div>
                        <p>Profile successfuly updated!</p>
                        <Button
                            onClick={() => {
                                setUpdateSuccess(false)
                            }}
                            text="Return to Profile"
                            className="edit-button"
                            type='submit'
                        />
                    </div>
                )}
                <Button type='submit' text="Update Profile" className="edit-button" />
            </form>
        </section>
    )
}

export default EditProfile