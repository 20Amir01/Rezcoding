"use client";

import Link from "next/link";
import PaddingContainer from "../layout/PaddingContainer";
import { Library, Menu } from "lucide-react";
import { useBlog } from "@/contexts/BlogProvider";
import { useState } from "react";
import Logo from "../elements/Logo";
import CategoriesBox from "./CategoriesBox";

const Navigation = () => {
  const { dispatch } = useBlog();
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const handleMobileMenuBtnClick = () => {
    dispatch({ type: "mobile-menu-display/active" });
  };
  const handleCategoriesToggle = () => {
    setCategoriesToggle(!categoriesToggle);
  };
  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-30">
      <PaddingContainer>
        <div className="py-5 flex items-center justify-between flex-row-reverse">
          <Link className="font-bold text-lg" href="/">
            <Logo />
          </Link>
          {/* <div className="md:hidden">
            <button onClick={handleMobileMenuBtnClick} title="menu">
              <Menu />
            </button>
          </div>
          <div className="hidden md:block relative">
            <button
              onClick={handleCategoriesToggle}
              className={`font-bold rounded-sm p-0.5 flex flex-row-reverse gap-2 transition-all hover:text-blue-500 ${
                categoriesToggle ? "text-blue-500" : ""
              }`}
            >
              دسته بندی مقالات
              <span className="text-black text-opacity-50">
                <Library />
              </span>
            </button>
            {categoriesToggle && <CategoriesBox />}
          </div> */}
        </div>
      </PaddingContainer>
    </div>
  );
};
export default Navigation;
