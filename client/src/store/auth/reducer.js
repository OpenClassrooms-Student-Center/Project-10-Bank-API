import actionTypes from "./types.js";
import { getToken } from "../../services/auth.service";
const token = getToken();
const initialState = { authenticated: token ? true : false, token: token ?? null, error: null };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        token: payload,
        error: null,
      };
    case actionTypes.NOT_AUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        token: null,
        error: payload,
      };
    default:
      return state;
  }
};
export default reducer;
