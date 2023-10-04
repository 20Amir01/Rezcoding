"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        className={`text-xl sm:text-sm ${pathname === "/blog" ? "text-blue-500" : ""}`}
        href="/blog"
      >
        وبلاگ
      </Link>
      <Link
        className={`text-xl sm:text-sm ${pathname === "/about-me" ? "text-blue-500" : ""}`}
        href="/about-me"
      >
        من کی ام ؟
      </Link>
    </>
  );
};

export default NavLinks;
