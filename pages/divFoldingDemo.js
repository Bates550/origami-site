import Head from "next/head";
import { Layout } from "../components/Layout.jsx";
import styles from "/styles/home.module.css";

function Content() {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "var(--color-paper-light)",
      }}
    ></div>
  );
}

export default function DivFoldingDemo() {
  return (
    <>
      <Head>
        <title>805 Origami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <svg viewBox="0 0 300 200" class="paper">
          <polygon
            points="45,0 300,0 300,200 0,200 0,45"
            fill="#f5f0e6"
            stroke="#333"
            stroke-width="2"
          />
        </svg> */}
        <section className={[styles.section, styles.triangleParent].join(" ")}>
          <div className={styles.borderTriangle}></div>
          <div className={styles.borderTriangle2}></div>
          <h2 className={styles.sectionTitle}>Border Triangle</h2>
          <Content />
        </section>
        <section className={[styles.section, styles.triangleParent].join(" ")}>
          <div class={styles.skewTriangle2}></div>
          <div class={styles.skewTriangle}></div>
          <h2 className={styles.sectionTitle}>Skew Triangle</h2>
          <Content />
        </section>
      </Layout>
      <footer></footer>
    </>
  );
}
