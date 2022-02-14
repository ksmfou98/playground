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

  const { data } = useQuery("test", getTestList, {
    initialData: props.data,
    cacheTime: 1 * 60 * 1000,
    staleTime: 1 * 60 * 1000,
  });

  console.log(data);
  if (!data) return null;

  return (
    <div>
      {data.content.map((item: any) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
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
