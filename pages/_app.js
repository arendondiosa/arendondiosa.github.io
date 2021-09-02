import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default MyApp;
