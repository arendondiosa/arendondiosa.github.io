import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import { FaRocket } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      <Row>
        <h2>
          <FaRocket /> Proyectos
        </h2>
      </Row>
      <Row>
        <Col sm md="4">
          <div className="project-container">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm md="4">
          <div className="project-container">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm md="4">
          <div className="project-container">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm md="4">
          <div className="project-container">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
