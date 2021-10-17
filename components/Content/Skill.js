import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ icon, name, color }) => {
  return (
    <div style={{ ...styles.container, borderColor: color, color: color }}>
      <FontAwesomeIcon icon={icon} fixedWidth />
      <span style={styles.label}>{name}</span>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid black',
    borderRadius: '25px',
    display: 'inline-block',
    margin: '5px',
    padding: '5px 15px',
  },
  label: {
    paddingLeft: '5px',
  },
};

Skill.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Skill;
