"use client";
import Link from "next/link";
import PaddingContainer from "../layout/padding-container";
import { useDispatch } from "react-redux";
// import { useBlog } from "@/contexts/blog-provider";
import Logo from "../elements/Logo";
import NavLinks from "./nav-links";
import { ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { openMobileMenu } from "@/redux/features/mobile-menu/mobile-menu-slice";
const Header = ({ homePage = false }: { homePage?: boolean }) => {
  // const { dispatch } = useBlog();
  const dispatch = useDispatch();
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
  const pathname = usePathname();
  return (
    <>
      <header
        className={`drop-shadow bg-white navigation-anime transition-all duration-500 w-full top-0 left-0 right-0 z-50 ${
          isScrolledToTop ? (homePage ? "" : `sticky header-anime`) : `static`
        } z-30`}
      >
        <PaddingContainer className="w-full h-full">
          <div className="py-4 flex items-center justify-between flex-row-reverse relative">
            <Link title="صفحه اصلی" className="font-bold text-lg" href="/">
              <Logo />
            </Link>
            <div className="flex flex-row flex-wrap items-center gap-1.5 font-semibold text-neutral-700">
              <div className="md:hidden flex items-center">
                <button
                  className="sm:hidden"
                  onClick={() => {
                    // dispatch({ type: "mobile-menu/open" });
                    dispatch(openMobileMenu());
                  }}
                  title="menu"
                >
                  <Menu size={32} />
                </button>
              </div>
              <nav
                className={`items-center text-md w-full justify-center gap-2 hidden sm:flex`}
              >
                <NavLinks />
              </nav>
            </div>
          </div>
        </PaddingContainer>
      </header>
      {scrollPrevPosition > 100 && isScrolledToTop && (
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
