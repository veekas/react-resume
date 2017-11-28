import React, { PropTypes } from 'react';
import Link from '../../ui/Link';

const ProjectHeading = ({ name, tools, link, faClass }) => (
  <div style={style.main}>
    <div style={style.name}>
      {name}
      <span style={style.link}>
        <Link to={link}>
          <i className={faClass} style={style.icon}></i>
        </Link>
      </span>
    </div>
    <div style={style.tools}>
      {tools.join(', ')}
    </div>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '0.4rem',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgb(77, 100, 141)',
  },
  link: {
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  tools: {
    fontSize: '0.75rem',
    color: 'rgba(77, 100, 141, 0.75)',
  },
  icon: {
    fontSize: '1rem',
    lineHeight: '1rem',
    width: '1rem',
    height: '1rem',
    color: 'rgba(77, 100, 141, 1)',
  },
};

ProjectHeading.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectHeading;
