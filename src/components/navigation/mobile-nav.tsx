"use client";
import { X } from "lucide-react";
import React from "react";
import Navlinks from "../categories/CategoryOptions";
import { useBlog } from "@/contexts/blog-provider";

const MobileNav = () => {
  const { state, dispatch } = useBlog();
  const handleClick = () => {
    dispatch({ type: "mobile-menu-display/deactive" });
  };
  if (state.mobileMenuDisplayToggle)
    return (
      <div
        dir="ltr"
        className="border-b-4 md:hidden border-neutral-500 mobile-nav-anime fixed right-0 top-0 h-[100dvh] bg-white bg-opacity-80 backdrop-blur-sm w-[300px] z-50 py-5 px-8 transition-all overflow-y-auto"
      >
        {/* change hidden and block display with toggle */}
        <div className="flex justify-end w-full sticky top-0 right-0">
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
          <div className="w-full flex justify-center">
            <h2 className="font-bold sticky text-lg border-b-2 border-neutral-500  px-2 py-1">
              <span>دسته بندی مطالب</span>
            </h2>
          </div>
          <Navlinks layout="vertical" />
        </div>
      </div>
    );
};

export default MobileNav;
