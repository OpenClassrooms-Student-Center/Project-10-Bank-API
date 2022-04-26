import axios from 'axios'
import { getToken } from '../utils/auth.helpers'

const API_URL = 'http://localhost:3001/api/v1/user'
const token = getToken()

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const fetchUser = async (abortController) => {
  const { data } = await axios({
    signal: abortController.signal,
    method: 'post',
    url: `${API_URL}/profile`
  })
  if (data) {
    localStorage.setItem('profile', JSON.stringify(data.body))
  }

  return data.body
}

export const updateProfile = async (profile, abortController) => {
  const { data } = await axios({
    signal: abortController.signal,
    method: 'put',
    url: `${API_URL}/profile`,
    data: profile
  })
  return data.body
}
