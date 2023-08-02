import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer'
import Home from '../pages/Home/index'
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error'



function Navigation() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Navigation;