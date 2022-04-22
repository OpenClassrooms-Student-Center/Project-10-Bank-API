import actionTypes from "./types";
import { getToken, removeToken } from "../../services/auth.service";

export const login =
  ({ email, password }) =>
  async dispatch => {
    try {
      const token = await getToken({ email, password });
      dispatch({
        type: actionTypes.AUTHENTICATED,
        payload: token,
      });
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: actionTypes.NOT_AUTHENTICATED,
        payload: message,
      });
    }
  };

export const logout = () => async dispatch => {
  await removeToken();
  dispatch({
    type: actionTypes.NOT_AUTHENTICATED,
  });
};
