import { BasicLayout } from "@/layouts/BasicLayout";
import React from "react";
import Link from "next/link";

interface Props {}

const featuredShorts = [
  {
    title: "Basic Layout",
    slug: "basic-layout",
    description: "How to create a minimalistic full page layout.",
  },
  {
    title: "Gradient SVG",
    slug: "gradient-svg",
    description: "Use Tailwind gradients for svg images.",
  },
];

const gradients = [
    "bg-gradient-to-r from-yellow-200 to-yellow-400",
    "bg-gradient-to-r from-green-200 to-emerald-400",
    "bg-gradient-to-br from-blue-400 to-cyan-500",
]

const Home = (props: Props) => {
  return (
    <BasicLayout>
      <div className="max-w-[65ch] mx-auto">
        <h1 className="text-3xl font-bold text-center text-black">TailwindCSS Shorts</h1>
        <h2 className="mt-8 text-lg">A collection of useful TailwindCSS content including tricks, simple code examples and explanations.</h2>
      </div>
      <section aria-labelledby="featured-snippets" className="mt-8 max-w-[65ch] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2 className="sr-only">Featured Shorts</h2>
        {featuredShorts.map((snippet, i) => (
          <Link href={`/${snippet.slug}`}>
            <a className={`${gradients[i]} text-black rounded-md p-4 space-y-2`} key={snippet.slug}>
              <h3 className="text-lg font-medium">{snippet.title}</h3>
              <p className="underline">{snippet.description}</p>
            </a>
          </Link>
        ))}
      </section>

      <section>
          {/* TODO:
         - variant plugin
         - methods to center (flex, translate)
         - not abuse jit mode because of design system
         - sticky navbar and sticky footer
         - usage of truncate */}
      </section>
    </BasicLayout>
  );
};

export default Home;
