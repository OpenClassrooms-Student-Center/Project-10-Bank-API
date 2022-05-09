import API from '../../services/api'

// Login User
const login = async ({ email, password }) => {
  const response = await API({
    method: 'post',
    url: 'login',
    data: { email, password }
  })

  return response.data.body.token
}

const authService = {
  login
}

export default authService
