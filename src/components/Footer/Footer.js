import React from "react";
import s from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <a href="https://github.com/birkkensen" rel="noreferrer" target="_blank">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/birkkensen/" rel="noreferrer" target="_blank">
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
