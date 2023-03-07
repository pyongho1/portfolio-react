import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectContainer">
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <a href={project.depURL}>LIVE APP</a>
      <a href={project.github}>Github</a>
    </div>
  );
};

export default ProjectCard;
