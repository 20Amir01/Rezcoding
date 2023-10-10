"use client";
import { closeMobileMenu } from "@/redux/features/mobile-menu/mobile-menu-slice";
// import { useBlog } from "@/contexts/blog-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const NavLinks = () => {
  const pathname = usePathname();
  // const {dispatch}=useBlog()
  const dispatch = useDispatch();
  const clickHandler = () => {
    // alert("test")
    // dispatch({type:"mobile-menu/close"})
    dispatch(closeMobileMenu());
  };

  return (
    <>
      <Link
        onClick={clickHandler}
        className={`sm:hidden ${
          pathname === "/" ? "text-blue-primary" : ""
        } w-full sm:w-auto py-2 sm:py-0 text-center`}
        href="/"
      >
        صفحه اصلی
      </Link>
      <Link
        onClick={clickHandler}
        className={`${
          pathname === "/blog" ? "text-blue-primary" : ""
        } w-full sm:w-auto py-2 sm:py-0 text-center`}
        href="/blog"
      >
        وبلاگ
      </Link>
      <Link
        onClick={clickHandler}
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
