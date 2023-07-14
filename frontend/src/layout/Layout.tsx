import { Outlet } from 'react-router'
import { Navbar } from '../ui/Navbar.tsx'
import { Footer } from '../ui/Footer.tsx'
import { useSelector } from 'react-redux'
import { isLoading } from '../loading/loadingSelectors.ts'
import { Loader } from '../ui/Loader.tsx'
import useAsAuthenticated from '../hooks/useAsAuthenticated.ts'

export const Layout = () => {
  const loading = useSelector(isLoading)
  useAsAuthenticated()

  if (loading) {
    return <Loader />
  }

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
