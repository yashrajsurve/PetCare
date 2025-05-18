
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white fs-4 fw-bold  pet' >Pet Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white bg-danger pe-3'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white pe-3'>About</Nav.Link>
            <Nav.Link href="#action2" className='text-white pe-3'>Services</Nav.Link>
            <Nav.Link href="#action2" className='text-white pe-3'>Price</Nav.Link>
            <Nav.Link href="#action2" className='text-white pe-3'>Booking </Nav.Link>


            <NavDropdown title="Pages" id="navbarScrollingDropdown" className='text-white'>
              <NavDropdown.Item href="#action3" >Pages</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='text-white' >
              Contact
            </Nav.Link>

          </Nav>
          <Button variant="danger" className='me-5'>Get Quote</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;