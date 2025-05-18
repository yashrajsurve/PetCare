import React from 'react';
import team4 from '../img/team-4.jpg';
const SpecialCareOnPets = () => {
    return (
        <section className="py-5">
            <div className="container">
                {/* Row to divide the content into two columns */}
                <div className="row align-items-center">
                    {/* Left column for the image */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        {/* <img
                            src={team4}
                            alt="Special Care on Pets"
                            className="img-fluid rounded"
                        /> */}
                        <img
                           src={team4}
                           alt="Special Care on Pets"
                           className="rounded"
                           style={{ maxWidth: '500px', height: 'auto' }} // Ensures responsiveness while keeping original aspect ratio
                        />

                        {/* img-fluid makes the image responsive, rounded adds rounded corners */}
                    </div>
                    {/* Right column for text content */}
                    <div className="col-md-6">
                        {/* Subtitle or reason text */}
                        <h5 className="text-success">Why Choose Us?</h5>
                        {/* Main headline with orange and bold text */}
                        <h2>
                            <span className="text-warning font-weight-bold">Special Care</span> On Pets
                        </h2>
                        {/* Brief description */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis felis vel velit
                            volutpat lacinia.
                        </p>

                        {/* Icons with descriptions */}
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-2">
                                <i className="fas fa-check-circle text-success mr-2"></i>
                                {/* Icon for 'Best in Industry' */}
                                <span>Best In Industry</span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                                <i className="fas fa-ambulance text-success mr-2"></i>
                                {/* Icon for 'Emergency Services' */}
                                <span>Emergency Services</span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                                <i className="fas fa-heart text-success mr-2"></i>
                                {/* Icon for 'Special Care' */}
                                <span>Special Care</span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                                <i className="fas fa-headset text-success mr-2"></i>
                                {/* Icon for 'Customer Support' */}
                                <span>Customer Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialCareOnPets;
