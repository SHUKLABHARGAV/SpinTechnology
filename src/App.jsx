import React, { useEffect, useMemo } from "react";
import Navbar from "./components/Navbar"
import Serviceweb from "./Serviceweb";
import Home from "./Home"
import Aboutweb from "./Aboutweb";
import Ourteamweb from "./Ourteamweb";
import Contactweb from "./Contactweb.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Ourproductweb from "./Ourproductweb.jsx";
import Testimonial from "./components/Testimonial.jsx";

function App() {
  const { pathname } = useLocation()

  const isLoginPath = useMemo(() => {
    return pathname === '/login'
  },[pathname])
  return (
    <>
      {!isLoginPath && <Navbar />}
      <Routes>
        <Route exact path="/"   element={<Home />} />
        <Route exact path="/Serviceweb" element={<Serviceweb />} />
        <Route exact path="/Aboutweb" element={<Aboutweb />} />
        <Route exact path="/Ourteamweb" element={<Ourteamweb />} />
        <Route exact path="/Contactweb" element={<Contactweb />} />
        <Route exact path="/Ourproductweb" element={<Ourproductweb />} />
        <Route exact path="/Testimonial" element={<Testimonial />} />
        <Route exact path="/Login"  element={<Login />} />

      </Routes>
    </>

  );
}

export default App;
