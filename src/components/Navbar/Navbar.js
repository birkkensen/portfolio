import React from "react";
import { Link } from "react-router-dom";
import { ContactLink } from "../Links/Links";
import s from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link to="/">
        <h1>birk</h1>
      </Link>
      <ContactLink name="Contact" color="black" />
    </nav>
  );
};

export default Navbar;
