"use client";
import Link from "next/link";
import PaddingContainer from "./padding-container";
import { useBlog } from "@/contexts/blog-provider";
import Logo from "../elements/logo";
import NavLinks from "../navigation/nav-links";
import { ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const Header = ({ homePage = false }: { homePage?: boolean }) => {
  const {
    state: { mobileMenuToggle },
    dispatch,
  } = useBlog();
  const handleMobileMenuBtnClick = () => {
    dispatch({ type: "mobile-menu/toggle" });
  };
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);
  const [scrollPrevPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === scrollPrevPosition || scrollY > scrollPrevPosition) {
        setIsScrolledToTop(false);
      } else {
        setIsScrolledToTop(true);
      }
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPrevPosition]);

  return (
    <>
      <header
        className={`transition-all bg-white drop-shadow navigation-anime top-0 left-0 right-0 z-50 ${
          isScrolledToTop ? "sticky header-anime" : "static"
        } z-30`}
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
                  {mobileMenuToggle ? <X size={32}/> : <Menu size={32}/>}
                </button>
              </div>
              <nav className="items-center text-sm justify-center gap-2 hidden sm:flex">
                <NavLinks />
              </nav>
            </div>
          </div>
        </PaddingContainer>
        {mobileMenuToggle && (
          <nav className="flex z-40 absolute text-md top-full gap-3 right-0 mobile-nav-anime bg-white h-auto py-6 text-neutral-800 font-bold drop-shadow-lg justify-center items-center w-full sm:hidden flex-col">
            <NavLinks />
          </nav>
        )}
      </header>
      {scrollPrevPosition>100 && isScrolledToTop&& (
        <a
          href="#"
          title="برو به بالا"
          className="z-40 fixed right-5 bottom-10 bg-white text-neutral-900 drop-shadow-lg p-3 rounded-full to-top-button-anime"
        >
          <ChevronUp />
        </a>
      )}
    </>
  );
};
export default Header;
