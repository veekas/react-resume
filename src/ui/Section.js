import React, { PropTypes } from "react";

const Section = (
  { children } // color
) => <section>{children}</section>;

Section.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
