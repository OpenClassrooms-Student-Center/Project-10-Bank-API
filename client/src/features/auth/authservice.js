import api from '../../services/api'

// Login User
const login = async ({ email, password }) => {
  const response = await api({
    method: 'post',
    url: 'login',
    data: { email, password }
  })

  if (response.data.body.token) {
    localStorage.setItem('token', JSON.stringify(response.data.body.token))
  }

  return response.data.body.token
}

// Logout user
const logout = () => {
  localStorage.removeItem('token')
}

const authService = {
  login,
  logout
}

export default authService
