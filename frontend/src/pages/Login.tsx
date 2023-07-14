import { FormEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { login } from '../auth/authActions.ts'
import { useNavigate } from 'react-router'
import { getToken } from '../auth/authSelectors.ts'
import useAsAuthenticated from '../hooks/useAsAuthenticated.ts'
import { isLoading } from '../loading/loadingSelectors.ts'
import { Loader } from '../ui/Loader.tsx'

export const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const rememberRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate()
  const token = useSelector(getToken)
  const loading = useSelector(isLoading)
  const [error, setError] = useState()

  useAsAuthenticated()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const credentials = {
      email: usernameRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      remember: !!rememberRef.current?.value ?? false,
    }

    try {
      await dispatch(login(credentials)).unwrap()
    } catch (error: any) {
      setError(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token])

  if (loading) {
    return <Loader />
  }

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
