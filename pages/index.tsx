import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Modules/Homepage.module.scss";
import { Footer } from "@components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hoo.be coding exercise</title>
        <meta
          property="description"
          content="hoo.be coding exercise's hoo.be page. check out their latest content,
          links, social profiles & more."
        />
        <link rel="icon" href="/images/hoobe-icon.png" />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.homeRedirect}>
          Page not find, please go to{" "}
          <Link href={"/upwork_coding_task"}>here</Link>
        </h1>
        <Footer />
      </main>
    </>
  );
};

export default Home;
