import React, { ReactNode } from "react";
const PaddingContainer = ({ children ,className=""}: { children: ReactNode , className?:string }) => {
  return <div className={`px-5 w-full max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default PaddingContainer;
