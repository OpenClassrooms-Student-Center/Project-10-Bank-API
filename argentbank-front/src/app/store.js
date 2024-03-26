import { configureStore } from "@reduxjs/toolkit";
import { getUser, getToken } from "../authentication/auth-provider";

let state = {
  user: getUser() || null,
  loggedIn: getToken() ? true : false,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...currentState,
        user: action.payload.user,
        loggedIn: true,
      };

    case "REMOVE_USER":
      return { ...currentState, user: null, loggedIn: false };

    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});
