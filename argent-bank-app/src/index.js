import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';

import Navigation from './components/Navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navigation />
  </React.StrictMode>
);


