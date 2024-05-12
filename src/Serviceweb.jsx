import React from 'react'
import Breadcrumb from "./components/Breadcrumb"
import Service from "./components/Service";
import Footer from "./components/Footer";
const Serviceweb = () => {
  return (
    <>
      {/* Breadcrumb */}
     <Breadcrumb title="Our Service"
      page="Service" />
      {/* Breadcrumb */}
          <Service/>
          <Footer/>
    </>
  )
}

export default Serviceweb
