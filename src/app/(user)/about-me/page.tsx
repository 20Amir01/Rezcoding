"use client";
import BgFixedDiv from "@/components/elements/BgFixedDiv";
import PaddingContainer from "@/components/layout/PaddingContainer";
import React from "react";
import Image from "next/image";
const AboutMePage = () => {
  return (
    <>
      <BgFixedDiv banner imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png">
        <div className="px-5 w-full max-w-7xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 space-y-10 p-10 items-center">
          <div className="flex justify-center items-center">
            <Image
              className="border-radius-custom object-cover object-center"
              src={"https://i.ibb.co/ZKp6nbD/me.png"}
              width={200}
              height={300}
              alt="عکس من"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-4xl">سلام !</p>
          </div>
        </div>
      </BgFixedDiv>
      <div className="h-[100dvh]">
        {/* <PaddingContainer></PaddingContainer> */}
        <BgFixedDiv imageURL="https://i.ibb.co/ZKp6nbD/me.png">

        </BgFixedDiv>
      </div>
    </>
  );
};
export default AboutMePage;
