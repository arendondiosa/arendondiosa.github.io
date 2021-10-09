import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          <FontAwesomeIcon icon={faGithubAlt} fixedWidth />
          <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
