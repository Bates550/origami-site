import Head from "next/head";
import { Layout } from "../components/Layout.jsx";
import styles from "/styles/home.module.css";
import { FoldedPaperContainer } from "../components/FoldedPaperContainer.jsx";

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
        <link rel="icon" href="/favicon.png" />
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
        <FoldedPaperContainer mode="borderTriangle">
          <h2 className={styles.sectionTitle}>Border Triangle</h2>
          <Content />
        </FoldedPaperContainer>
        <FoldedPaperContainer mode="skewTriangle">
          <h2 className={styles.sectionTitle}>Skew Triangle</h2>
          <Content />
        </FoldedPaperContainer>
      </Layout>
      <footer></footer>
    </>
  );
}
