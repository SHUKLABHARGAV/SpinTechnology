import React,{useEffect} from 'react'

const Counter = () =>   {
    const primary = {
        backgroundColor:'#0b6ab2'
      };
      
  return (
    <>
    <div className="container-fluid facts my-5 p-5 " style={primary}>
        <div className="row g-5">
            <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="text-center   border p-5" style={{border:'2%', borderColor:'black'}}>
                    <i className="fa fa-certificate fa-3x text-white mb-3"></i>
                    <h1 className="display-2  mb-0" data-toggle="counter-up">3</h1>
                    <span className="fs-5 fw-semi-bold text-white">Years Experience</span>
                </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="text-center border p-5">
                    <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <h1 className="display-2   mb-0"    data-toggle="counter-up">25</h1>
                    <span className="fs-5 fw-semi-bold text-white">Team Members</span>
                </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="text-center border p-5">
                    <i className="fa fa-users fa-3x text-white mb-3"></i>
                    <h1 className="display-2   mb-0" data-toggle="counter-up">20</h1>
                    <span className="fs-5 fw-semi-bold text-white">Happy Clients</span>
                </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="text-center border p-5">
                    <i className="fa fa-check-double fa-3x text-white mb-3"></i>
                    <h1 className="display-2  mb-0" data-toggle="counter-up">1</h1>
                    <span className="fs-5 fw-semi-bold text-white">Projects Done</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter
