import { Navbar, Profile, Projects, Footer, GoToTop } from "../components";
import FadeIn from "react-fade-in";
const Home = () => {
  return (
    <FadeIn transitionDuration="800">
      <Navbar />
      <Profile />
      <Projects />
      <Footer />
      <GoToTop />
    </FadeIn>
  );
};

export default Home;
