import React from 'react'
 
import Carousel  from "./components/Carousel";
import About  from "./components/About";
import Counter from "./components/Counter";
import Service from "./components/Service";
import OurTeam from "./components/OurTeam";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
 

const Home = () => {
  

  return (
    <>
       
        <Carousel/>
        <About/>
        <Counter/>
        <Service/>
        <OurTeam/>
        <Testimonial/>
        <Footer/>
      
    </>
  )
}

export default Home
