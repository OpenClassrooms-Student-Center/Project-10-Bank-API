import PropTypes from 'prop-types';
/**
 * A React functional component that displays error.
 * @param {Object} props
 * @param {string} props.errorMessage
 * @returns {JSX.Element}
 */
const Error = ({ errorMessage }) => {
  return <p className='error error-message'>{errorMessage}</p>;
};
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
