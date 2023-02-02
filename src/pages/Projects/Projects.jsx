import "./Projects.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Projects = ({ projectData }) => {
  return (
    <div className="projectsContainer">
      <h1>PROJECTS</h1>
      <div className="projectCardContainer">
        {projectData.map((project) => (
          <>
            <ProjectDetails project={project} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
