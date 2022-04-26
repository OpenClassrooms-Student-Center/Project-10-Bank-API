import actionTypes from "./types";
import { fetchUser } from "../../services/user.service";

export const getUserProfile = () => async dispatch => {
  try {
    const abortController = new AbortController();
    const userProfile = await fetchUser(abortController);
    dispatch({
      type: actionTypes.GET_USER_PROFILE_SUCCESS,
      payload: userProfile,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: actionTypes.GET_USER_PROFILE_FAILURE,
      payload: message,
    });
  }
};

export const editUserProfileToggle = () => dispatch => {
  dispatch({
    type: actionTypes.EDIT_USER_PROFILE_TOGGLE,
  });
};
