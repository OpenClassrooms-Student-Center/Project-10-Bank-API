import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../layout/Header/Header';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error'
import { URL_PROFILE } from '../config';



function Navigation() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/login' element={<Login />} />
                <Route path={ URL_PROFILE } element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default Navigation;