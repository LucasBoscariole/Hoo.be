import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Modules/Homepage.module.scss";
import { Hero } from "../components/Hero";
import { Footer } from "@components/Footer";

const Path: NextPage = ({ data }: any) => {
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
        <Hero data={data} />
        <Footer />
      </main>
    </>
  );
};

export default Path;

export async function getStaticProps(context: any) {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();
  const d = data.find(({ user }: any) => user.urlPath === context.params.path);

  return {
    props: {
      data: d,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();
  const paths = data.map((item: any) => ({
    params: { path: item.user.urlPath },
  }));

  return {
    paths,
    fallback: false,
  };
}
