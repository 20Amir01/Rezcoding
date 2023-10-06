// "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        className={`sm:hidden ${
          pathname === "/" ? "text-blue-primary" : ""
        } w-full sm:w-auto py-2 sm:py-0 text-center`}
        href="/"
      >
        صفحه اصلی
      </Link>
      <Link
        className={`${
          pathname === "/blog" ? "text-blue-primary" : ""
        } w-full sm:w-auto py-2 sm:py-0 text-center`}
        href="/blog"
      >
        وبلاگ
      </Link>
      <Link
        className={`${
          pathname === "/about-me" ? "text-blue-primary" : ""
        } w-full sm:w-auto py-2 sm:py-0 text-center`}
        href="/about-me"
      >
        من کی ام ؟
      </Link>
    </>
  );
};

export default NavLinks;
