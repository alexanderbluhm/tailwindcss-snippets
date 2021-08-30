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
    "bg-gradient-to-r from-yellow-300 to-yellow-500",
    "bg-gradient-to-r from-green-300 to-emerald-500",
    "bg-gradient-to-br from-blue-400 to-cyan-500",
]

const Home = (props: Props) => {
  return (
    <BasicLayout>
      <div className="max-w-[65ch] mx-auto">
        <h1 className="text-4xl font-bold text-center bg-clip-text bg-gradient-to-br text-transparent from-cyan-400 to-indigo-400">TailwindCSS Shorts</h1>
        <h2 className="mt-8 text-xl font-medium">A collection of useful TailwindCSS content including tricks, simple code examples and explanations.</h2>
      </div>
      <section aria-labelledby="featured-snippets" className="mt-8 max-w-[65ch] mx-auto grid grid-cols-3 gap-8">
        <h2 className="sr-only">Featured Shorts</h2>
        {featuredShorts.map((snippet, i) => (
          <Link href={`/${snippet.slug}`}>
            <a className={`${gradients[i]} text-white rounded-md p-4 space-y-2`} key={snippet.slug}>
              <h3 className="text-lg font-medium">{snippet.title}</h3>
              <p className="underline">{snippet.description}</p>
            </a>
          </Link>
        ))}
      </section>
    </BasicLayout>
  );
};

export default Home;
