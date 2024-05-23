import React from 'react'
import OurProducts from './components/OurProducts'
import Breadcrumb from './components/Breadcrumb'


const Ourproductweb = () => {
  return (
    <div>
     {/* Breadcrumb */}
     <Breadcrumb title="Our Products"
      page="Our Products" />
      {/* Breadcrumb */}
    <OurProducts/>
      
    </div>
  )
}

export default Ourproductweb
