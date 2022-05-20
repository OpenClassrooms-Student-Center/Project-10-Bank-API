import API from '../../services/api'

// Login User
const login = async ({ email, password }) => {
  const response = await API({
    method: 'post',
    url: 'login',
    data: { email, password }
  })

  const { token } = response.data.body
  return token
}

const authService = {
  login
}

export default authService
