import { FormEvent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { checkToken, login } from '../auth/authActions.ts'
import { useNavigate } from 'react-router'
import { getError, getToken } from '../auth/authSelectors.ts'

export const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const rememberRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate()
  const token = useSelector(getToken)
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const credentials = {
      email: usernameRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      remember: !!rememberRef.current?.value ?? false,
    }

    dispatch(login(credentials))
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
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="" ref={rememberRef} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p>{error}</p>}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}
