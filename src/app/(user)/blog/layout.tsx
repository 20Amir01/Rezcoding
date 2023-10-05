import React from "react";
import Header from "@/components/navigation/header";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
};

export default BlogLayout;
