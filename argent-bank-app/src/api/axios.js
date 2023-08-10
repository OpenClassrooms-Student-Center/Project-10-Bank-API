import Axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1/user'

export default Axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const axiosInstance = Axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('authAccessToken')
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
