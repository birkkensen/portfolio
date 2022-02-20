import s from "./introSection.module.css";
import { ContactLink, DownLoadLink } from "../Links/Links";
const IntroSection = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.textWrapper}>
        <IntroTitle />
        <IntroText />
        <div className={s.linksWrapper}>
          <ContactLink name="Contact" />
          <DownLoadLink />
        </div>
      </div>
      <IntroImage />
    </section>
  );
};

const IntroTitle = () => {
  return (
    <h2 className={s.title}>
      Hello, I'm <br />
      Birk Kensén{" "}
    </h2>
  );
};

const IntroText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. <br />
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </p>
  );
};

const IntroImage = () => {
  return <img className={s.image} src="/images/me/introImage.jpg" alt="Selfie" />;
};

export default IntroSection;
