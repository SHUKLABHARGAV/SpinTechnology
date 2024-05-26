import React from 'react'
import img1 from "./img/product 7.jpeg"
import img2 from "./img/about-2.jpg"

const About = () => {
    const bgprimary = {
        color : "#0b6ab2",
        backgroundColor :"#0b6ab2"
    };
     
  return (
    <>
   
       <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="row gx-3 h-100">
                        <div className=" align-self-start wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" alt='w'  src={img1}/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="fw-medium text-uppercase   mb-2" style={{   color:'#0b6ab2', }}>About Us</p>
                    <h1 className="display-5 mb-4">We Are Leader In Spindel Market</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="flex-shrink-0    p-4" style={{ backgroundColor:'#0b6ab2',color:'white'}}>
                            <h1 className="display-2">2+</h1>
                            <h5 className="text-white">Years of</h5>
                            <h5 className="text-white">Experience</h5>
                        </div>
                        <div className="ms-4">
                            <p><i className="fa fa-check   me-2" ></i>Power & Energy</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Civil Engineering</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Chemical Engineering</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Mechanical Engineering</p>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle  " style={bgprimary}>
                                <a className="btn px-0"  href="mailto:spin.ind443@gmail.com ">
 <i className="fa fa-envelope-open text-white"></i> </a>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Email us</p>
                                    <a className="btn px-0"  href="mailto:spin.ind443@gmail.com">
                                    <h5 className="mb-0">spin.ind443@gmail.com</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle  " style={bgprimary}>
                                <a className="btn px-0"   href="tel:+91 9712433443"> <i className="fa fa-phone-alt  text-white"></i></a>   
                                </div>
                                <div className="ms-3"> 
                                    <p className="mb-2">Call us</p>
                                    <a className="btn px-0"   href="tel:+91 9712433443">
                                    <h5 className="mb-0">+91  9879533443</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
