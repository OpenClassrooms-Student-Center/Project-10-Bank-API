import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home.tsx'
import { Layout } from '../layout/Layout.tsx'
import { Login } from '../pages/Login.tsx'
import { Profile } from '../pages/Profile.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
