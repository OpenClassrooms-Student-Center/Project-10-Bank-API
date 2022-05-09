import API from '../../services/api'

// Get user profile
const getProfile = async () =>
  API({
    method: 'post',
    url: `profile`
  })

// Update user profile
const updateProfile = async (profile) =>
  API({
    method: 'put',
    url: 'profile',
    data: profile
  })

const userService = {
  getProfile,
  updateProfile
}

export default userService
