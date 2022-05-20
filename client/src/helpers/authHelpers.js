const getToken = () =>
  JSON.parse(sessionStorage.getItem('token')) ||
  JSON.parse(localStorage.getItem('token'))

const removeToken = () => {
  sessionStorage.removeItem('token')
  localStorage.removeItem('token')
}

const authHelpers = (storage = sessionStorage) => {
  const setToken = (token) => storage.setItem('token', JSON.stringify(token))

  return {
    getToken,
    setToken,
    removeToken
  }
}

export default authHelpers

/*
je voudrais choisir globalement de stocker le token dans sessionStorage ou localStorage
*/
