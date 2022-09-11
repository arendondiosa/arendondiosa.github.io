import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/globals.css';
import 'styles/about.css';
import 'styles/skills.css';
import 'styles/projects.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Alejandro E. Rendon - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default MyApp;
