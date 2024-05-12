import React from "react";
import Navbar from "./components/Navbar.jsx"
import Serviceweb from "./Serviceweb.jsx";
import Home from "./Home.jsx"
import Aboutweb from "./Aboutweb.jsx";
import Ourteamweb from "./Ourteamweb.jsx";
import Contactweb from "./Contactweb.jsx";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
 
function App() {
  return (
  
    <>
     
    <BrowserRouter>
        <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Serviceweb" element={<Serviceweb/>} />
    <Route exact path="/Aboutweb" element={<Aboutweb/>} />
    <Route exact path="/Ourteamweb" element={<Ourteamweb/>} />
    <Route exact path="/Contactweb" element={<Contactweb/>} />
    <Route exact path="/Login" element={<Login />} />
   
    </Routes>
    </BrowserRouter>
                  
     
              </>          
   
  );
}

export default App;
