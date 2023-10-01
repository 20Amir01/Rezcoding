import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "admin",
  description:
    "Let’s build a BLOG with Next.js 13 (Sanity v3, TypeScript, Tailwind CSS, Auth, CMS, Preview Mode)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" dir="ltr" className={`${inter.className}`}>
      {children}
    </div>
  );
}
