import React from "react";
import Navlinks from "./NavLinks";


const CategoriesBox = () => {
  return (
    <div className="categories-toggle-anime absolute bg-neutral-100 rounded-t-md top-[130%] right-[20%] w-max h-auto px-10 py-5 flex justify-center items-center rounded-b-xl z-50 shadow-2xl">
      <Navlinks layout="vertical" />
      <div className="absolute bottom-[90%] right-[10%] rounded-t-xl w-5 h-5 bg-neutral-100"></div>
    </div>
  );
};

export default CategoriesBox;
