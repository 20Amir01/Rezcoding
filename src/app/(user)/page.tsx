import ClientSideTypeIt from "@/components/ClientSideTypeIt";
import BgFixedDiv from "@/components/elements/BgFixedDiv";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BgFixedDiv
        banner
        imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"
      >
        <div className="h-full w-full flex items-center justify-center">
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
      <div className="bg-black h-80 w-full"></div>
      <BgFixedDiv
        banner
        imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"
      >
        <div className="h-full w-full flex items-center justify-center">
            2
        </div>
      </BgFixedDiv>
      <div className="bg-black h-80 w-full"></div>
      <BgFixedDiv
        banner
        imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"
      >
        <div className="h-full w-full flex items-center justify-center">
            3
        </div>
      </BgFixedDiv>
    </>
  );
};

export default HomePage;
