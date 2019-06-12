import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const navStyle = {
  fontFamily: "'Work Sans', sans-serif",
}

const ResponsiveNavbar = () => {
  return (
    <Navbar fixed="bottom" style={navStyle} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
        <Nav.Link href="/"><i class="fas fa-home"></i></Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default ResponsiveNavbar;
