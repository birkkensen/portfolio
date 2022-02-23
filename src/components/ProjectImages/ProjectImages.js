import s from "./index.module.css";
const ProjectImages = ({ arr, name, objectFit }) => {
  const style = {
    objectFit: objectFit,
  };

  return (
    <>
      {arr &&
        arr.map((image, i) => {
          return (
            <div key={i} className={s.projectImage}>
              <img style={style} src={image} alt={name} />
            </div>
          );
        }, 0)}
    </>
  );
};

export default ProjectImages;
