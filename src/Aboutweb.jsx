import React from 'react'
import Footer from "./components/Footer";
import About  from "./components/About";
import Breadcrumb from "./components/Breadcrumb"
import Counter from './components/Counter';
const Aboutweb = () => {
  return (
    <>    
     {/* Breadcrumb */}
     <Breadcrumb title="About Us"
      page="About" />
      {/* Breadcrumb */}
    <About/>
    <Counter/>
    <Footer/>
    </>
  )
}

export default Aboutweb
