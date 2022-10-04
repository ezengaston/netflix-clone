import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import EmailForm from "../components/emailForm";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function renderDesc(
    imageUrl: string,
    title: string,
    text: string,
    imageLeft: boolean
  ): JSX.Element {
    if (imageLeft) {
      return (
        <div className={styles.card}>
          <div className={styles.descContainer}>
            <div className={styles.imageContainer}>
              <Image src={imageUrl} width={640} height={480} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.mainTitle}>{title}</div>
              <div className={styles.mainSubtitle}>{text}</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.card}>
        <div className={styles.descContainer}>
          <div className={styles.textContainer}>
            <div className={styles.mainTitle}>{title}</div>
            <div className={styles.mainSubtitle}>{text}</div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={imageUrl} width={640} height={480} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.nav}>
          <span className={styles.logo}>
            <Image src="/netflix.svg" alt="Logo" width={133} height={36} />
          </span>
          <Link href="/">
            <a className={styles.signIn}>Sign In</a>
          </Link>
        </div>
        <div className={styles.emailContainer}>
          <div className={styles.mainTitle}>
            Unlimited films, TV programmes and more.
          </div>
          <div className={styles.mainSubtitle}>
            Watch anywhere. Cancel at any time.
          </div>
          <EmailForm />
        </div>
      </div>
      {renderDesc('/tv.png', 'Enjoy on your TV.', 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.', false)}
      {renderDesc('/mobile-0819.jpeg', 'Download your programmes to watch offline.', 'Save your favourites easily and always have something to watch.', true)}
      {renderDesc('/device-pile.png', 'Watch everywhere.', 'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.', false)}
      {renderDesc('/kids.png', 'Create profiles for children.', 'Send children on adventures with their favourite characters in a space made just for them – free with your membership.', true)}
    </>
  );
};

export default Home;
