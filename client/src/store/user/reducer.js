import actionTypes from "./types.js";

const initialState = {
  loading: true,
  error: null,
  profile: null,
  editing: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        profile: payload,
      };
    case actionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: payload,
        isLoggedIn: false,
        profile: null,
      };
    case actionTypes.EDIT_USER_PROFILE_TOGGLE:
      return {
        ...state,
        editing: !state.editing,
      };
    default:
      return state;
  }
};
export default reducer;
