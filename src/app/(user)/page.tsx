"use client";
import ClientSideTypeIt from "@/helpers/client-side-type-it";
import BgFixedDiv from "@/components/elements/background-fixed-div";
import React, { useEffect } from "react";

const HomePage = () => {
  return (
    <>
      <BgFixedDiv
        banner
        imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <ClientSideTypeIt
            className="text-sm sm:text-3xl md:text-4xl lg:text-5xl z-10 text-neutral-100 font-bold [text-shadow:_0_3px_1px_black]"
            options={{
              speed: 100,
              waitUntilVisible: true,
            }}
          >
            واقعا همه می تونن برنامه نویس بشن ؟🤔
          </ClientSideTypeIt>
          <ClientSideTypeIt
            className="text-sm sm:text-3xl md:text-4xl lg:text-5xl z-10 text-neutral-100 font-bold [text-shadow:_0_3px_1px_black]"
            options={{
              speed: 100,
              waitUntilVisible: true,
            }}
          >
            واقعا همه می تونن برنامه نویس بشن ؟🤔
          </ClientSideTypeIt>
        </div>
      </BgFixedDiv>
    </>
  );
};

export default HomePage;
