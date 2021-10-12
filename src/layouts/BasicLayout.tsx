import React from "react";

interface Props {}

export const BasicLayout: React.FC<Props> = (props) => {
  return <main className="px-4 py-8 mx-auto max-w-7xl lg:px-8 lg:py-12">{props.children}</main>;
};
