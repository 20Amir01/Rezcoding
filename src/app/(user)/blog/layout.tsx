import ClientSideTypeIt from "@/components/ClientSideTypeIt";
import BgFixedDiv from "@/components/elements/BgFixedDiv";
import PostSearchBar from "@/components/post/PostSearchBar";
import React from "react";

const BlogPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default BlogPageLayout;
