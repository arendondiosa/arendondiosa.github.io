import React from "react";
import PropTypes from "prop-types";

import { Item } from "./Item";

export const WorkExperience = ({ data }) => {
  return (
    <ul className="timeline">
      <li className="timeline-heading text-center animate-box">
        <div>
          <h3>Work Experience</h3>
        </div>
      </li>
      {data.map((workExperienceItem, idx) => (
        <Item key={idx} data={workExperienceItem} posicion={idx} />
      ))}
    </ul>
  );
};

WorkExperience.propTypes = {
  data: PropTypes.array.isRequired,
};

WorkExperience.defaultProps = {
  data: [],
};
