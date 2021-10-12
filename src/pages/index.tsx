import { BasicLayout } from "@/layouts/BasicLayout";
import React from "react";
import Link from "next/link";
import { createPageList } from "@/utils/createPageList";
import Head from 'next/head';

const pages = createPageList(
  require.context(
    `../pages/docs/?meta=title,shortTitle,published,description`,
    false,
    /\.mdx$/
  ),
  "docs"
);

interface Props {}

const Home = (props: Props) => {
  return (
    <BasicLayout>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tailwind Snippets - Collection of useful TailwindCSS content."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tailwind Snippets - Collection of useful TailwindCSS content."
        />
        <title>Tailwind Snippets - Collection of useful TailwindCSS content.</title>
      </Head>

      <div className="max-w-[65ch] mx-auto">
        <h1 className="text-3xl font-bold text-center text-black">
          Tailwind Snippets
        </h1>
        <h2 className="mt-6 text-gray-500">
          A collection of useful TailwindCSS content including tricks, simple
          code examples and explanations.
        </h2>
      </div>

      <section className="mt-12 max-w-[65ch] mx-auto">
        <ul className="divide-y">
          {Object.keys(pages).map((pageKey) => (
            <li className="py-2" key={pageKey}>
              <Link href={pages[pageKey].href}>
                <a className="flex flex-col space-y-1">
                  <span className="font-bold">{pages[pageKey].title}</span>
                  <span className="text-sm text-gray-500">
                    {pages[pageKey].description}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        {/* TODO:
         - variant plugin
         - not abuse jit mode because of design system
         - sticky navbar and sticky footer
         - usage of truncate */}
      </section>
    </BasicLayout>
  );
};

export default Home;
