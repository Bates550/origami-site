import Head from "next/head";
import { CURRICULUM_URL } from "../constants.ts";
import { Layout } from "../components/Layout.jsx";
import { Calendar } from "../components/Calendar.jsx";
import { InstagramFeed } from "../components/InstagramFeed.jsx";
import { FoldedPaperContainer } from "../components/FoldedPaperContainer.jsx";
import styles from "/styles/home.module.css";
import { ButtondownForm } from "../components/ButtondownForm.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>805 Origami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.title}>
          <h1>805 Origami</h1>
        </div>
        <div className={styles.menu}>
          <a href={CURRICULUM_URL}>Curriculum</a>
        </div>

        <FoldedPaperContainer>
          <h2 className={styles.sectionTitle}>Recent Meetups and Folds</h2>
          <InstagramFeed />
        </FoldedPaperContainer>
        <FoldedPaperContainer>
          <h2 className={styles.sectionTitle}>Upcoming Meetups</h2>
          <Calendar />
        </FoldedPaperContainer>
        <FoldedPaperContainer>
          <h2 className={styles.sectionTitle}>Stay Informed</h2>
          <p>
            We'll send you a timely email reminder of the next meetup. No spam.
            No sale of your email. Unsubscribe at any time.
          </p>
          <ButtondownForm />
        </FoldedPaperContainer>
      </Layout>
      <footer></footer>
    </>
  );
}
