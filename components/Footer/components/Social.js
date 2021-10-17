import React from 'react';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => {
  return (
    <div style={styles.container}>
      <a href="https://github.com/arendondiosa" target="blank_">
        <FontAwesomeIcon icon={faGithubSquare} fixedWidth size="3x" />
      </a>
      <a href="https://linkedin.com/in/arendondiosa" target="blank_">
        <FontAwesomeIcon icon={faLinkedin} fixedWidth size="3x" />
      </a>
      <a href="https://twitter.com/arendondiosa" target="blank_">
        <FontAwesomeIcon icon={faTwitterSquare} fixedWidth size="3x" />
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '10px 0',
  },
  icon: {},
};

export default Social;
