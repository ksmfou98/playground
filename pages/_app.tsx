import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Button from "components/Button";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>테스트 입니다.</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Button />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
