import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectHeading from './ProjectHeading';

const Project = ({ name, tools, link, achievements, description, faClass }) => {
  const items = description
    ? [createDescription(description), ...achievements]
    : achievements;
  const hasAchievements = achievements
    ? <List items={items} style={style.list} />
    : null;

  return (
    <div style={style.main}>
      <ProjectHeading name={name} tools={tools} link={link} faClass={faClass} />
      {hasAchievements}
    </div>
  );
};

function createDescription(description) {
  return `<b>${description}</b>`;
}

const style = {
  main: {
    margin: '1rem 0 0 0',
  },
  list: {
    margin: 0,
  },
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
};

export default Project;
