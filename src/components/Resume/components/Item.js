import React from "react";
import PropTypes from "prop-types";

export const Item = ({ data, posicion }) => {
  return (
    <li
      className={`${
        posicion % 2 === 1 ? "timeline-inverted" : ""
      } animate-box ${posicion % 2 === 0 ? "timeline-unverted" : ""}`}
    >
      <div className="timeline-badge">
        <i className="icon-graduation-cap"></i>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{data.title}</h3>
          <span className="company">{`${data.company} - ${data.start_date} - ${data.end_date}`}</span>
        </div>
        <div className="timeline-body">
          <p>{data.description}</p>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
  posicion: PropTypes.number.isRequired,
};

Item.defaultProps = {
  data: {
    title: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
  },
};
