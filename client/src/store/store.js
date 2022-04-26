import { createStore, compose, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './root.reducer'

/* eslint-disable no-underscore-dangle */
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancer = compose(applyMiddleware(Thunk), reduxDevtools)

const store = createStore(rootReducer, composeEnhancer)
/* eslint-enable */
export default store
