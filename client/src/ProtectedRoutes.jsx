import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { selectIsAuth } from './utils/selectors'
import ROUTES from './constants/routes'

function ProtectedRoute({ element }) {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()

  return isAuth ? (
    element
  ) : (
    <Navigate replace state={{ from: location }} to={ROUTES.HOME} />
  )
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired
}
