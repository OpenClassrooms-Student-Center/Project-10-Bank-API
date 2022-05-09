const getToken = () => JSON.parse(localStorage.getItem('token'))
const setToken = (token) => localStorage.setItem('token', JSON.stringify(token))
const removeToken = () => localStorage.removeItem('token')

const authHelpers = {
  getToken,
  setToken,
  removeToken
}

export default authHelpers
