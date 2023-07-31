import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';

import Navigation from './components/Navigation';
import Footer from './layout/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    {/* <App /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);


