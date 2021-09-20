import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import About from '../components/Content/About';
import Projects from '../components/Content/Projects';

import Layout from '../components/Layout/Layout';
import { getAllFilesMetadata } from '../lib/mdx';

const Home = ({ posts }) => {
  return (
    <Layout>
      <Container className="content">
        <About />
        <Projects />
      </Container>
      <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <h2>{post.title} &rarr;</h2>
              <p>{post.date}</p>
            </a>
          </Link>
        ))}
      </div>
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
