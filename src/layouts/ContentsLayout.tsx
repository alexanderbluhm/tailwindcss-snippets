import React from "react";

interface Props {}

export const ContentsLayout: React.FC<Props> = (props) => {
  return (
    <main className="max-w-7xl mx-auto flex items-center px-4 lg:px-8 py-8">
      {props.children}
    </main>
  );
};
