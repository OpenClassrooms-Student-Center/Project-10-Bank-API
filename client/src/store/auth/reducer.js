import actionTypes from './types'
import { getToken } from '../../utils/auth.helpers'

const token = getToken()
const initialState = {
  authenticated: !!token,
  token: token ?? null,
  loading: false,
  error: null
}

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        token: payload,
        loading: false,
        error: null
      }
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        authenticated: false,
        token: null,
        loading: false,
        error: payload
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: null,
        loading: false,
        error: null
      }
    default:
      return state
  }
}
export default reducer
