import React from "react";
import s from "./projectInfo.module.css";
const ProjectInfo = ({ name, year, languages, description, link }) => {
  return (
    <section className={s.projectInfoWrapper}>
      <div>
        <div className={s.line}></div>
        <p>
          {name}
          <br />
          {year}
        </p>
      </div>
      <div>
        <div className={s.line}></div>
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
      </div>
      <div>
        <div className={s.line}></div>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ProjectInfo;
