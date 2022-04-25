import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import Thunk from "redux-thunk";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancer = compose(applyMiddleware(Thunk), reduxDevtools);

const store = createStore(rootReducer, composeEnhancer);

export default store;
