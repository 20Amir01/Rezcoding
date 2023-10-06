"use client";

import BgFixedDiv from "@/components/elements/background-fixed-div";
import PaddingContainer from "@/components/layout/padding-container";
import paperImage from "../../../public/paper.jpg";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import ClientSideTypeIt from "@/helpers/client-side-type-it";
import Image from "next/image";
const nastalig_font = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ["arabic"],
});
const HomePage = () => {
  return (
    <>
      {/* <BgFixedDiv banner imageURL={`${paperImage.src}`}>
        <PaddingContainer className="h-full w-full">
          <div
            className={`w-full h-full flex justify-center items-center ${nastalig_font.className}`}
          >
           
          </div>
        </PaddingContainer>
      </BgFixedDiv> */}

      <BgFixedDiv imageURL={paperImage.src}>
        <div className="h-[50dvh] w-full bg-gradient-to-t opacity-50 from-purple-primary to-blue-primary"/>
      </BgFixedDiv>
      <div className="w-full h-auto">
        <PaddingContainer className="grid grid-cols-1 w-full h-full gap-5">
          <div className="rounded-md w-full h-[50vh] flex justify-center items-center text-lg">
            <p>حالا اینجا کجاست ؟ 🤔</p>
          </div>
          <div className="rounded-md w-full h-[50vh] flex justify-center items-center text-lg">
            <p> اینجا rezcoder هستش !</p>
          </div>

          <div className="rounded-md w-full h-[50vh] flex justify-center items-center text-lg">
            <p>
              من به شخصه علاقه دارم مطالب و مقالاتی در رابطه با حوزه برنامه
              نویسی و تکنولوژی و ... قرار بدم{" "}
            </p>
          </div>
          <div className="rounded-md w-full h-auto grid grid-cols-1 gap-10 text-lg text-center">
            <p>
              مقالاتی که در وبسایت قرار میدم رو میتونید تو بخش وبلاگ سایت مشاهده
              و مطاعه کنید
            </p>
            <p>سه مقاله اخیر : </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-full gap-5">
              <div className="bg-purple-primary aspect-square rounded-md"></div>
              <div className="bg-purple-primary aspect-square rounded-md"></div>
              <div className="bg-purple-primary aspect-square rounded-md"></div>
            </div>
          </div>
          <div className="rounded-md w-full h-[50vh] flex justify-center items-center text-lg">
            <p>
              اگر تمایل دارید کمی با من آشنا بشید میتونید به بخش من کیم ؟ وبسایت
              برید .
            </p>
          </div>
        </PaddingContainer>
      </div>
    </>
  );
};

export default HomePage;
