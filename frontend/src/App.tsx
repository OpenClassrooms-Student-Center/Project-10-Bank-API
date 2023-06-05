import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './libs/routes.tsx'
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
