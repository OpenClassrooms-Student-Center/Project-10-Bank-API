import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { login } from '../auth/authActions.ts'
import { useNavigate } from 'react-router'
import { getError, getToken } from '../auth/authSelectors.ts'
import { RootState } from '../auth/authStore.ts'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate()
  const token = useSelector(getToken)
  const error = useSelector(getError)

  console.log({ error, token, remember })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const user = {
      email: username,
      password,
    }

    dispatch(login(user, remember))
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token])

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            onChange={() => setRemember(!remember)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p>{error}</p>}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}
