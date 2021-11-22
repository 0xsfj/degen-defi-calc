import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import OhmCalculator from '../components/ohmCalculator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Defi Calculator</title>
        <meta name="description" content="The calculator for Olympus DAO(OHM), Wonderland(TIME), Klima DAO(KLIMA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Defi Calculator</h1>

        <p className={styles.description}>The calculator for Olympus DAO(OHM), Wonderland(TIME), Klima DAO(KLIMA)</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <OhmCalculator />
          </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Time Wonderland(TIME)</h2>
            <p>Coming Soon</p>
          </a>
        </div>
      </main>
    </>
  );
}
