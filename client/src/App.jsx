import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const User = lazy(() => import("./pages/User/User"));

function App() {
  return (
    <div className="App">
      <MainNav />

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
