import React, { PropTypes } from "react";

const Education = (
  { institutions } // activities
) => (
  <section style={{ ...defaultStyles.main }}>
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
              ...defaultStyles.title,
            }}
          >
            {university}
          </div>

          <div style={defaultStyles.mainSection}>
            <div style={defaultStyles.degree}>
              {degree}
              {cert && `; concentrations in ${cert}`}
            </div>

            <div
              style={
                university ? defaultStyles.locationDate : defaultStyles.date
              }
            >
              {duration}
            </div>
          </div>

          {/* {courses && (
            <div>
              <br />
              <i>Selected Coursework: </i>
              {courses}
            </div>
          )} */}
          {/* <br /> */}
          {/*
      <div>
      <br />
      <i>Activities:</i><br />
        {activities}
      </div>
      */}
          {/* {!!bootcamp && (
            <div>
              <div
                style={{
                  ...defaultStyles.text,
                  fontWeight: "bold",
                }}
              >
                {bootcamp}
              </div>
              <div>{program}</div>
              <div>{endDate}</div>
            </div>
          )} */}
        </div>
      )
    )}
  </section>
);

const defaultStyles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: "0.75rem",
    paddingLeft: "0.5rem",
    width: "100%",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    // display: 'inline-block',
    fontSize: "1rem",
    color: "rgba(78, 78, 78 , 1)",
    padding: "0.25rem",
    fontWeight: "500",
  },
  locationDate: {
    justifyContent: "flex-end",
    fontSize: "0.9rem",
    color: "rgba(77, 100, 141)",
    padding: "0.25rem",
  },
  date: {
    justifyContent: "flex-end",
    fontSize: "0.9rem",
    color: "rgba(77, 100, 141)",
    paddingBottom: "0.25rem",
  },
  degree: {
    margin: "0 0 0.5rem 0.25rem",
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
