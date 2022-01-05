import { useRouter } from "next/router";
import Link from "next/link";

const Article = ({ article }) => {
  //
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  // fallback -> if path goes to something that doesn't exist, return 404
  return {
    paths: paths,
    fallback: false,
  };
};

// Since path is generated, getStaticProps is OK to use
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default Article;
