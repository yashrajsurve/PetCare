// import React from 'react';

import price from '../img/price-1.jpg';
import price2 from '../img/price-2.jpg';
import price3 from '../img/price-3.jpg';


const Pricing = () => {
  return (
    <section className="pricing-section py-5">
      <div className="container text-center">
        <h2 className="mb-4 text-success">Pricing Plan</h2>
        <h3 className='fw-bold'>Choose the <span className="text-warning fw-bold">Best Price</span></h3>
        <div className="row mt-5">
          
          {/* Basic Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img 
                src={price}
                className="card-img-top" 
                alt="Basic Plan" 
              />
              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <h3 className="card-price">$49 <small>/mo</small></h3>
                <ul className="list-unstyled">
                  <li>✔ Feeding</li>
                  <li>✔ Lodging</li>
                  <li>✔ Spa & Grooming</li>
                  <li>✔ Veterinary Medicine</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#basic" className="btn btn-warning w-100">Sign Up Now</a>
              </div>
            </div>
          </div>
          
          {/* Standard Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img 
                src={price2} 
                className="card-img-top" 
                alt="Standard Plan" 
              />
              <div className="card-body">
                <h5 className="card-title">Standard</h5>
                <h3 className="card-price">$99 <small>/mo</small></h3>
                <ul className="list-unstyled">
                  <li>✔ Feeding</li>
                  <li>✔ Lodging</li>
                  <li>✔ Spa & Grooming</li>
                  <li>✔ Veterinary Medicine</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#standard" className="btn btn-success w-100">Sign Up Now</a>
              </div>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img 
                src={price3}
                className="card-img-top" 
                alt="Premium Plan" 
              />
              <div className="card-body">
                <h5 className="card-title">Premium</h5>
                <h3 className="card-price">$149 <small>/mo</small></h3>
                <ul className="list-unstyled">
                  <li>✔ Feeding</li>
                  <li>✔ Lodging</li>
                  <li>✔ Spa & Grooming</li>
                  <li>✔ Veterinary Medicine</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#premium" className="btn btn-warning w-100">Sign Up Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
