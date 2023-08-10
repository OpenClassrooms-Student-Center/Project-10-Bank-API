import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';

import Navigation from './components/Navigation';
import { AuthProvider } from './context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Navigation />
      {/* <App /> */}
    </AuthProvider>
    {/* <Footer /> */}
  </React.StrictMode>
);


