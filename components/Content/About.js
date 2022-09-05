import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { Col, Row } from 'react-bootstrap';

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
          <Row>
            <Col sm lg="8">
              <h1>Alejandro E. Rendon</h1>
              <h2>Ingeniero de Software</h2>
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
          <hr />
          <Row>
            <Col>
              <p>
                - Ingeniero de Software. +4 años de experiencia profesional -
                Educación: Ingeniero de Sistemas y Computación con Maestría en
                Ing. Sistemas y Computación (Enfoque en Computación de Alto
                Rendimiento (HPC) e Inteligencia Artificial) - Qué puedo hacer?
                - Sitios y aplicaciones web: Desde landing pages hasta sitios
                web con funcionalidades y manejos de datos. Todo el ciclo del
                desarrollo de software desde levantamiento de requerimientos
                hasta producción (A esto es lo que me dedico en mi trabajo) -
                Aplicativos móviles (Funcionalidades simples pero compatibles en
                Android y IOS) - Manejo de Photoshop e Illustrator. Edición de
                videos (Lo aprendí por Hobby)
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
