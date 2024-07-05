import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/loginSlice';

/**
 * A React functional component that protects a route from being accessed by unauthorized users.
 * If the user is not logged in, they are redirected to the home page.
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
const ProtectedRoute = ({ children }) => {
  // Get the login state from the Redux store
  const login = useSelector((state) => selectLogin(state));

  if (!login) {
    return <Navigate to='/' replace />; // prevents page from being added to history
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProtectedRoute;
