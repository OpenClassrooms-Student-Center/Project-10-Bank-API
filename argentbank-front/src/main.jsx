import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
// import Home from "./pages/Home.jsx";
// import Nav from "./components/Nav.jsx";
// import Footer from "./components/Footer.jsx";
// import Login from "./pages/Login.jsx";
// import Profile from "./pages/Profile.jsx";
import App from "./app/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
