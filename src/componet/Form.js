import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formm() {
  return (
    <div style={{backgroundColor:"orange"}}>
      <div style={{width:"80%", margin:"0 auto"}}>
      <Form className='py-4'>
        <Form.Control type="text" placeholder="Your Name"  className='my-2'/>
        <Form.Control type="email" placeholder="Your Email"   className='my-2'/>
        <Form.Control type="date" placeholder="Reservation Date"   className='my-2'/>
        <Form.Control type="time" placeholder="Reservation Time"  className='my-2' />
        <Form.Select aria-label="Default select example"  className='my-2'>
      <option>Select Service</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <Button variant="dark" type="submit" style={{width:"100%"}}   className='my-2'>
      Book Now
      </Button>

        </Form>
      </div>

      
    </div>
  )
}

export default Formm