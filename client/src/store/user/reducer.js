import actionTypes from './types'
import { getProfile } from '../../utils/user.helpers'

const profile = getProfile()
const initialState = {
  loading: false,
  error: null,
  profile: profile ?? { firstName: '' },
  editing: false
}

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        profile: payload
      }
    case actionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        profile: null
      }
    case actionTypes.EDIT_PROFILE:
      return {
        ...state,
        editing: !state.editing
      }
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        loading: true
      }
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        profile: payload,
        editing: false
      }
    case actionTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        profile: null
      }
    default:
      return state
  }
}
export default reducer
