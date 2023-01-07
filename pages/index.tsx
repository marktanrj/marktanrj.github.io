import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import selfie from '../assets/anime_selfie.jpg'
import { Github, Linkedin } from '../components'
import { GITHUB_URL, LINKEDIN_URL } from '../constants'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Tan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.selfieContainer}>
          <Image src={selfie} alt="selfie" className={styles.selfie}/>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>Mark Tan</h2>
          <p className={styles.title}>Software Engineer</p>
          <div className={styles.social}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github height="32px" width="32px" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin height="28px" width="28px" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
