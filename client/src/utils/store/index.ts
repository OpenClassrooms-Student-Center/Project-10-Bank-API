import { createStore } from 'redux';
import { authReducer } from '../../reducers/auth';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    authReducer,
    composeWithDevTools()
  );
  
export default store;

