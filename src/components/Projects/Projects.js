import s from "./index.module.css";
import projects from "../../projects.json";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Projects = () => {
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

export default Projects;

const Title = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <h2 ref={ref} className={`${s.title} ${inView ? s.fadeIn : s.hidden}`}>
      My learning process <br />
      so far
    </h2>
  );
};

const Project = ({ id, name, image, objectFit }) => {
  const imageCSS = {
    objectFit: objectFit,
  };
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Link
      ref={ref}
      className={`${s.linkToProject} ${inView ? s.fadeIn : s.hidden}`}
      to={`project/${id}`}
    >
      <div className={s.overlayContainer}>
        <img className={s.projectImage} style={imageCSS} src={image} alt={name} />
        <div className={s.overlay}>
          <p className={s.pTitle}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
