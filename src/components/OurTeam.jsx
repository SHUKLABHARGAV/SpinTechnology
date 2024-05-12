import React from 'react'
import img1 from "./img/team-1.jpg"
import img2 from "./img/team-2.jpg"
import img3 from "./img/team-3.jpg"

const OurTeam = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px;"}}>
                <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
                <h1 className="display-5 mb-5">Dedicated Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <img className="img-fluid" src={img1} alt=""/>
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px;",height: "90px;"}}>
                                <i className="fa fa-2x fa-share text-white"></i>
                            </div>
                            <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                style={{height:" 90px;"}}>
                                <h5>Rob Miller</h5>
                                <span className="text-primary">CEO & Founder</span>
                                <div className="team-social">
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="s"><i
                                            className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="a"><i
                                            className="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-dark rounded-circle mx-1" href="a"><i
                                            className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <img className="img-fluid" src={img2} alt=""/>
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px;" ,height: "90px;"}}>
                                <i className="fa fa-2x fa-share text-white"></i>
                            </div>
                            <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                style={{height: "90px;"}}>
                                <h5>Adam Crew</h5>
                                <span className="text-primary">Project Manager</span>
                                <div className="team-social">
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="a"><i
                                            className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="a"><i
                                            className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="a"><i
                                            className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <img className="img-fluid" src={img3} alt=""/>
                        <div class="d-flex">
                            <div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px;", height: "90px;"}}>
                                <i className="fa fa-2x fa-share text-white"></i>
                            </div>
                            <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                style={{height: "90px;"}}>
                                <h5>Peter Farel</h5>
                                <span className="text-primary">Engineer</span>
                                <div className="team-social">
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="g"><i
                                            className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="g"><i
                                            className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href="c"><i
                                            className="fab fa-instagram"></i></a>
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

export default OurTeam
