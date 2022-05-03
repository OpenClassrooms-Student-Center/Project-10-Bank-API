import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user'
const token = JSON.parse(localStorage.getItem('token'))

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const fetchProfile = async () => {
  const { data } = await axios({
    method: 'post',
    url: `${API_URL}/profile`
  })
  return data.body
}

export const updateProfile = async (profile) => {
  const { data } = await axios({
    method: 'put',
    url: `${API_URL}/profile`,
    data: profile
  })
  return data.body
}
