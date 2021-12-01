import React from 'react';
import PropTypes from 'prop-types';

import NavbarSite from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSite />
      <div className="main-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
