import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Package MDC - MMC</title>
        <meta name="description" content="Package for Math" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/ivamgf/package-mdc-mmc">Package Math!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ivamgf/package-mdc-mmc" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find information about Package Math.</p>
          </a>

          <a href="https://github.com/ivamgf/package-mdc-mmc" className={styles.card}>
            <h2>Use &rarr;</h2>
            <p>Learn about MDC and MMC Application!</p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
