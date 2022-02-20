import s from "./projectSection.module.css";
import projects from "../../projects.json";
import { Link } from "react-router-dom";
const ProjectSection = () => {
  return (
    <section className={s.wrapper}>
      <Title />
      {projects.projects.map((project) => {
        return (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.coverImage}
            objectFit={project.objectFit}
          />
        );
      })}
    </section>
  );
};

export default ProjectSection;

const Title = () => {
  return (
    <h2 className={s.title}>
      My learning process <br />
      so far
    </h2>
  );
};

const Project = ({ id, name, image, objectFit }) => {
  const imageCSS = {
    objectFit: objectFit,
  };
  return (
    <Link className={s.linkToProject} to={`project/${id}`}>
      <div className={s.overlayContainer}>
        <img className={s.projectImage} style={imageCSS} src={image} alt={name} />
        <div className={s.overlay}>
          <p className={s.pTitle}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
