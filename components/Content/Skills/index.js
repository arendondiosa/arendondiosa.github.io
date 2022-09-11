import React from 'react';
import { Row } from 'react-bootstrap';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiLinux,
  DiGithubAlt,
  DiGit,
  DiDatabase,
} from 'react-icons/di';

import {
  FaAws,
  FaJenkins,
  FaDocker,
  FaHandsHelping,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';

import SkillList from './SkillList';

const softSkillList = [
  {
    icon: <FaHandsHelping />,
    color: '',
    name: 'Trabajo en equipo',
  },
  {
    icon: <FaLightbulb />,
    color: '',
    name: 'Resolución de retos',
  },
];

const webSkillList = [
  {
    icon: <DiHtml5 />,
    color: '#ff5f52',
    name: 'HTML',
  },
  {
    icon: <DiCss3 />,
    color: '#9162e4',
    name: 'CSS',
  },
  {
    icon: <DiJsBadge />,
    color: '#ffea00',
    name: 'Javascript',
  },
];

const specificSkillList = [
  {
    icon: <DiReact />,
    color: '#00e5ff',
    name: 'ReactJS',
  },
  {
    icon: <DiNodejsSmall />,
    color: '#9ccc65',
    name: 'NodeJS',
  },
  {
    icon: <DiMongodb />,
    color: '#4caf50',
    name: 'MongoDB',
  },
  {
    icon: <DiPython />,
    color: '#03a9f4',
    name: 'Python',
  },
  {
    icon: <DiDatabase />,
    color: '',
    name: 'SQL',
  },
  {
    icon: <DiGit />,
    color: '',
    name: 'Git',
  },
  {
    icon: <DiGithubAlt />,
    color: '',
    name: 'GitHub - GitHub Actions',
  },
  {
    icon: <FaJenkins />,
    color: '',
    name: 'Jenkins',
  },
  {
    icon: <FaDocker />,
    color: '',
    name: 'Docker',
  },
  {
    icon: <FaAws />,
    color: '',
    name: 'AWS',
  },
  {
    icon: <DiLinux />,
    color: '',
    name: 'Linux',
  },
];

const Skills = () => {
  return (
    <>
      <Row>
        <h2>
          <FaRocket /> Habilidades
        </h2>
      </Row>
      <SkillList skillList={webSkillList} />
      <SkillList skillList={specificSkillList} />
      <SkillList skillList={softSkillList} />
    </>
  );
};

export default Skills;
