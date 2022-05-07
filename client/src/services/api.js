import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user'

const API = () => {
  const defaultOption = {
    baseURL: API_URL
  }

  const instance = axios.create(defaultOption)

  instance.interceptors.request.use((config) => {
    /* eslint no-param-reassign: "error" */
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      delete config.headers.Authorization
    }

    return config
  })

  return instance
}

export default API()
