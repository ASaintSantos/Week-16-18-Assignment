import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, } from 'react-bootstrap';




function Navigation() {
    return (
        <div style={{width:"2000px", height:"100px"}}>
    <Navbar bg='dark' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand style={{width:"200px"}} path="/">LIFE CHURCH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{width:"200px"}} as={Link}  to="/">Home</Nav.Link>
            <Nav.Link style={{width:"200px"}} as={Link}  to="/values">Values</Nav.Link>
            <Nav.Link style={{width:"280px"}} as={Link}  to="/testimony">Testimonials</Nav.Link>
            <Nav.Link style={{width:"200px"}} as={Link}  to="/about">About</Nav.Link>
            <Nav.Link style={{width:"200px"}} as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Navigation;