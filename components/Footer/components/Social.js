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

      <FontAwesomeIcon icon={faLinkedin} fixedWidth size="3x" />
      <FontAwesomeIcon icon={faTwitterSquare} fixedWidth size="3x" />
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
