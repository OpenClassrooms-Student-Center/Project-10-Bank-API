import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
