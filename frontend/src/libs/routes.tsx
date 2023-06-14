import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home.tsx'
import { Layout } from '../layout/Layout.tsx'
import { Login } from '../pages/Login.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
