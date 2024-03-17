import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./main.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router}></RouterProvider>
    <Footer />
  </React.StrictMode>
);
