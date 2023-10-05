"use client";
import React from "react";
import Footer from "@/components/layout/footer";
import MobileNav from "@/components/navigation/mobile-nav";
import { usePathname } from "next/navigation";
import Header from "@/components/navigation/header";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/" ? <Header homePage /> : <Header />}
      <MobileNav />
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
