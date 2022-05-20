import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../../../features/auth/authSlice'

function SignInForm() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (formData) => dispatch(login(formData))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register('email', { required: true })}
        />
        {errors.email?.type === 'required' && 'Email is required'}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true })}
        />
        {errors.password?.type === 'required' && 'Password is required'}
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" {...register('rememberMe')} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
