import Head from 'next/head' // used if want custom titles / descriptions / etc

export default function Home() {
  return ( // single parent element only
    <div> 
      <Head>
        <title>HJ's Developer Portfolio</title>
        <meta name='keywords' content='porfolio'></meta>
      </Head>  
      <h1>Man phock u</h1>
    </div>
  )
}
