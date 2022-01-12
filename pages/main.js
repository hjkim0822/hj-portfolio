import ProjectList from "../components/ProjectList";
import { server } from "../config/index";

const main = ({ projects }) => {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default main;
