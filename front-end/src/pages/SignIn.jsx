import PageLayout from '../layouts/PageLayout';
import SignInForm from '../layouts/SignInForm';

const SignIn = () => {
  return (
    <PageLayout mainClassName='main bg-dark'>
      <section className='sign-in__content'>
        <i className='fa fa-user-circle sign-in__icon'></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </PageLayout>
  );
};

export default SignIn;
