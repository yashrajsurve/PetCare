import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';

const CardComponent = () => {
  return (
    <div className="container py-5">
      {/* <h2 className="mb-4 text-center fw-bold">Updates From Blog</h2> */}
      <h3 className='text-success text-center'>pet blog <br/> <span className=" text-black fw-bold">Updates <span className=''>From</span> Blog</span></h3>
      <div className="d-flex flex-wrap justify-content-around">
        {/* Card 1 */}
        <Card className="mb-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog1}/>
          <Card.Body>
            <Card.Title>Pet Blog</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Updates From Blog</Card.Subtitle>
            <Card.Text>
              Diam amet eos at no eos <br />
              Cameretes of rosto, burs pun citas de
            </Card.Text>
            <a href="#" className="btn text-danger text-decoration-none">Read More</a>

          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card className="mb-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog2} />
          <Card.Body>
            <Card.Title>Pet Blog</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Updates From Blog</Card.Subtitle>
            <Card.Text>
              Diam amet eos at no eos <br />
              Cameretes of rosto, burs pun citas de
            </Card.Text>
            <a href="#" className="btn text-danger">Read More</a>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card className="mb-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog3} />
          <Card.Body>
            <Card.Title>Pet Blog</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Updates From Blog</Card.Subtitle>
            <Card.Text>
              Diam amet eos at no eos <br />
              Cameretes of rosto, burs pun citas de
            </Card.Text>
            <a href="#" className="btn text-danger">Read More</a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
