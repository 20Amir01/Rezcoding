import type { Metadata } from "next";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/navigation/Footer";
// import MobileNav from "@/components/navigation/MobileNav";
export const metadata: Metadata = {
  title: "Rezcoding",
  description:
    "Let’s build a BLOG with Next.js 13 (Sanity v3, TypeScript, Tailwind CSS, Auth, CMS, Preview Mode)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="user w-full h-full">
     
          <Navigation />
          {/* <MobileNav /> */}

            {children}
    
          <Footer />
        
      </div>
  );
}
