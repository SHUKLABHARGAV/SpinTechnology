import React from 'react'
import Footer from "./components/Footer";
import About  from "./components/About";
import Breadcrumb from "./components/Breadcrumb"
const Aboutweb = () => {
  return (
    <>    
     {/* Breadcrumb */}
     <Breadcrumb title="About Us"
      page="About" />
      {/* Breadcrumb */}
    <About/>
    <Footer/>
    </>
  )
}

export default Aboutweb
