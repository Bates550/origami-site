import Head from "next/head";
import Link from "next/link";
import { CURRICULUM_URL } from "../constants.ts";
import { Layout } from "../components/Layout.jsx";
import { Calendar } from "../components/Calendar.jsx";
import { InstagramFeed } from "../components/InstagramFeed.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>805 Origami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="title">805 Origami</h1>
        <div className="links-container">
          <Link href="/qr/curriculum">QR Code</Link>
          <Link href="/gallery">Gallery</Link>
          <a href={CURRICULUM_URL}>Curriculum</a>
        </div>

        <InstagramFeed />
        <Calendar />
      </Layout>
      <footer></footer>
    </>
  );
}
