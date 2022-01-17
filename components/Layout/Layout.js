import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import { NavbarSite } from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';

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
