import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectContainer">
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <div className="btnContainer">
        <a className="liveApp" href={project.depURL}>LIVE APP</a>
        <a className="github" href={project.github}>
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
