import React from 'react';
import Link from 'next/link';

import { Row, Col, Container } from 'react-bootstrap';
import Social from 'components/Social';

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

const Footer = () => {
  return (
    <Container>
      <div className="content">
        <Row>
          <Col xs lg="4">
            <ul>
              {urls.map((urlItem, idx) => {
                return (
                  <li key={idx}>
                    <Link href={urlItem.url}>{urlItem.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col xs lg="4">
            .
          </Col>
          <Col xs lg="4">
            .
          </Col>
        </Row>
        <Row>
          <Col xs lg="6">
            <h3 className="primary-font">Alejandro E. Rendon</h3>
          </Col>
          <Col xs lg="6">
            <Social />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
