import axios from 'axios'
import authHelpers from '../utils/authHelpers'

const API_URL = 'http://localhost:3001/api/v1/user'

const API = () => {
  const defaultOption = {
    baseURL: API_URL
  }

  const instance = axios.create(defaultOption)

  instance.interceptors.request.use((config) => {
    const newConfig = config
    const token = authHelpers().getToken()
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`
    } else {
      delete newConfig.headers.Authorization
    }

    return newConfig
  })

  return instance
}

export default API()
