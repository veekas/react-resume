import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const Header = ({ firstName, lastName, subheader, website }) => {
  const { title, qualifier } = subheader;

  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        <span style={style.span}>{firstName}</span>
        <span style={style.span}>&nbsp;</span>
        <span style={style.span}>{lastName}</span>
      </h1>
      <span style={style.subheader}>
        {/* qualifier */} {title}
        | <Link to={website.link} style={{ padding: 0 }}>{website.name}</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i>This resume was built with React</i>
          <Link to="https://github.com/veekas/react-resume">
            <i className="fa fa-github" style={style.icon}></i>
          </Link>
      </span>
    </section>
  );
};

const style = {
  main: {
    padding: '16px 0 1px 0',
    flex: '1 1 auto',
    fontSize: '1.6rem',
    marginBottom: '-0.4em',
    height: '9rem',
  },
  h1: {
    color: 'rgb(21, 44, 85)',
    display: 'block',
    fontSize: '3.4rem',
  },
  subheader: {
    fontSize: '1.2rem',
    display: 'block',
    marginLeft: '5px',
    marginTop: '-6px',
    color: 'rgb(77, 100, 141)',
  },
  span: {
    display: 'inline-block',
  },
  a: {
    float: 'right',
    fontSize: '0.8rem',
    display: 'block',
    color: 'rgb(77, 100, 141)',
  },
  icon: {
    lineHeight: '0.8rem',
    width: '0.8rem',
    height: '0.8rem',
    color: 'rgba(77, 100, 141, 1)',
  },
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  subheader: PropTypes.object.isRequired,
};

export default Header;
