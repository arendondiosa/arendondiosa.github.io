import React from 'react';
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import SocialIcon from './SocialIcon';

const Social = () => {
  return (
    <div style={styles.container}>
      <SocialIcon
        color="#333537"
        icon={faGithubAlt}
        size="2x"
        link="https://github.com/arendondiosa"
        target="blank_"
      />
      <SocialIcon
        color="#0d75b5"
        icon={faLinkedinIn}
        size="2x"
        link="https://linkedin.com/in/arendondiosa"
        target="blank_"
      />
      <SocialIcon
        color="#0db1c4"
        icon={faTwitter}
        size="2x"
        link="https://twitter.com/arendondiosa"
        target="blank_"
      />
    </div>
  );
};

const styles = {
  container: {
    margin: '10px 0',
  },
};

export default Social;
