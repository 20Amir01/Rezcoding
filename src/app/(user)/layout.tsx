import React from "react";
import Footer from "@/components/layout/footer";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {  
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
