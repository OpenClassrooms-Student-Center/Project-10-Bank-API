import { Outlet } from 'react-router'
import { Navbar } from '../ui/Navbar.tsx'
import { Footer } from '../ui/Footer.tsx'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
