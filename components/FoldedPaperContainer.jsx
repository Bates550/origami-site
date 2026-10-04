import styles from "./FoldedPaperContainer.module.css";

export const FoldedPaperContainer = (props) => {
  const { mode = "skewTriangle", ...rest } = props;
  switch (mode) {
    case "borderTriangle": {
      return <BorderTriangleFoldedPaperContainer {...rest} />;
    }
    case "skewTriangle": {
      return <SkewTriangleFoldedPaperContainer {...rest} />;
    }
    default: {
      throw new Error(`Unknown FoldedPaperContainer mode: ${mode}`);
    }
  }
};

const SkewTriangleFoldedPaperContainer = (props) => {
  const { children } = props;
  return (
    <section className={`${styles.section} ${styles.triangleParent}`}>
      <div className={styles.skewTriangle2}></div>
      <div className={styles.skewTriangle}></div>
      {children}
    </section>
  );
};

const BorderTriangleFoldedPaperContainer = (props) => {
  const { children } = props;
  return (
    <section className={`${styles.section} ${styles.triangleParent}`}>
      <div className={styles.borderTriangle}></div>
      <div className={styles.borderTriangle2}></div>
      {children}
    </section>
  );
};
