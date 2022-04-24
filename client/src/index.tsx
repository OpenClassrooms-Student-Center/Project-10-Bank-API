import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import './style/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
