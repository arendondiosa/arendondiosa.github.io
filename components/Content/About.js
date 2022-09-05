import React from 'react';
import Link from 'next/link';
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiUser,
  FiFile,
} from 'react-icons/fi';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from 'react-icons/di';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';

import { prefix } from '../../utils/prefix';

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
                <div className="social-container">
                  <Link href="/">
                    <a className="social-icon">
                      <FiTwitter />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="social-icon">
                      <FiGithub />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="social-icon">
                      <FiLinkedin />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  - Ingeniero de Software. +4 años de experiencia profesional -
                  Educación: Ingeniero de Sistemas y Computación con Maestría en
                  Ing. Sistemas y Computación (Enfoque en Computación de Alto
                  Rendimiento (HPC) e Inteligencia Artificial).
                </p>
              </Col>
            </Row>
            <Row>
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
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default About;
