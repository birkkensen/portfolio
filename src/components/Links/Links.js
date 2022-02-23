import React from "react";
import s from "./index.module.css";
const ContactLink = () => {
  return (
    <a className={s.contact} href="mailto:birk.kensen@gmail.com">
      Contact
    </a>
  );
};

const DownLoadLink = () => {
  return (
    <a className={s.wrapper} href="/resume/CV.Birk.pdf" download>
      <div className={s.download}>Download CV</div>
      <div className={s.line}></div>
    </a>
  );
};

export { DownLoadLink, ContactLink };
