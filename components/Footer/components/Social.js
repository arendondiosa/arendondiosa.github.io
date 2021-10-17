import React from 'react';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import SocialIcon from './SocialIcon';

const Social = () => {
  return (
    <div style={styles.container}>
      <SocialIcon
        color="#333537"
        icon={faGithubSquare}
        size="3x"
        link="https://github.com/arendondiosa"
        target="blank_"
      />
      <SocialIcon
        color="#0d75b5"
        icon={faLinkedin}
        size="3x"
        link="https://linkedin.com/in/arendondiosa"
        target="blank_"
      />
      <SocialIcon
        color="#0db1c4"
        icon={faTwitterSquare}
        size="3x"
        link="https://twitter.com/arendondiosa"
        target="blank_"
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '10px 0',
  },
};

export default Social;
