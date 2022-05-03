import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import ROUTES from './constants/routes'

function ProtectedRoute({ element }) {
  const { token } = useSelector((store) => store.auth)
  const location = useLocation()

  return token ? (
    element
  ) : (
    <Navigate replace state={{ from: location }} to={ROUTES.HOME} />
  )
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired
}
