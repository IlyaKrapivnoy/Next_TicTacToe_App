import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
          <Head>
              <title>Tic Tac Toe Next / TS Game</title>
              <meta name='description' content='Tic Tac Toe' />
          </Head>
      </div>
  );
}

export default Home
