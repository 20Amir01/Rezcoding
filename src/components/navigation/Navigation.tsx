"use client";

import Link from "next/link";
import PaddingContainer from "../layout/PaddingContainer";
// import { Library, Menu } from "lucide-react";
import { useBlog } from "@/contexts/BlogProvider";
import Logo from "../elements/Logo";
// import CategoriesBox from "./CategoriesBox";
import { usePathname } from "next/dist/client/components/navigation";

const Navigation = () => {
  const { dispatch } = useBlog();
  // const [categoriesToggle, setCategoriesToggle] = useState(false);
  // const handleMobileMenuBtnClick = () => {
  //   dispatch({ type: "mobile-menu-display/active" });
  // };
  // const handleCategoriesToggle = () => {
  //   setCategoriesToggle(!categoriesToggle);
  // };

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
            className={`text-md font-bold sm:text-lg rounded-md p-0.5 transition-all duration-300 px-2.5 ${
              pathname === "/about-me"
                ? "text-gradient-primary hover:text-gradient-secondary"
                : "text-gradient-secondary hover:text-gradient-primary"
            }`}
          >
            من و وبسایتم !
          </Link>
        </div>
      </PaddingContainer>
    </header>
  );
};
export default Navigation;
