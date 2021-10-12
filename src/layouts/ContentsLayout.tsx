import React from "react";

interface Props {}

export const ContentsLayout: React.FC<Props> = (props) => {
  return (
    <main className="flex items-center px-4 py-16 mx-auto max-w-7xl lg:px-8">
      {props.children}
    </main>
  );
};
