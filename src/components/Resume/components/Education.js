import React from "react";
import PropTypes from "prop-types";

import { Item } from "./Item";

export const Education = ({ data }) => {
  return (
    <ul className="timeline">
      <li className="timeline-heading text-center animate-box">
        <div>
          <h3>Education</h3>
        </div>
      </li>
      {data.map((educationItem, idx) => (
        <Item key={idx} data={educationItem} posicion={idx} />
      ))}
    </ul>
  );
};

Education.propTypes = {
  data: PropTypes.array.isRequired,
};

Education.defaultProps = {
  data: [],
};
