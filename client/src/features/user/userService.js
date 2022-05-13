import API from '../../services/api'

// Get user profile
const getProfile = async () => {
  const response = await API({
    method: 'post',
    url: `profile`
  })
  return response.data.body
}

// Update user profile
const updateProfile = async (profile) => {
  const response = await API({
    method: 'put',
    url: 'profile',
    data: profile
  })
  return response.data.body
}

const userService = {
  getProfile,
  updateProfile
}

export default userService
