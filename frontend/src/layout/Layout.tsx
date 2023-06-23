import { Outlet } from 'react-router'
import { Navbar } from '../ui/Navbar.tsx'
import { Footer } from '../ui/Footer.tsx'
import { Suspense } from 'react'
import { Loader } from '../ui/Loader.tsx'
import { useSelector } from 'react-redux'
import { isLoading } from '../auth/authSelectors.ts'

export const Layout = () => {
  const loading = useSelector(isLoading)

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
