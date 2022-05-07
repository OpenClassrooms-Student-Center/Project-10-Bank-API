import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ROUTES from '../../../constants/routes'
import SignInForm from './SignInForm'

function SignIn() {
  const { token, isLoading, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate(ROUTES.PROFILE)
    }
  }, [token, navigate])

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        {isLoading && <p className="loading">Loading...</p>}
        {message && <p className="error">{message}</p>}
        <SignInForm />
      </section>
    </main>
  )
}

export default SignIn
