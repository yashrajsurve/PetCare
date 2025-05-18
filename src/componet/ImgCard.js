import React from 'react';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';

const TeamMembers = () => {
  const teamData = [
    { name: "Mollie Ross", role: "GROOM & CUDS", img: team1 },
    { name: "Jennifer Page", role: "CHIEF EXECUTIVE", img: team2 },
    { name: "Kate Glover", role: "GROOMER", img: team3 },
    { name: "Lilly Fry", role: "GROOMER", img: team4 }
  ];

  return (
    <section className="team-section py-5">
      <div className="container text-center">
        <h2 className="mb-4 text-success">Team Member</h2>
        <h3 className='fw-bold'>Meet Our <span className="text-warning fw-bold">Team Member</span></h3>
        <div className="row mt-5">
          {teamData.map((member, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <img 
                  src={member.img} 
                  className="card-img-top" 
                  alt={member.name} 
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
