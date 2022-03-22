// import Head from 'next/head'
import Layout from '../pages/layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
    <div >
      {/* <Head>
        <title>MOVIE SEARCH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://www.omdbapi.com">OMDB</a> Movie Search App
        </h1> 
        <div>
          <p className="hello-message">
            Thank you for the opportunity to showcase a little bit of how i code my projects.<br></br> 
            Click the movie search button in the navbar to take you to the movie search  page.
          </p>
        </div>     
      </main> 
        
    </div>
    </Layout>
  )
}

