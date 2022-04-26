/* eslint-disable import/prefer-default-export */
export const getProfile = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  return profile
}
