import React from 'react';
import testimonial from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import testimonial3 from '../img/testimonial-3.jpg';

const Testimonials = () => {
  const testimonialsData = [
    { 
      name: "Client Name", 
      profession: "Freelancer", 
      img: testimonial , 
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." 
    },
    { 
      name: "Client Name", 
      profession: "Freelancer", 
      img:testimonial2 , 
      quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit." 
    },
    { 
      name: "Client Name", 
      profession: "Freelancer", 
      img:testimonial3 , 
      quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam." 
    }
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <h2 className="mb-4 text-success">Testimonial</h2>
        <h3 className='fw-bold'>Our Client<span className="text-warning fw-bold"> Says</span></h3>
        <div className="row mt-5">
          {testimonialsData.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title">{testimonial.name}</h5>
                  <p className="card-text text-muted">{testimonial.profession}</p>
                  <p className="card-text">"{testimonial.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Pagination or Carousel Indicators */}
        <div className="d-flex justify-content-center mt-3">
          <button type="button" className="btn btn-light btn-sm mx-1"></button>
          <button type="button" className="btn btn-light btn-sm mx-1"></button>
          <button type="button" className="btn btn-light btn-sm mx-1"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
