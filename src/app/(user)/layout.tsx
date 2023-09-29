import "../globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic, Markazi_Text } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/navigation/Footer";
import Provider from "@/components/Provider";
import MobileNav from "@/components/navigation/MobileNav";

export const FONT_PRIMARY = Noto_Sans_Arabic({ subsets: ["arabic"] });

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
    <html lang="fa" dir="rtl">
      <body className={`${FONT_PRIMARY.className} bg-neutral-100`}>
        <Provider>
          <Navigation />
          {/* <MobileNav /> */}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
