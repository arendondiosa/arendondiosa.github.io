import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import Skill from 'components/Content/Skills/Skill';

const SkillList = ({ skillList }) => {
  return (
    <Row>
      <Col>
        <ul className="skill-list">
          {skillList.map((skillItem, id) => {
            return <Skill key={id} {...skillItem} />;
          })}
        </ul>
      </Col>
    </Row>
  );
};

SkillList.propTypes = {
  skillList: PropTypes.array,
};

export default SkillList;
