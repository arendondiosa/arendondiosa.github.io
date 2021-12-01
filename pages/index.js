import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout/Layout';
import { getAllFilesMetadata } from '../lib/mdx';

const Home = ({ posts }) => {
  return <Layout></Layout>;
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
