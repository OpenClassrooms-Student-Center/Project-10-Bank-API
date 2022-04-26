import actionTypes from './types'
import auth from '../../services/auth.services'
import { removeToken } from '../../utils/auth.helpers'

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: actionTypes.AUTH_REQUEST })
    try {
      const token = await auth({ email, password })
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: token
      })
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: actionTypes.AUTH_FAILURE,
        payload: message
      })
    }
  }

export const logout = () => async (dispatch) => {
  await removeToken()
  dispatch({
    type: actionTypes.AUTH_FAILURE
  })
}
