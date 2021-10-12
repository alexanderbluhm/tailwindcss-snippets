import React from "react";
import Link from "next/link";

export const ContentsLayout = (props) => {
  console.log(props);
  return (
    <main className="px-4 py-16 mx-auto max-w-[65ch] lg:px-8 bg-white">
      <div className="flex flex-col">
        <Link href="/">
          <a className="inline-flex items-center text-sm group">
            <svg
              className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="translate(3 6)"
              >
                <path d="m4.499.497-3.999 4.002 4 4.001" />
                <path d="m13.5 4.5h-13" />
              </g>
            </svg>
            Back
          </a>
        </Link>
        {/* <span className="text-2xl font-bold text-gray-900">
          {props.meta.title}
        </span> */}
      </div>
      <div className="flex items-center">{props.children}</div>
    </main>
  );
};
