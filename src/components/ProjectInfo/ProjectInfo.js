import React from "react";
import s from "./index.module.css";
const ProjectInfo = ({ name, timeSpent, languages, description, link }) => {
  return (
    <section className={s.projectInfoWrapper}>
      <div>
        <div className={s.line}></div>
        <NameAndLink name={name} link={link} />
      </div>
      <div>
        <div className={s.line}></div>
        <LanguageAndTime languages={languages} timeSpent={timeSpent} />
      </div>
      <div>
        <div className={s.line}></div>
        <Description description={description} />
      </div>
    </section>
  );
};

export default ProjectInfo;

const NameAndLink = ({ name, link }) => {
  return (
    <p>
      {name}
      <br />
      <a className={s.linkToProject} href={link} target="_blank" rel="noreferrer">
        Project on GitHub
      </a>
    </p>
  );
};

const LanguageAndTime = ({ languages, timeSpent }) => {
  return (
    <p>
      {languages}
      <br />
      {timeSpent}
    </p>
  );
};

const Description = ({ description }) => {
  return <p>{description}</p>;
};
