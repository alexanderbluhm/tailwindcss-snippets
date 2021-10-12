import { BasicLayout } from "@/layouts/BasicLayout";
import React, { useState } from "react";
import Link from "next/link";
import { createPageList } from "@/utils/createPageList";
import Head from "next/head";

const pages = createPageList(
  require.context(
    `../pages/docs/?meta=title,shortTitle,published,description,featured`,
    false,
    /\.mdx$/
  ),
  "docs"
);

interface Props {}

const Home = (props: Props) => {
  const [search, setSearch] = useState("");

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
        <title>
          Tailwind Snippets - Collection of useful TailwindCSS content.
        </title>
      </Head>

      <div className="max-w-[65ch] mx-auto">
        <h1 className="text-lg font-medium tracking-tight text-black">
          TailwindCSS Shorts
        </h1>
        <h2 className="mt-2 text-gray-500">
          A collection of useful TailwindCSS content including tricks, simple
          code examples and explanations.
        </h2>
      </div>

      <section className="mt-10 max-w-[65ch] mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1.5 ring-1 ring-gray-200 rounded"
          placeholder="Search ..."
          type="text"
        />
        <ul className="mt-4 divide-y">
          {Object.keys(pages)
            .filter((key) =>
              pages[key].title.toLowerCase().includes(search.toLowerCase())
            )
            .sort((keyA, _) => {
              return pages[keyA].featured ? -1 : 1
            })
            .map((pageKey) => (
              <li className="py-2" key={pageKey}>
                <Link href={pages[pageKey].href}>
                  <a className="flex flex-col space-y-1">
                    <span className="inline-flex items-center font-medium">
                      {pages[pageKey].featured && (
                        <svg
                          className="w-5 h-5 mr-1 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                      {pages[pageKey].title}
                    </span>
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
