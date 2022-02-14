import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "components/Button";
import styles from "../styles/Home.module.css";
import axios from "axios";
import useTestQuery from "hooks/useQuery";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getTestList } from "api";
import { useEffect } from "react";

const Home: NextPage = (props: any) => {
  // const { data } = useTestQuery();
  // console.log(data);

  const { data, isLoading } = useQuery("test", getTestList, {
    initialData: props.data,
    cacheTime: 24 * 60 * 60 * 1000,
    staleTime: 24 * 60 * 60 * 1000,
  });

  console.log(data);
  if (!data) return null;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await getTestList();
  return {
    props: {
      data,
    },
  };
};

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("testList", getTestList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default Home;
