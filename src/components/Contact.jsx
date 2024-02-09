import React from 'react'
import Card from "./Contactcard"

const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: "90px;", height: "90px;"}}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Phone Number</h4>
                        <p className="mb-2">+012 345 67890</p>
                        <p className="mb-4">+012 345 67890</p>
                        <a className="btn btn-primary px-4" href="tel:+0123456789">Call Now <i
                                className="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: "90px;", height: "90px;"}}>
                            <i className="fa fa-envelope-open fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Email Address</h4>
                        <p className="mb-2">info@example.com</p>
                        <p className="mb-4">support@example.com</p>
                        <a className="btn btn-primary px-4" href="mailto:info@example.com">Email Now <i
                                className="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: "90px;", height: "90px;"}}>
                            <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Office Address</h4>
                        <p className="mb-2">+012 345 67890</p>
                        <p className="mb-4">+012 345 67890</p>
                        <a className="btn btn-primary px-4" href="https://goo.gl/maps/FsznshxgnULBGgkN9"
                            target="blank">Direction <i class="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  
                    <iFrame className="w-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.0139888903848!2d71.66306351244059!3d22.727201460314834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941007401fc4d%3A0x219c1cbdf7b0dbc9!2sSpin%20Technology!5e0!3m2!1sen!2sin!4v1707459896944!5m2!1sen!2sin"
                        frameborder="0" style={{minHeight: "450px;", border:"0;"}} allowFullScreen="" aria-hidden="false"
                        tabindex="0"></iFrame>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Contact Us</p>
                    <h1 className="display-5 mb-4">If You Have Any Queries, Please Feel Free To Contact Us</h1>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form
                        with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're
                        done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Call Us</h6>
                                    <span>+012 345 67890</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Mail Us</h6>
                                    <span>info@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               {/* contact card */}
               <Card/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
