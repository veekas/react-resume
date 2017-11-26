import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ university, duration, degree, cert, courses, activities, bootcamp, endDate, program }) => (
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>

    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>
      {bootcamp}
    </div>
    <div>
      {program}
    </div>
    <div>
      {endDate}
    </div>

    <br />

    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>
      {university}
    </div>
    <div>
      {degree};
    </div>
    <div>
      {cert}
    </div>
    <div>
      {duration}
    </div>
    <div>
    <br />
    <i>Relevant Coursework:</i><br />
      {courses}
    </div>
    {/*
    <div>
    <br />
    <i>Activities:</i><br />
      {activities}
    </div>
    */}

  </section>
);

const style = {
  main: {
    margin: '0.4rem 0 0 0',
  },
  text: {
    textAlign: 'left',
  },
};

Education.propTypes = {
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  cert: PropTypes.string.isRequired,
  courses: PropTypes.string.isRequired,
  // activities: PropTypes.string.isRequired,
  bootcamp: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
};

export default Education;
