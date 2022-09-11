import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import ThemeToggle from '../../components/ThemeToggle';

export const NavbarSite = () => {
  return (
    <Navbar
      className="custom-navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="custom-navbar-link" href="/">
          ALEJANDRO E. RENDON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="custom-navbar-link" href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link className="custom-navbar-link" href="/projects">
              PROJECTOS
            </Nav.Link>
            <Nav.Link className="custom-navbar-link" href="/about">
              🧑🏻‍🦳 ACERCA DE
            </Nav.Link>
            <Nav.Link className="custom-navbar-link" href="/contact">
              CONTACTO
            </Nav.Link>
            <Nav.Link className="custom-navbar-link-button-theme" eventKey={2}>
              <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
