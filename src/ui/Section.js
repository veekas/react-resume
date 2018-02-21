import React, { PropTypes } from 'react';

const Section = ({ children }) => ( // color
  <section style={{
    marginTop: '-1rem',
    // borderTop: '0.1px solid ' + color,
    marginBottom: '-0.4rem',
    padding: '0 0.5rem',
  }}>
    {children}
  </section>
);

Section.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;
