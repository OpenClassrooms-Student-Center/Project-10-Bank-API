const getProfile = () => JSON.parse(localStorage.getItem('profile'))
const setProfile = (profile) =>
  localStorage.setItem('profile', JSON.stringify(profile))
const removeProfile = () => localStorage.removeItem('profile')

const userHelpers = {
  getProfile,
  setProfile,
  removeProfile
}

export default userHelpers
