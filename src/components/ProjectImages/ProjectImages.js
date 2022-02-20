import s from "./projectImages.module.css";
const ProjectImages = ({ arr, name, objectFit }) => {
  const imageCSS = {
    objectFit: objectFit,
  };
  return (
    <>
      {arr &&
        arr.map((image, i) => {
          return (
            <div key={i} className={s.projectImage}>
              <img style={imageCSS} src={image} alt={name} />
            </div>
          );
        }, 0)}
    </>
  );
};

export default ProjectImages;
