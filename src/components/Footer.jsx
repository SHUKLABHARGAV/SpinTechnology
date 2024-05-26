import React from 'react'
import {Link} from "react-router-dom"
// import img1 from "./img/logo 1.jpeg"
const Footer = () => {
  return (
    <>
        <div className="container-fluid footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor:'#0b6ab2'}}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Our Office</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Spin Industries , New 80 Feet Rd, Ambawadi Phase 4, Udhyog Nagar, Surendranagar, Gujarat 363001</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9879533443</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i> spin.ind443@gmail.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-2" href="n"><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-light  rounded-circle me-2" href="n"><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-light  rounded-circle me-2" href="v"><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-light  rounded-circle me-2" href="n"><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <Link to="/Aboutweb" className="btn btn-link"   >About</Link>
                <Link to="/Serviceweb" className="btn btn-link" >Sevice</Link>
                <Link to="/Ourteamweb" className="btn btn-link" >Our Team</Link>
                <Link to="Testimonial" className="btn btn-link" >TestiNomials</Link>
                <Link to="/Contactweb" className="btn btn-link" >Contact</Link>
                   
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Business Hours</h5>
                    <p className="mb-1">Monday - Friday</p>
                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                    <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className="form-control  w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"/>
                        <button type="button"
                            className="btn py-2 position-absolute top-0 end-0 mt-2 me-2" style={{ backgroundColor:'#0b6ab2',color:'white'}}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid copyright bg-dark py-4">
        <div className="container text-center">
            <p className="mb-2">Copyright &copy; <a className="fw-semi-bold" href="5#">Your Site Name</a>, All Right Reserved.
            </p>
            
        </div>
    </div>
    </>
  )
}

export default Footer
