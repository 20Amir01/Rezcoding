"use client";
import Link from "next/link";
import PaddingContainer from "../layout/PaddingContainer";
// import { Library, Menu } from "lucide-react";
import { useBlog } from "@/contexts/BlogProvider";
import Logo from "../elements/Logo";
// import CategoriesBox from "./CategoriesBox";
import { usePathname } from "next/dist/client/components/navigation";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const {
    state: { mobileMenuToggle },
    dispatch,
  } = useBlog();
  const handleMobileMenuBtnClick = () => {
    dispatch({ type: "mobile-menu/toggle" });
  };
  return (
    <header
      className={`sticky transition-all navigation-anime top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm z-30`}
    >
      <PaddingContainer>
        <div className="py-5 flex items-center justify-between flex-row-reverse relative">
          <Link className="font-bold text-lg" href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
            <div className="md:hidden flex items-center">
              <button
                className="sm:hidden"
                onClick={handleMobileMenuBtnClick}
                title="menu"
              >
                {mobileMenuToggle ? <X /> : <Menu />}
              </button>
            </div>
            <nav className="items-center text-sm justify-center gap-2 hidden sm:flex">
              <NavLinks />
            </nav>
          </div>
        </div>
      </PaddingContainer>
      {mobileMenuToggle && (
        <nav className="flex absolute text-md top-full gap-3 right-0 mobile-nav-anime bg-white h-auto py-6 text-neutral-800 font-bold drop-shadow-lg justify-center items-center z-50 w-full sm:hidden flex-col">
          <NavLinks />
        </nav>
      )}
    </header>
  );
};
export default Navigation;
