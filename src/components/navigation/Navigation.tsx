"use client";
import Link from "next/link";
import PaddingContainer from "../layout/PaddingContainer";
// import { Library, Menu } from "lucide-react";
import { useBlog } from "@/contexts/BlogProvider";
import Logo from "../elements/Logo";
// import CategoriesBox from "./CategoriesBox";
import { usePathname } from "next/dist/client/components/navigation";
import { ChevronLeft, Library, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const { dispatch } = useBlog();
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const handleMobileMenuBtnClick = () => {
    dispatch({ type: "mobile-menu-display/active" });
  };
  const handleCategoriesToggle = () => {
    setCategoriesToggle(!categoriesToggle);
  };

  const pathname = usePathname();
  return (
    <header
      className={`sticky transition-all navigation-anime top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm z-30`}
    >
      <PaddingContainer>
        <div className="py-5 flex items-center justify-between flex-row-reverse">
          <Link className="font-bold text-lg" href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
            {/* <div className="md:hidden flex items-center">
              <button onClick={handleMobileMenuBtnClick} title="menu">
                <Menu />
              </button>
            </div> */}
            {/* <div className="hidden md:block relative">
              <button
                onClick={handleCategoriesToggle}
                className="flex flex-row-reverse items-center text-sm"
              >
                دسته بندی مطالب
                <span className="text-neutral-600">
                  <Library />
                </span>
              </button>
              {categoriesToggle && <CategoriesBox />}
            </div> */}
            {/* <div className="h-4 w-[2px] rounded-full bg-neutral-600 block"></div> */}
            <nav className="flex items-center justify-center gap-2">
            <Link
                className={`text-sm ${
                  pathname === "/blog" ? "text-blue-500" : ""
                }`}
                href="/blog"
              >
                وبلاگ
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/about-me" ? "text-blue-500" : ""
                }`}
                href="/about-me"
              >
               من کی ام ؟
              </Link>

            </nav>
          </div>
        </div>
      </PaddingContainer>
    </header>
  );
};
export default Navigation;
