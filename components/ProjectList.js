import projectStyles from "../styles/Article.module.css";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div className={projectStyles.grid}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
