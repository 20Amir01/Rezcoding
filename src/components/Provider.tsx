"use client";
import React from "react";
import BlogProvider from "../contexts/BlogProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <BlogProvider>{children}</BlogProvider>;
};

export default Provider;
