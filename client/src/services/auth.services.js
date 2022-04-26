import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

const auth = async ({ email, password }) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}login`,
    data: { email, password }
  })
  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data.body.token))
  }
  return response.data.body.token
}

export default auth
