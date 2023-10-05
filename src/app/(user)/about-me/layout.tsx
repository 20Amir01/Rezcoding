import React from "react";
import Header from "@/components/navigation/header";

const AboutPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
};

export default AboutPageLayout;
