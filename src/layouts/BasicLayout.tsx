import React from "react";

interface Props {}

export const BasicLayout: React.FC<Props> = (props) => {
  return <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">{props.children}</div>;
};
