import React from 'react';
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faGitAlt,
  faGithubAlt,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';
import Skill from './Skill';
import Social from '../Footer/components/Social';
import { prefix } from '../../utils/prefix';

const About = () => {
  return (
    <>
      <Row>
        <Col sm lg="4">
          <Row>
            <img src={`${prefix}/profile.png`} />
          </Row>
          <Row>
            <Col sm lg="12">
              <Social />
            </Col>
          </Row>
        </Col>
        <Col sm lg="8">
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
          <Row className="justify-content-center">
            <Col xs lg="12">
              <Skill icon={faHtml5} name="HTML5" color="#0db1c4" />
              <Skill icon={faCss3} name="CSS3" color="#0db1c4" />
              <Skill icon={faPython} name="Python" color="#0d38ae" />
              <Skill icon={faJs} name="Javascript" color="#c4c40d" />
              <Skill icon={faReact} name="ReactJS" color="#0db1c4" />
            </Col>
            <Col xs lg="12">
              <Skill icon={faGitAlt} name="Git" color="#0db1c4" />
              <Skill icon={faGithubAlt} name="GitHub" color="#0db1c4" />
              <Skill icon={faGitlab} name="GitLab" color="#0db1c4" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <h1 style={styles.message}>🛠 Work in Progress 👷🏻‍♂️</h1>
      </Row>
    </>
  );
};

const styles = {
  message: {
    textAlign: 'center',
  },
};

export default About;
