import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon, link, target, color, size }) => {
  return (
    <a href={link} target={target} style={{ color: color }}>
      <FontAwesomeIcon icon={icon} fixedWidth size={size} />
    </a>
  );
};

SocialIcon.propTypes = {
  icon: PropTypes.any,
  link: PropTypes.string,
  target: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default SocialIcon;
