import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Social from 'components/Social';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="primary-font">Alejandro E. Rendon</h3>
        </Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
          <Social />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
