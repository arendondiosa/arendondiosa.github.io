import React from 'react';
import PropTypes from 'prop-types';

import About from '../components/Content/About';

import Layout from '../components/Layout/Layout';
import { getAllFilesMetadata } from '../lib/mdx';

/* import Projects from 'components/Content/Projects';
import Skills from 'components/Content/Skills';
 */
const Home = ({ posts }) => {
  return (
    <Layout>
      <About />
      {/* <hr />
        <Projects />
        <hr />
        <Skills /> */}
      {/* <div>
        {posts.map((post) => (
          <Card key={post.slug}>
            <Card.Header as="h5">{post.title}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>{post.date}</Card.Text>
              <Card.Link href={`/blog/${post.slug}`}>Card Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div> */}
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}

Home.propTypes = {
  posts: PropTypes.array,
};

export default Home;
