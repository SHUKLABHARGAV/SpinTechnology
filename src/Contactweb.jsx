import React from 'react'
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Breadcrumb from "./components/Breadcrumb"
const Contactweb = () => {
  return (
    <>
     {/* Breadcrumb */}
     <Breadcrumb title="Contact Us"
      page="Contact" />
      {/* Breadcrumb */}
    <Contact/>  
   <Footer/> 
    </>
  )
}

export default Contactweb
