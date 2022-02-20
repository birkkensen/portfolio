import React from "react";
import s from "./projectInfo.module.css";
const ProjectInfo = ({ name, year, languages, description, link }) => {
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
        <a
          style={{ color: "#2b52d0", fontWeight: "500" }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
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
