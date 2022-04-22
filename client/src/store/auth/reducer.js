import actionTypes from "./types.js";

const initialState = { isLoggedIn: false, token: null, error: null };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.AUTHENTICATED:
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
        error: null,
      };
    case actionTypes.NOT_AUTHENTICATED:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        error: payload,
      };
    default:
      return state;
  }
};
export default reducer;
