import Head from "next/head";
import Collections from "../src/components/Collections";
import HeroSection from "../src/components/HeroSection";
import styles from "./../styles/Home.module.css";
import { client } from "../utils/shopify";

export default function Home({ collections }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karhu Test</title>
        <meta
          name="description"
          content="Karhu assignment - Bogdan Triboi - AskPhill"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <Collections collections={collections} />
    </div>
  );
}

export async function getServerSideProps() {
  const collections = await client.collection.fetchAll();

  return { props: { collections: JSON.parse(JSON.stringify(collections)) } };
}
