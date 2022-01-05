import Head from "next/head"; // used if want custom titles / descriptions / etc
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    // single parent element only
    <div>
      <Head>
        <title>HJ Developer Portfolio</title>
        <meta name="keywords" content="porfolio"></meta>
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// fetching data
// getStaticProps -> fetch @ build time
// getServerSideProps -> fetch @ every request
// getStaticPaths -> generate path based on props we are fetching
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
