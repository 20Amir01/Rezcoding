"use client";
import React from "react";
import Image from "next/image";
import ClientSideTypeIt from "@/components/ClientSideTypeIt";
import BackgroundImageDiv from "@/components/elements/BackgroundImageDiv";
import PaddingContainer from "@/components/layout/PaddingContainer";
const AboutMePage = () => {
  return (
    <>
      <BackgroundImageDiv
        className="h-28 w-full relative"
        url="https://i.ibb.co/PrRfkbV/Blue-White-Watercolor-Linked-In-Background-Photo.png"
      >
        <div className="px-5 w-full max-w-7xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 space-y-10 p-10 items-center">
          <div className="flex justify-center items-center absolute left-0 right-0 bottom-[-50%]">
            <Image
              className="rounded-full object-cover object-center drop-shadow-lg max-w-[150px]"
              src={"https://i.ibb.co/ZKp6nbD/me.png"}
              width={100}
              height={100}
              alt="عکس من"
            />
          </div>
        </div>
      </BackgroundImageDiv>
      {/* <PaddingContainer className="flex justify-center mt-10">

      </PaddingContainer> */}
    </>
  );
};
export default AboutMePage;
