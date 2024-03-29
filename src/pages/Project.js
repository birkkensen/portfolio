import { useParams } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Navbar, ProjectInfo, ProjectImages, Footer, GoToTop } from "../components";
import projects from "../projects.json";
const Project = () => {
  const { id } = useParams();
  const project = projects.projects.filter((p) => p.id === parseInt(id));
  const images = project[0].showcase;
  return (
    images && (
      <FadeIn transitionDuration="800">
        <Navbar />
        <ProjectInfo
          name={project[0].name}
          description={project[0].description}
          timeSpent={project[0].timeSpent}
          languages={project[0].languages}
          link={project[0].linkToProject}
        />

        <ProjectImages
          arr={images}
          id={project[0].id}
          name={project[0].name}
          objectFit={project[0].objectFit}
        />

        <Footer />
        <GoToTop />
      </FadeIn>
    )
  );
};

export default Project;
