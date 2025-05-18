import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formm from '../componet/Form';
import BookForYourPet from '../componet/BookForYourPet';



function Vacation() {
  return (
    <div className='bg-secondary-subtle container-fluid'>
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
                <Formm/>
                </Col>
                <Col lg={8} md={8} sm={12}>
                <BookForYourPet/>
                
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Vacation