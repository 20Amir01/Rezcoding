"use client";
import { X } from "lucide-react";
import React from "react";
import Navlinks from "./NavLinks";
import { useBlog } from "@/contexts/BlogProvider";

const MobileNav = () => {
  const { state, dispatch } = useBlog();
  const handleClick = () => {
    dispatch({ type: "mobile-menu-display/deactive" });
  };
  if (state.mobileMenuDisplayToggle)
    return (
      <div className="mobile-nav-anime fixed right-0 top-0 h-[100dvh] bg-neutral-100 backdrop-blur-lg bg-opacity-80 w-[300px] z-50 py-5 px-8 md:hidden transition-all">
        {/* change hidden and block display with toggle */}
        <div className="flex justify-start w-full">
          <button
            onClick={() => {
              handleClick();
            }}
            title="close"
          >
            <X />
          </button>
        </div>
        <div>
          <div className="w-full flex justify-center"><h2 className="font-bold text-indigo-900 text-xl rounded-md px-2 py-1"><span>دسته بندی مقالات</span></h2></div>
          <Navlinks layout="vertical" />
        </div>
      </div>
    );
};

export default MobileNav;
