import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import ProtectedRoute from './layouts/ProtectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
