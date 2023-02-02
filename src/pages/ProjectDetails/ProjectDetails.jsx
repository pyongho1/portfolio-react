import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  return (
    <div class="property-card">
      <a href={project.depURL}>
        <img src="./resume.png" alt="projectImage" />
      </a>
      <div class="property-description">
        <h5> {project.name} </h5>
        <p>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
