import React, { PropTypes } from "react";
import SidebarHeading from "./SidebarHeading";

const Education = (
  { institutions } // activities
) => (
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>

    {institutions.map(
      ({
        university,
        duration,
        degree,
        cert,
        courses,
        bootcamp,
        endDate,
        program,
      }) => (
        <div>
          <div
            style={{
              ...style.text,
              fontWeight: "bold",
            }}
          >
            {university}
          </div>
          <div>
            {degree}
            {cert && `; concentrations in ${cert}`}
          </div>
          <div>{duration}</div>
          {courses && (
            <div>
              <br />
              <i>Selected Coursework: </i>
              {courses}
            </div>
          )}
          {/* <br /> */}
          {/*
      <div>
      <br />
      <i>Activities:</i><br />
        {activities}
      </div>
      */}
          {!!bootcamp && (
            <div>
              <div
                style={{
                  ...style.text,
                  fontWeight: "bold",
                }}
              >
                {bootcamp}
              </div>
              <div>{program}</div>
              <div>{endDate}</div>
            </div>
          )}
        </div>
      )
    )}
  </section>
);

const style = {
  main: {},
  text: {
    margin: "0.6rem 0 0 0",
    textAlign: "left",
  },
};

Education.propTypes = {
  institutions: PropTypes.array.isRequired,
  duration: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  cert: PropTypes.string.isRequired,
  courses: PropTypes.string.isRequired,
};

export default Education;
