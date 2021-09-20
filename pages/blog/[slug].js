import React from 'react';
import PropTypes from 'prop-types';
import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import Layout from '../../components/Layout/Layout';

const Post = ({ source, frontmatter }) => {
  return (
    <Layout>
      <MDXRemote {...source} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

Post.propTypes = {
  source: PropTypes.object,
  frontmatter: PropTypes.object,
};

export default Post;
