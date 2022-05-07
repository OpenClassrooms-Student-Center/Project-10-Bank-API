import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

function ProfileForm({
  handleEditProfile,
  handleSaveProfile,
  firstName,
  lastName
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (formData) => handleSaveProfile(formData)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-user__form">
      <div className="form-group">
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          defaultValue={firstName}
          {...register('firstName', { required: true })}
        />
        {errors.email?.firstName === 'required' && 'Firstname is required'}
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          defaultValue={lastName}
          {...register('lastName', { required: true })}
        />
        {errors.email?.lastName === 'required' && 'Lastname is required'}
      </div>
      <div className="form-group">
        <button type="submit">Save</button>
        <button type="button" onClick={handleEditProfile}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ProfileForm

ProfileForm.propTypes = {
  handleEditProfile: PropTypes.func.isRequired,
  handleSaveProfile: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}
