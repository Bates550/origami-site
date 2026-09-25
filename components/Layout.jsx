import styles from "/styles/layout.module.css";

export const Layout = (props) => {
  const { children } = props;
  return <div className={styles.contentContainer}>{children}</div>;
};
