import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center py-2 theme-bg-dark">
      <small className="copyright">
        Designed with{' '}
        <i className="fas fa-heart" style={{ color: '#fb866a' }}></i> by{' '}
        <a
          href="https://themes.3rdwavemedia.com"
          target="_blank"
          rel="noreferrer"
        >
          Xiaoying Riley
        </a>{' '}
        for developers
      </small>
    </footer>
  );
};

export default Footer;
