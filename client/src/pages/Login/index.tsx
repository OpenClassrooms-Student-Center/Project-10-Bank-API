import Nav from '../../components/Nav';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';

const Login: React.FC = (): JSX.Element => {
    return(
        <>
            <Nav/>
            <LoginForm/>
            <Footer/>
        </>
    );
};

export default Login;