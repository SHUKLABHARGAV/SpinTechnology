import React from "react";
import Navbar from "./components/Navbar"
import Serviceweb from "./Serviceweb";
import Home from "./Home"
import Aboutweb from "./Aboutweb";
import Ourteamweb from "./Ourteamweb";
import Contactweb from "./Contactweb.jsx";
import { BrowserRouter,Route,Routes} from "react-router-dom";
 
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
   
    </Routes>
    </BrowserRouter>
                  
     
              </>          
   
  );
}

export default App;
