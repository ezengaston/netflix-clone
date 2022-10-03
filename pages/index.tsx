import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import EmailForm from '../components/emailForm'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.nav}>
        <span className={styles.logo}><Image src="/netflix.svg" alt="Logo" width={133} height={36} /></span>
        <Link href='/'><a className={styles.signIn}>Sign In</a></Link>
      </div>
      <div className={styles.emailContainer}>
        <div className={styles.mainTitle}>Unlimited films, TV programmes and more.</div>
        <div className={styles.mainSubtitle}>Watch anywhere. Cancel at any time.</div>
        <EmailForm />
      </div>
    </div>
  )
}

export default Home