import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from './features/user/userSlice'
import { selectIsAuth } from './utils/selectors'
import MainNav from './components/ui/MainNav/MainNav'
import Footer from './components/ui/Footer/Footer'
import ProtectedRoute from './ProtectedRoutes'
import ROUTES from './constants/routes'

const Home = lazy(() => import('./components/pages/Home/Home'))
const SignIn = lazy(() => import('./components/pages/SignIn/SignIn'))
const Profile = lazy(() => import('./components/pages/Profile/Profile'))

function App() {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile())
    }
  }, [isAuth, dispatch])

  return (
    <div className="App">
      <MainNav />

      <Suspense>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route
            path={ROUTES.PROFILE}
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
