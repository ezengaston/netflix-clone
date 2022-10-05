import type { NextPage } from "next";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import EmailForm from "../components/emailForm";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

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

  function renderFAQ(): JSX.Element {
    function openAccordion(id: number) {
      if (id === openId) {
        setOpenId(null);
        return
      }
      setOpenId(id)
    }

    const items = [
      {
        id: 1,
        title: 'What is Netflix?',
        text:
          <>
            Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!
          </>
      },
      {
        id: 2,
        title: 'How much does Netflix cost?',
        text:
          <>
            Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £6.99 to £15.99 a month. No extra costs, no contracts.
          </>
      },
      {
        id: 3,
        title: 'Where can I watch?',
        text:
          <>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            <br />
            <br />
            You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </>
      },
      {
        id: 4,
        title: 'How do I cancel?',
        text:
          <>
            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.
          </>
      },
      {
        id: 5,
        title: 'What can I watch on Netflix?',
        text:
          <>
            Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.
          </>
      },
      {
        id: 6,
        title: 'Is Netflix good for children?',
        text:
          <>
            The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.
            <br />
            <br />
            Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.
          </>
      }
    ]

    return (
      <div className={`${styles.card} ${styles.accordionCard}`}>
        <div className={styles.mainTitle}>Frequently Asked Questions</div>
        <div className={styles.accordionContainer}>
          {items.map((item) => {
            return (
              <div className={styles.accordionItem}>
                <div className={styles.accordionTitle} onClick={() => openAccordion(item.id)}>
                  <div>
                    {item.title}
                  </div>
                  <div className={`${styles.accordionBtn} ${item.id === openId ? styles.open : null}`}>
                    <Image src='/cross.svg' width='26' height='26' />
                  </div>
                </div>
                <div className={`${styles.accordionText} ${item.id === openId ? styles.open : null}`}>
                  <div>
                    {item.text}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <EmailForm />
      </div>
    )
  }

  function footer(): JSX.Element {
    return (
      <div className={styles.footerCard}>
        <div className={styles.footerTop}>Questions? Call 0808 196 5391</div>
        <div className={styles.footerContainer}>
          <div>FAQ</div>
          <div>Help Centre</div>
          <div>Account</div>
          <div>Media Centre</div>
          <div>Investor Relations</div>
          <div>Jobs</div>
          <div>Redeem gift cards</div>
          <div>Buy gift cards</div>
          <div>Ways to Watch</div>
          <div>Terms of Use</div>
          <div>Privacy</div>
          <div>Cookie Preferences</div>
          <div>Corporate Information</div>
          <div>Contact Us</div>
          <div>Speed Test</div>
          <div>Legal Guarantee</div>
          <div>Legal Notices</div>
          <div>Only on Netflix</div>
        </div>
        <div className={styles.footerCountry}>Netflix United Kingdom</div>
      </div>
    )
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
      {renderFAQ()}
      {footer()}
    </>
  );
};

export default Home;
