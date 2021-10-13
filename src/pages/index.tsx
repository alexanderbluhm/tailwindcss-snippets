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
          content="TailwindCSS Shorts - Collection of useful TailwindCSS content."
        />
        <meta
          key="og:title"
          property="og:title"
          content="TailwindCSS Shorts - Collection of useful TailwindCSS content."
        />
        <title>
          TailwindCSS Shorts - Collection of useful TailwindCSS content.
        </title>
      </Head>

      <div className="max-w-[65ch] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight dark:text-white">
            TailwindCSS Shorts
          </h1>
          <button className="grid p-1 transition rounded place-items-center hover:bg-gray-100">
            <svg
              className="w-5 h-5 text-gray-900"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2032 3.9024C10.0799 3.81135 9.99986 3.66496 9.99986 3.49989V1.49989C9.99986 1.22375 10.2237 0.999893 10.4999 0.999893C10.611 0.999893 10.7137 1.03615 10.7967 1.09748C10.92 1.18854 11 1.33493 11 1.5V3.49999C11 3.77614 10.7761 3.99999 10.5 3.99999C10.3889 3.99999 10.2862 3.96374 10.2032 3.9024ZM15.0961 5.90367C14.9009 5.70841 14.9009 5.39182 15.0961 5.19656L16.5103 3.78235L16.5188 3.77408L16.6464 3.64644C16.8417 3.45118 17.1583 3.45118 17.3536 3.64644C17.5488 3.8417 17.5488 4.15829 17.3536 4.35355L15.8536 5.85355L15.8451 5.86181L15.8032 5.90367C15.608 6.09893 15.2914 6.09893 15.0961 5.90367ZM4.48965 3.78246L4.48429 3.77718L4.35355 3.64644C4.15829 3.45118 3.84171 3.45118 3.64645 3.64644C3.45118 3.8417 3.45118 4.15829 3.64645 4.35355L5.14645 5.85355L5.15181 5.85884L5.19675 5.90378C5.39201 6.09904 5.7086 6.09904 5.90386 5.90378C6.09912 5.70851 6.09912 5.39193 5.90386 5.19667L4.48965 3.78246ZM10.2608 6.00624C7.87796 6.12954 6 8.08518 6 10.5001C6 12.9952 8.00485 15.0001 10.5 15.0001C12.9922 15.0001 15 13.016 15 10.5179L15 10.5094L15 10.5C15 8.91644 14.182 7.52393 12.9456 6.72191C12.3507 6.33538 11.6582 6.08598 10.9113 6.01854C10.7759 6.00627 10.6387 6 10.5 6C10.4198 6 10.34 6.00209 10.2608 6.00624ZM10.3139 7.00486C10.3755 7.00168 10.4375 7.00007 10.5 7.00007C10.6419 7.00007 10.7817 7.00847 10.919 7.02482C12.657 7.23165 13.9957 8.70972 14 10.5093C13.995 12.438 12.4299 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.62944 8.4674 7.10161 10.3139 7.00486ZM15.0962 15.0962C15.2915 14.9009 15.6081 14.9009 15.8034 15.0962L17.2176 16.5104L17.2229 16.5158L17.3536 16.6464C17.5488 16.8417 17.5488 17.1583 17.3536 17.3535C17.1583 17.5488 16.8417 17.5488 16.6464 17.3535L15.1464 15.8535L15.1412 15.8482L15.0962 15.8033C14.901 15.608 14.901 15.2914 15.0962 15.0962ZM4 10.5L3.99974 10.5162C3.99125 10.7849 3.77076 11.0001 3.5 11.0001H1.5C1.22385 11.0001 0.999996 10.7762 0.999996 10.5001C0.999996 10.4941 1.0001 10.4882 1.00031 10.4823C1.00961 10.2144 1.22977 10 1.5 10H3.5C3.77614 10 4 10.2239 4 10.5ZM20 10.5001C20 10.5001 20 10.5 20 10.5C20 10.2239 19.7761 10 19.5 10H17.5C17.2335 10 17.0158 10.2084 17.0008 10.4711C17.0003 10.4807 17 10.4904 17 10.5001C17 10.7762 17.2239 11.0001 17.5 11.0001H19.5C19.7392 11.0001 19.9392 10.8321 19.9884 10.6076C19.996 10.573 20 10.537 20 10.5001ZM5.86181 15.8451L5.85355 15.8535L4.35355 17.3535C4.15829 17.5488 3.84171 17.5488 3.64645 17.3535C3.45118 17.1583 3.45118 16.8417 3.64645 16.6464L3.77417 16.5187L3.78243 16.5103L5.19664 15.0961C5.3919 14.9008 5.70848 14.9008 5.90375 15.0961C6.09901 15.2913 6.09901 15.6079 5.90375 15.8032L5.86181 15.8451ZM10.2032 19.9024C10.0799 19.8113 9.99986 19.665 9.99986 19.4999V17.4999C9.99986 17.2238 10.2237 16.9999 10.4999 16.9999C10.611 16.9999 10.7137 17.0361 10.7967 17.0975C10.92 17.1885 11 17.3349 11 17.5V19.5C11 19.7761 10.7761 20 10.5 20C10.3889 20 10.2862 19.9637 10.2032 19.9024Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <h2 className="mt-2 text-gray-500 dark:text-gray-400">
          A collection of useful TailwindCSS content including tricks, simple
          code examples and explanations.
        </h2>
      </div>

      <section className="mt-10 max-w-[65ch] mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1.5 ring-1 ring-gray-200 rounded dark:bg-gray-800 dark:ring-gray-800"
          placeholder="Search ..."
          type="text"
        />
        <ul className="mt-4 divide-y dark:divide-gray-800">
          {Object.keys(pages)
            .filter((key) =>
              pages[key].title.toLowerCase().includes(search.toLowerCase())
            )
            .sort((keyA, _) => {
              return pages[keyA].featured ? -1 : 1;
            })
            .map((pageKey) => (
              <li className="py-2" key={pageKey}>
                <Link href={pages[pageKey].href}>
                  <a className="flex flex-col space-y-1">
                    <span className="inline-flex items-center font-medium dark:text-gray-100">
                      {pages[pageKey].featured && (
                        <svg
                          className="w-5 h-5 mr-1 text-yellow-400"
                          viewBox="0 0 21 21"
                          fill="currentColor"
                        >
                          <path
                            d="M10.5 14.5L5.5 17.5L7.5 12.369L3.5 8.5H8.5L10.5 3.5L12.5 8.5H17.5L13.5 12.5L15.5 17.5L10.5 14.5Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      {pages[pageKey].title}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
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
