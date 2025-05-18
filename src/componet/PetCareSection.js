import React from 'react';
import about1 from '../img/about-1.jpg';
// import about1 from './img/about-1.jpg';
import about2 from '../img/about-2.jpg';
import about3 from '../img/about-3.jpg';

function PetCareSection  ()  {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h4 className="text-success">About Us</h4>
          <h2 className="text-dark">
            <strong className="text-Secondary">Boarding</strong> & <br/>
            <span className="text-success fs-2 fw-bold">Daycare</span>
          </h2>
          <p className="text-secondary fw-bold">
            Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea.
            <br/> Just clita ut stet kasd at diam sit erat vero sit.
          </p>
          <p className="text-muted">
            Dolores lorem ipsum lorem sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo.
          </p>
          <ul className="list-unstyled">
            <li className="text-success">
              <i className="bi bi-check-circle-fill"></i> Best In Industry
            </li>
            <li className="text-success">
              <i className="bi bi-check-circle-fill"></i> Emergency Services
            </li>
            <li className="text-success">
              <i className="bi bi-check-circle-fill"></i> 24/7 Customer Support
            </li>
          </ul>
          <a href="#" className="btn btn-Danger text-danger ">Learn More</a>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <div className="row">
            <div className="col-12 mb-3">
              <img src={about1} alt="Dog on Couch" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <img src={about2} alt="Dog and Cats" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <img src={about3} alt="Cats" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
