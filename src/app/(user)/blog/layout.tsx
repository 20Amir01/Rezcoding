import React from "react";
import Header from "@/components/layout/header";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
      {children}
    </>
  );
};

export default BlogLayout;
