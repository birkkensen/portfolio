import React from "react";
import s from "./index.module.css";
const Footer = () => {
  const github = "https://github.com/birkkensen";
  const linkedin = "https://www.linkedin.com/in/birkkensen/";
  return (
    <footer className={s.footer}>
      <LinkToProfile name="Github" url={github} />
      <LinkToProfile name="LinkedIn" url={linkedin} />
    </footer>
  );
};

const LinkToProfile = ({ name, url }) => {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      {name}
    </a>
  );
};

export default Footer;
