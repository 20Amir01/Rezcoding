"use client";
import BgFixedDiv from "@/components/elements/background-fixed-div";
import { Source_Code_Pro } from "next/font/google";
import PaddingContainer from "@/components/layout/padding-container";
import test from "../../../public/paper.jpg";
import Header from "@/components/layout/header";
console.log(test);

export const CODE_FONT = Source_Code_Pro({ weight: "500", subsets: ["latin"] });
const HomePage = () => {
  return (
    <>
      <BgFixedDiv banner imageURL={`${test.src}`}>
        <Header homePage />
      </BgFixedDiv>
      <div className="w-full h-auto py-10 flex items-center justify-center bg-neutral-50">
        <PaddingContainer className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center gap-5 sm:gap-10 justify-center">
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
        </PaddingContainer>
      </div>
      <div className="w-full h-auto py-10 flex items-center justify-center bg-black">
        <PaddingContainer className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center gap-5 sm:gap-10 justify-center">
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
        </PaddingContainer>
      </div>
      <div className="w-full h-auto py-10 flex items-center justify-center bg-neutral-50">
        <PaddingContainer className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center gap-5 sm:gap-10 justify-center">
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
          <div className="bg-red-500 w-full h-auto aspect-square rounded-md"></div>
        </PaddingContainer>
      </div>
    </>
  );
};

export default HomePage;
