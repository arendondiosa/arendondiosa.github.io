import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithubAlt,
  faPython,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Row>
        <Col sm lg="4">
          <Row>
            <img src={'profile.png'} />
          </Row>
          <Row>
            <Col sm lg="12">
              <FontAwesomeIcon icon={faGithubAlt} fixedWidth />
              <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <h1>🧑🏻‍🦳 Alejandro E. Rendon</h1>
            <ul>
              <li>Ingeniero de Software. +4 años de experiencia profesional</li>
              <li>
                Educación:
                <ul>
                  <li>Ingeniero de Sistemas y Computación</li>
                  <li>
                    Maestría en Ing. Sistemas y Computación (Enfoque en
                    Computación de Alto Rendimiento (HPC) e Inteligencia
                    Artificial)
                  </li>
                </ul>
              </li>
            </ul>
          </Row>
          <Row>
            <Col xs lg="12">
              <FontAwesomeIcon icon={faPython} fixedWidth />
              <FontAwesomeIcon icon={faJs} fixedWidth />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
