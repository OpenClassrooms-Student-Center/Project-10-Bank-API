import actionTypes from './types'
import { fetchUser, updateProfile } from '../../services/user.services'

export const getProfile = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PROFILE })
  try {
    const abortController = new AbortController()
    const profile = await fetchUser(abortController)
    dispatch({
      type: actionTypes.GET_PROFILE_SUCCESS,
      payload: profile
    })
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    dispatch({
      type: actionTypes.GET_PROFILE_FAILURE,
      payload: message
    })
  }
}

export const editProfile = () => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_PROFILE
  })
}

export const saveProfile = (profile) => async (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_PROFILE
  })
  try {
    const abortController = new AbortController()
    const userProfile = await updateProfile(profile, abortController)
    dispatch({
      type: actionTypes.UPDATE_PROFILE_SUCCESS,
      payload: userProfile
    })
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAILURE,
      payload: message
    })
  }
}
