import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ university, duration, degree, cert, courses, bootcamp, endDate, program }) => ( // activities
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>

    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>
      {university}
    </div>
    <div>
      {degree}; concentrations in {cert}
    </div>
    <div>
      {duration}
    </div>
    <div>
    <br />
    <i>Selected Coursework: </i>
      {courses}
    </div>
    {/*
    <div>
    <br />
    <i>Activities:</i><br />
      {activities}
    </div>
    */}
    <br />
    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>{bootcamp}</div>
    <div>{program}</div>
    <div>{endDate}</div>

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
};

export default Education;
