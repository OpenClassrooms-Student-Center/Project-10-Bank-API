import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { edit } from '../user/userActions.ts'
import { getToken } from '../auth/authSelectors.ts'
import { getFirstName, getLastName } from '../user/userSelectors.ts'

interface EditFormProps {
  setShowEditUser: Dispatch<SetStateAction<boolean>>
}
export const EditForm = ({ setShowEditUser }: EditFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const token = useSelector(getToken) as string
  const firstName = useSelector(getFirstName) as string
  const lastName = useSelector(getLastName) as string
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const user: { firstName: string; lastName: string } = {
      firstName:
        firstNameRef.current?.value !== '' &&
        firstNameRef.current?.value !== undefined
          ? firstNameRef.current?.value
          : firstName,
      lastName:
        lastNameRef.current?.value !== '' &&
        lastNameRef.current?.value !== undefined
          ? lastNameRef.current?.value
          : lastName,
    }

    try {
      await dispatch(edit({ user, token })).unwrap()
      setShowEditUser(false)
    } catch (error: any) {
      setError(error.message)
    }

    setShowEditUser(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="edit-form">
        <div>
          <div className="input-wrapper">
            <input
              type="text"
              id="firstname"
              placeholder={firstName}
              ref={firstNameRef}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="lastname"
              placeholder={lastName}
              ref={lastNameRef}
            />
          </div>
          {error && <p className="error">{error}</p>}
        </div>
        <div className="edit-form-button-wrapper">
          <button className="edit-button">Save</button>
          <button
            type="button"
            className="edit-button"
            onClick={() => setShowEditUser(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
