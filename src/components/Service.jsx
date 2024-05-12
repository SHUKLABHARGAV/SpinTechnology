import React from 'react'
import img1 from "./img/service-1.jpg"
import img2 from "./img/service-2.jpg"
import img3 from "./img/service-3.jpg"

const Service = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s"style={{maxWidth:"600px"}}>
                <p className="fw-medium text-uppercase text-primary mb-2">Our Services</p>
                <h1 className="display-5 mb-4">We Provide Best Industrial Services</h1>
            </div>
            <div className="row gy-5 gx-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src={img1} alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src={img1} alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Cmc Engineer</h3>
                                <hr className="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="n">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid"  src={img2} alt="" />
                        <div className="service-img">
                            <img className="img-fluid"  src={img2} alt="" />
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0"> Vmc Engineer</h3>
                                <hr class="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="n">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid"  src={img3} alt="" />
                        <div className="service-img">
                            <img className="img-fluid"  src={img3} alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">Spindel Manufacturing</h3>
                                <hr class="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="6">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service
