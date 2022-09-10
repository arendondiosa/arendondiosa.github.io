import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Social = () => {
  return (
    <div className="social-container">
      <Link href="https://twitter.com/arendondiosa">
        <a className="social-icon" target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </a>
      </Link>
      <Link href="https://github.com/arendondiosa">
        <a className="social-icon" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/arendondiosa/">
        <a className="social-icon" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
      </Link>
    </div>
  );
};

export default Social;
