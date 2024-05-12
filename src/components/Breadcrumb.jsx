import React from 'react'

const Breadcrumb = (props) => {
  return (
    <>
     <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white animated slideInRight">{props.title}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb animated slideInRight mb-0">
                    <li className="breadcrumb-item"><a href="#s">Home</a></li>
                     
                    <li className="breadcrumb-item active" aria-current="page">{props.page}</li>
                </ol>
            </nav>
        </div>
    </div> 
    </>
  )
}

export default Breadcrumb
