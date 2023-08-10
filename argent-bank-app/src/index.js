import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import { Provider } from 'react-redux';
import store from './utils/store'

import Navigation from './components/Navigation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
      {/* <App /> */}
    </Provider>
    {/* <Footer /> */}
  </React.StrictMode>
);


