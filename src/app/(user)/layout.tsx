import React from "react";
import Footer from "@/components/layout/footer";
import MobileNav from "@/components/navigation/mobile-nav";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {  
  return (
    <div>
      {/* <Header /> */}
      <MobileNav/>
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
