import Link from "next/link";
import { CURRICULUM_URL } from "../constants.ts";
import styles from "/styles/siteHeader.module.css";

export const SiteHeader = () => {
  return (
    <>
      <h1>805 Origami</h1>
      <div className={styles.linksContainer}>
        <Link href="/qr/curriculum">QR Code</Link>
        <a href={CURRICULUM_URL}>Curriculum</a>
      </div>
    </>
  );
};
