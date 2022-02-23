import React from "react";
import s from "./index.module.css";
const ProjectInfo = ({ name, year, languages, description, link }) => {
  return (
    <section className={s.projectInfoWrapper}>
      <div>
        <div className={s.line}></div>
        <ProjectName name={name} year={year} />
      </div>
      <div>
        <div className={s.line}></div>
        <Languages languages={languages} link={link} />
      </div>
      <div>
        <div className={s.line}></div>
        <Description description={description} />
      </div>
    </section>
  );
};

export default ProjectInfo;

const ProjectName = ({ name, year }) => {
  return (
    <p>
      {name}
      <br />
      {year}
    </p>
  );
};

const Languages = ({ languages, link }) => {
  return (
    <p>
      {languages}
      <br />
      <a
        style={{ color: "#2b52d0", fontWeight: "bold" }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Project on GitHub
      </a>
    </p>
  );
};

const Description = ({ description }) => {
  return <p>{description}</p>;
};
