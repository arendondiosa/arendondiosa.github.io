import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Navbar, Nav } from 'react-bootstrap';

import NavbarItem from './NavbarItem';

// import ThemeToggle from '../../components/ThemeToggle';

const urls = [
  {
    name: '🧑🏻‍🦳 ACERCA DE',
    url: '/about',
  },
  {
    name: 'PROJECTOS',
    url: '/projects',
  },
  {
    name: 'BLOG',
    url: '/blog',
  },
  {
    name: 'CONTACTO',
    url: '/contact',
  },
];

export const NavbarSite = () => {
  const router = useRouter();

  return (
    <Navbar
      className="custom-navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Link href="/">
          <div className="custom-navbar-link navbar-brand">
            ALEJANDRO E. RENDON
          </div>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto"></Nav>
          <Nav>
            {urls.map((urlItem, idx) => {
              return (
                <NavbarItem
                  key={idx}
                  url={urlItem.url}
                  name={urlItem.name}
                  isActive={router.pathname === urlItem.url}
                />
              );
            })}
            {/* <Nav.Link className="custom-navbar-link-button-theme" eventKey={2}>
              <ThemeToggle />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
