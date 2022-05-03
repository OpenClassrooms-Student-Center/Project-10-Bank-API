import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

const auth = async ({ email, password }) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}login`,
    data: { email, password }
  })
  return response.data.body.token
}

export default auth
