import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    dispatch(login('Tony Jarvis'));
    window.location.href = '/dashboard';
  };

  return (
    <div className='flex flex-col items-center bg-dark-blue flex-1'>
      <section className="bg-white w-75 mx-auto mt-12 p-8">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1 className='text-2xl font-bold my-4'>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="username" className="font-bold">Username</label>
            <input type="text" id="username" className="p-1.5 text-xl border border-gray-500" />
          </div>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="password" className="font-bold">Password</label>
            <input type="password" id="password" className="p-1.5 text-xl border border-gray-500" />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="block w-full p-2 font-bold mt-4 bg-blue-green text-white">Sign In</button>
        </form>
      </section>
    </div>
  );
}

export default SignIn;