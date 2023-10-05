import type { Metadata } from "next";

import Navigation from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileNav from "@/components/navigation/mobile-nav";
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
