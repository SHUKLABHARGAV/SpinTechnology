 import React from 'react'
 
 
import {Link} from "react-router-dom"
 
const Navbar = () => {
  return (
    <>
  
     
 
    <div className="container-fluid px-0" style={{backgroundColor:' #0b6ab2'}}>
        <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
                <div className="h-100 d-inline-flex align-items-center text-white">
                    <span>Follow Us:</span>
                    <a className="btn btn-link text-light" href="d"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-link text-light" href="d"><i className="fab fa-twitter"></i></a>
                    <a class="btn btn-link text-light" href="d"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-link text-light" href="d"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                    <span className="fs-5 fw-bold">+91 9879533443</span>
                </div>
            </div>
        </div>
    </div>
    
     
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <Link to="/" className="navbar-brand ps-5 me-0">
 
            <h1 className="text-white m-0">Spin Industries</h1>
        </Link>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                 
                <Link to="/Aboutweb" id='Home' className="nav-item nav-link"  >About</Link>
                <Link to="/Serviceweb" className="nav-item nav-link">Sevice</Link>
                <Link to="/Ourteamweb" className="nav-item nav-link">Our Team</Link>
                <Link to="/Ourproductweb" className="nav-item nav-link">Our Products</Link>
                <Link to="/Testimonial" className="nav-item nav-link">TestiNomials</Link>
                <Link to="/Contactweb" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="t77" className="btn  btn-light px-3 d-none d-lg-block" style={{ backgroundColor:'#0b6ab2',color:'white'}}>Get A Quote</a>
        </div>
    </nav>
    <a href="#" className="btn btn-lg   btn-lg-square rounded-circle back-to-top" value="Home"  style={{ backgroundColor:'#0b6ab2',color:'white'}}>
        <i className="bi bi-arrow-up"></i>
        </a>

     
    </>
  )
}

export default Navbar
