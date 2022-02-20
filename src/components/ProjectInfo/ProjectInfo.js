import React from "react";
import s from "./projectInfo.module.css";
const ProjectInfo = ({ name, year, languages, description, link }) => {
  console.log(link);
  return (
    <section className={s.projectInfoWrapper}>
      <p>
        —
        <br />
        {name}
        <br />
        {year}
      </p>
      <p>
        —
        <br />
        {languages}
        <br />
        <a style={{ color: "#000" }} href={link}>
          Project on GitHub
        </a>
      </p>
      <p>
        —
        <br />
        {description}
      </p>
    </section>
  );
};

export default ProjectInfo;
