"use client";
import { useBlog } from "@/contexts/blog-provider";
import React, { useEffect, useRef } from "react";
import NavLinks from "./nav-links";
import { X } from "lucide-react";
const MobileNav = () => {
  const {
    state: { mobileMenuToggle },
    dispatch,
  } = useBlog();
  useEffect(() => {
    if (mobileMenuToggle) document.body.classList?.add("overflow-hidden");
    else document.body.classList?.remove("overflow-hidden");
  }, [mobileMenuToggle]);
  return (
    <>
      {mobileMenuToggle && (
        <nav className="flex fixed right-0 top-0 h-[100dvh] z-[1000] text-xl gap-2 mobile-nav-anime transition-all bg-white bg-opacity-75 backdrop-blur-md text-neutral-800 font-bold drop-shadow-lg justify-center items-center w-full sm:hidden flex-col">
          <button
            onClick={() => {
              dispatch({ type: "mobile-menu/close" });
            }}
            title="بستن"
            className="absolute right-5 top-5"
          >
            <X size={32} />
          </button>
          <NavLinks />
        </nav>
      )}
    </>
  );
};

export default MobileNav;
