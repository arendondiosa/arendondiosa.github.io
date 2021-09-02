import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
