import Provider from "@/components/Provider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic, Markazi_Text } from "next/font/google";
import ReactQueryClientProvider from "@/lib/ReactQueryClientProvider";
export const FONT_PRIMARY = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Rezcoding",
  description: "وبلاگ شخصی من",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="selection:text-neutral-100 selection:bg-neutral-700"
    >
      <body className={`${FONT_PRIMARY.className} bg-neutral-50`}>
        <ReactQueryClientProvider>
          <Provider>{children}</Provider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
