import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ icon, name, color }) => {
  return (
    <li
      className="skill-item"
      style={{ ...styles.container, borderColor: color, color: color }}
    >
      {icon}
      <span style={styles.label}>{name}</span>
    </li>
  );
};

const styles = {
  container: {
    border: '1px solid black',
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
  icon: PropTypes.any,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Skill;
