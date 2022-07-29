import Head from "next/head";
import React from "react";
import { Container } from "../container";
import { Footer, Header } from "./index";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pi Journey homepage, the place to learn clustering</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  );
};
