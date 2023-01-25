import React, { PropTypes } from "react";
import Companies from "./Companies";
import MainHeading from "./MainHeading";
import Project from "./Project";
import Section from "../ui/Section";
import List from "../ui/List";
import Identity from "./Identity";

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({
  firstName,
  lastName,
  subheader,
  companies,
  projects,
  technicalProjects,
  faClass,
}) => (
  <section style={style.main}>
    <MainHeading title="+ Professional experience" />
    <Companies data={companies} />
    <MainHeading title="+ Other technical work" />
    {technicalProjects.map((project, key) => (
      <Section color="rgb(77, 100, 141)" key={key}>
        <Project
          name={project.name}
          tools={project.tools}
          achievements={project.achievements}
          link={project.link}
          description={project.description}
          key={key}
          faClass={project.faClass}
        />
      </Section>
    ))}
    <MainHeading title="+ Climate activism" />
    {projects.map(
      (project, key) =>
        !project.technical && (
          <Section color="rgb(77, 100, 141)" key={key}>
            <Project
              name={project.name}
              tools={project.tools}
              achievements={project.achievements}
              link={project.link}
              description={project.description}
              key={key}
              faClass={project.faClass}
            />
          </Section>
        )
    )}
  </section>
);

const style = {
  main: {
    padding: "0 1.25rem 0.25rem 0",
  },
};

Main.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
