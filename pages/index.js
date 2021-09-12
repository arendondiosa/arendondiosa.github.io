import React from 'react';
import { Container } from 'react-bootstrap';
import About from '../components/Content/About';
import Projects from '../components/Content/Projects';

import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Container className="content">
        <About />
        <Projects />
      </Container>
    </Layout>
  );
}
