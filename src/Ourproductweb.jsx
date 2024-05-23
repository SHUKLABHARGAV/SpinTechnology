import React from 'react'
import OurProducts from './components/OurProducts'
import Breadcrumb from './components/Breadcrumb'
import Footer from "./components/Footer";


const Ourproductweb = () => {
  return (
    <div>
     {/* Breadcrumb */}
     <Breadcrumb title="Our Products"
      page="Our Products" />
      {/* Breadcrumb */}
    <OurProducts/>
    <Footer/>
      
    </div>
  )
}

export default Ourproductweb
