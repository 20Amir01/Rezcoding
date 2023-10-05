"use client";
import Link from "next/link";
import PaddingContainer from "./padding-container";
import { useBlog } from "@/contexts/blog-provider";
import Logo from "../elements/logo";
import NavLinks from "../navigation/nav-links";
import { Menu, X } from "lucide-react";
import { useEffect,useState } from "react";
const Header = ({ homePage = false }: { homePage?: boolean }) => {
  const {
    state: { mobileMenuToggle },
    dispatch,
  } = useBlog();
  const handleMobileMenuBtnClick = () => {
    dispatch({ type: "mobile-menu/toggle" });
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPrevPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === scrollPrevPosition || scrollY > scrollPrevPosition) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPrevPosition]);

  return (
    <header
      className={`transition-all bg-white drop-shadow navigation-anime top-0 left-0 right-0 ${
        isScrolled ? "sticky header-anime" : "static"
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
export default Header;
