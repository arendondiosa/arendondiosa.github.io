import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Skill from 'components/Content/Skills/Skill';

const SkillList = ({ skillList }) => {
  return (
    <Row>
      <Col>
        <ul className='skill-list'>
          {skillList.map((skillItem) => {
            return (
                <Skill {...skillItem} />
            );
          })}
        </ul>
      </Col>
    </Row>
  );
};

export default SkillList;
