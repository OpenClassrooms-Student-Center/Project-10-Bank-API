import { useState } from 'react'
import { axiosInstance } from '../../api/axios'
import { URL_PROFILE } from '../../config'

import './editProfile.css'


function EditProfile({ userData, onUpdateSuccess}) {
    const [ firstName, setFirstName ] = useState(userData.firstName)
    const [ lastName, setLastName ] = useState(userData.lastName)
    const [ erroMessage, setErrorMessage ] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosInstance.put(URL_PROFILE, {
                firstName,
                lastName,
            })
            console.log(response.data)
        } catch (error) {
            console.error(error)
            setErrorMessage('An error occured while updating the profile')
        }
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            {erroMessage && <div>{erroMessage}</div>}
            <button type='submit'>Update Profile</button>
        </form>
    )
}

export default EditProfile