import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ROUTES from '../../../constants/routes'
import SignInForm from './SignInForm'
import { selectAuth } from '../../../utils/selectors'

function SignIn() {
  const { isAuth, isLoading, message } = useSelector(selectAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.PROFILE)
    }
  }, [isAuth, navigate])

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
