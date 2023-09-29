"use client";

import Link from "next/link";
import PaddingContainer from "../layout/PaddingContainer";
// import { Library, Menu } from "lucide-react";
import { useBlog } from "@/contexts/BlogProvider";
import { useState } from "react";
import Logo from "../elements/Logo";
// import CategoriesBox from "./CategoriesBox";
import { usePathname } from "next/dist/client/components/navigation";

const Navigation = () => {
  const { dispatch } = useBlog();
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  // const handleMobileMenuBtnClick = () => {
  //   dispatch({ type: "mobile-menu-display/active" });
  // };
  // const handleCategoriesToggle = () => {
  //   setCategoriesToggle(!categoriesToggle);
  // };
  const pathname = usePathname();
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
          <Link
            href="/about-me"
            className={`text-sm font-semibold sm:text-lg rounded-md p-0.5 transition-all duration-300 px-2.5 hover:bg-gradient-to-tl hover:from-neutral-800  hover:via-neutral-700 hover:to-neutral-500 hover:text-neutral-100 ${
              pathname === "/about-me"
                ? "text-neutral-100 bg-gradient-to-tl from-neutral-800 via-neutral-700 to-neutral-500"
                : "text-neutral-600"
            }`}
          >
            کمی با من آشنا بشید !
          </Link>
        </div>
      </PaddingContainer>
    </div>
  );
};
export default Navigation;
