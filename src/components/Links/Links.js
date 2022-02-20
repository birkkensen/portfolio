import React from "react";
import s from "./links.module.css";
const ContactLink = ({ name, color }) => {
  const style = {
    color: color,
    backgroundColor: color ? "#fff" : "#000",
  };
  return (
    <a style={style} className={s.blackLink} href="mailto:birk.kensen@gmail.com">
      {name}
    </a>
  );
};

const DownLoadLink = () => {
  return (
    <a className={s.downLoadWrapper} href="/resources/resume.png" download>
      <div className={s.downLoadLink}>Download CV</div>
      <div className={s.line}></div>
    </a>
  );
};

export { DownLoadLink, ContactLink };
