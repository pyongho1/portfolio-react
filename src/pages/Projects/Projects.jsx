import "./Projects.css";

const Projects = ({ projectData }) => {
  return (
    <div className="projectsContainer">
      <h1>PROJECTS</h1>
      <div className="projectCardContainer">
        {projectData.map((project) => (
          <>
            <div class="property-card">
              <a href={project.depURL}>
                <img src="./resume.png" alt="projectImage" />
              </a>
              <div class="property-description">
                <h5> {project.name} </h5>
                <p>{project.desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
