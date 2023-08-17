import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer'
import Home from '../pages/Home/index'
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error'
import { URL_PROFILE } from '../config';



function Navigation() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/'  />
                <Route path='/login' element={<Login />} />
                <Route path={ URL_PROFILE } element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}

export default Navigation;