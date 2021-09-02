import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Footer from '../../components/Footer/Footer';
import NavbarSite from '../../components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSite />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
