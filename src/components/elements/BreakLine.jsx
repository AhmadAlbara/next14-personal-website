import React from "react";

const BreakLine = ({ decoration = "border-solid", clasname }) => {
  return (
    <div
      className={`${decoration} ${clasname} my-8 border-b border-gray-300 dark:border-neutral-700`}
    ></div>
  );
};

export default BreakLine;
