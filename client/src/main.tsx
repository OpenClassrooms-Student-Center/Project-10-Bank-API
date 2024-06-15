import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Menu from './Pages/Menu'
// import CarteVins from './Pages/Wines';
// import CarteBoissons from './Pages/Drinks';
// import './styles/index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     {/* <Home /> */}
//     <CarteVins />
//   </React.StrictMode>,
// )



