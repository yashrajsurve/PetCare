import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          {/* PetLover Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-danger">PetLover</h5>
            <p>
              Ipsum lorem est sed vero at lorem sed sit, sed. Ipsum lorem est
              vero lorem ipsum, ipsum lorem. Ipsum sed gubergren sea sed ipsum
              lorem lorem.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="col-lg-4 col-md-6">
            <h5>Get In Touch</h5>
            <p><i className="fas fa-map-marker-alt"></i> 1234 Street, New York, USA</p>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
            <div>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Popular Links Section */}
          <div className="col-lg-2 col-md-6">
            <h5>Popular Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-2 col-md-6">
            <h5>Newsletter</h5>
            <form>
              <input type="text" className="form-control mb-2" placeholder="Your Name" />
              <input type="email" className="form-control mb-2" placeholder="Your Email" />
              <button type="submit" className="btn btn-danger w-100">Submit Now</button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="m-0">Your Site Name. All Rights Reserved. Designed by HTML Codex.</p>
            <p>Privacy | Terms | FAQs | Help</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
