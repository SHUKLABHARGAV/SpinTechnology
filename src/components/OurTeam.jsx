import React,{ useState, useEffect } from 'react'
import img1 from "./img/1.png"
import img2 from "./img/team-2.jpg"
import img3 from "./img/team-3.jpg"
 

const OurTeam = () => {
    const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../team.json');
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const primary = {
    color:'#0b6ab2'
  };
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="fw-medium text-uppercase   mb-2" style={primary}>Our Team</p>
                <h1 className="display-5 mb-5">Dedicated Team Members</h1>
            </div>
            <div className="row g-4">
             
                {teamData.map(member => (
        <div key={member.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <img className="img-fluid"   src={member.imgSrc}
      alt={member.name}
   />
            <div className="d-flex">
              <div className="flex-shrink-0 btn-square bg-dark" style={{ width: "90px", height: "90px" }}>
                <i className="fa fa-2x fa-share text-white"></i>
              </div>
              <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{ height: "90px" }}>
                <h5>{member.name}</h5>
                <span className="text-primary">{member.title}</span>
                <div className="team-social">
                  <a className="btn btn-square btn-dark rounded-circle mx-1" href={member.facebookLink}><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-dark rounded-circle mx-1" href={member.twitterLink}><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-dark rounded-circle mx-1" href={member.instagramLink}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
            </div>
        </div>
    </div> 
    </>
  )
}

export default OurTeam
