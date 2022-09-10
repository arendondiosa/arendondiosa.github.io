import React from 'react';
/* import Link from 'next/link';
import { FiUser, FiFile } from 'react-icons/fi';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'; */
import { Col, Row } from 'react-bootstrap';

import { prefix } from '../../utils/prefix';
import Social from 'components/Social';

const About = () => {
  return (
    <>
      <Row>
        <Col sm lg="2">
          <Row>
            <div className="photo-container">
              <img src={`${prefix}/profile.png`} className="photo" />
            </div>
          </Row>
        </Col>
        <Col sm lg="10">
          <div className="info-container">
            <Row>
              <Col sm lg="8">
                <div className="title-container">
                  <h1 className="primary-font">Alejandro E. Rendon</h1>
                  <h2>Ingeniero de Software</h2>
                </div>
              </Col>
              <Col sm lg="4">
                <Social />
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>
                    Ingeniero de Software - +4 años de experiencia profesional{' '}
                  </li>
                  <li>
                    Educación: Ingeniero de Sistemas y Computación con Maestría
                    en Ing. Sistemas y Computación (Enfoque en Computación de
                    Alto Rendimiento (HPC) e Inteligencia Artificial).
                  </li>
                </ul>
              </Col>
            </Row>
            {/*  <Row>
              <Col>
                <ButtonGroup aria-label="buttons-about">
                  <Button variant="primary">
                    <FiUser /> Primary
                  </Button>
                  <Button variant="primary">
                    <FiFile /> Primary
                  </Button>
                </ButtonGroup>
              </Col>
            </Row> */}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default About;
