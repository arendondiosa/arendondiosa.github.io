import React from "react";
import { Container } from "react-bootstrap";

import Footer from "../../components/Footer/Footer";
import NavbarSite from "../../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSite />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
