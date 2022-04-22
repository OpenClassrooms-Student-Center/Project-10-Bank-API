import actionTypes from "./types";
import { fetchUser } from "../../services/user.service";

export const getUserProfile = () => async dispatch => {
  try {
    const userProfile = await fetchUser();
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
