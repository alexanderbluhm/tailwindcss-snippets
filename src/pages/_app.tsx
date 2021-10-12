import "../styles/globals.css";
import { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import { Title } from "@/components/Title";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || Fragment;
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps }
    : {};
  const meta = Component.layoutProps?.meta || {};
  const description =
    meta.metaDescription || meta.description || "TailwindCSS Snippets.";

  return (
    <>
      <Title suffix="Tailwind Snippets">{meta.title}</Title>
      <Head>
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
