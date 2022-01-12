import Link from "next/link";
import projectStyles from "../styles/Article.module.css";

const Project = ({ project }) => {
  return (
    <Link href="/project/{id}" as={`/project/${project.id}`}>
      <a className={projectStyles.card}>
        <h3>{project.title} &rarr;</h3>
        <p>{project.body}</p>
      </a>
    </Link>
  );
};

export default Project;
