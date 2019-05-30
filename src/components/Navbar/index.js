import React from 'react';
import Style from '../Navbar/style.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
const ResponsiveNavbar = () => {
    return (
<Navbar id="navbar" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Haydn Neese</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="#about">About </Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Email/Phone</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default ResponsiveNavbar;
