import api from '../../services/api'

const API_URL = 'http://localhost:3001/api/v1/user'

// Get user profile
const getProfile = async () =>
  api({
    method: 'post',
    url: `/profile`
  })

// Update user profile
const updateProfile = async (profile) =>
  api({
    method: 'put',
    url: `${API_URL}/profile`,
    data: profile
  })

const userService = {
  getProfile,
  updateProfile
}

export default userService
