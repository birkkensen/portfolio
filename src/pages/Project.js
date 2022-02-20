import { useParams } from "react-router-dom";
import { Navbar, ProjectInfo, ProjectImages, Footer, GoToTop } from "../components";
import projects from "../projects.json";
const Project = () => {
  const { id } = useParams();
  const project = projects.projects.filter((p) => p.id === parseInt(id));
  const images = project[0].showcase;
  return (
    <>
      <Navbar />
      <ProjectInfo
        name={project[0].name}
        description={project[0].description}
        year={project[0].year}
        languages={project[0].languages}
        link={project[0].linkToProject}
      />
      {images && (
        <ProjectImages
          arr={images}
          id={project[0].id}
          name={project[0].name}
          objectFit={project[0].objectFit}
        />
      )}
      <Footer />
      <GoToTop />
    </>
  );
};

export default Project;
