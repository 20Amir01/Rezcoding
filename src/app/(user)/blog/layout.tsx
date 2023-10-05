import ClientSideTypeIt from "@/helpers/client-side-type-it";
import BgFixedDiv from "@/components/elements/background-fixed-div";
import PostSearchBar from "@/components/blog/blog-header";
import React from "react";

const BlogPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default BlogPageLayout;
