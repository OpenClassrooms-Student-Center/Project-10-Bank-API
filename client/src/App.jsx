import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainNav from "./components/ui/MainNav/MainNav";
import Footer from "./components/ui/Footer/Footer";

const Home = lazy(() => import("./components/pages/Home/Home"));
const SignIn = lazy(() => import("./components/pages/SignIn/SignIn"));
const Profile = lazy(() => import("./components/pages/Profile/Profile"));

function App() {
  return (
    <div className="App">
      <MainNav />

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
