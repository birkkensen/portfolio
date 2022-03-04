import { Link } from "react-router-dom";
import { ImLinkedin, ImGithub } from "react-icons/im";
import s from "./index.module.css";
const Navbar = () => {
  const github = "https://github.com/birkkensen";
  const linkedin = "https://www.linkedin.com/in/birkkensen/";
  return (
    <nav className={s.navbar}>
      <Link className={s.logo} to="/">
        birk
      </Link>
      <div>
        <a className={s.socialMedia} href={github} rel="noreferrer" target="_blank">
          <ImGithub />
        </a>
        <a className={s.socialMedia} href={linkedin} rel="noreferrer" target="_blank">
          <ImLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
