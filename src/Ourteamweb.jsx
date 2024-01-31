import React from 'react'
import OurTeam from "./components/OurTeam";
import Breadcrumb from "./components/Breadcrumb"
import Footer from "./components/Footer";
const Ourteamweb = () => {
  return (
    <>
       {/* Breadcrumb */}
       <Breadcrumb title="Our Team"
      page="Our Team" />
      {/* Breadcrumb */}
     <OurTeam/>
     <Footer/> 
    </>
  )
}

export default Ourteamweb
