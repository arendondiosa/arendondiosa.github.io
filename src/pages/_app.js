import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default App;
