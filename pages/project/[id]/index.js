import { useRouter } from "next/router";
import { server } from "../../../config/index";
import Link from "next/link";

const Project = ({ project }) => {
  //
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// getStaticProps does not work since the link is dynamic static site generated pages

// therefore must fetch @ each request
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// using getStaticPaths is much faster -> fetched at build time and used in static website
export const getStaticPaths = async () => {
  const res = await fetch(`${server}`);

  const projects = await res.json();

  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  // fallback -> if path goes to something that doesn't exist, return 404
  return {
    paths: paths,
    fallback: false,
  };
};

// Since path is generated, getStaticProps is OK to use
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/project/${context.params.id}`);

  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export default Project;
