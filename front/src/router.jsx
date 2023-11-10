import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./views/Home";
import SignIn from "./views/SignIn"
import Profile from "./views/Profile"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useSelector } from "react-redux"

import React from 'react'

export default function Router() {
  const isConnected = useSelector ((state) => state.authentification.isConnected)
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                {/* Renvoyé l'utilisateur sur la page signin s'il n'est pas connecté */}
                <Route path="/user" element={isConnected ? <Profile/> : <Navigate to="/signin"/>} />

            </Routes>
        <Footer />
    </div>
  )
}

