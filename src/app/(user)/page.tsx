// "use client";

import BgFixedDiv from "@/components/elements/background-fixed-div";
import PaddingContainer from "@/components/layout/padding-container";
import coffe_laptop_image from "../../../public/laptop-coffee.jpg";
import notebook_1_image from "../../../public/notebook-1.png";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import ClientSideTypeIt from "@/helpers/client-side-type-it";
import Image from "next/image";
import BackgroundImageDiv from "@/components/elements/background-image-div";
import Link from "next/link";
import getPosts from "@/helpers/get-posts";
import { Post } from "../../../typing";
import PostCard from "@/components/post/post-card";
const nastalig_font = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ["arabic"],
});
const HomePage = async () => {
  const posts = await getPosts();

  return (
    <>
      <BgFixedDiv
        className="h-[400px] relative"
        imageURL={coffe_laptop_image.src}
      >
        {/* <div className="h-full w-full bg-gradient-to-t opacity-20 from-purple-primary to-blue-primary" /> */}
        <div className="h-full w-full test opacity-40 z-10 bg-gradient-custom-animation" />
        <div className="absolute -bottom-20 right-0 w-full left-0">
          <div className="mx-auto max-w-7xl flex justify-center sm:justify-start px-2">
            <div className="bg-center bg-cover text-white bg-gradient-custom border-radius-custom-2 max-w-lg p-10 ">
              <blockquote className="max-w-md sm:text-neutral-800 text-sm sm:text-xl mx-auto mb-10">
                <p className="leading-10 italic text-white text-opacity-70">
                  “ برنامه‌نویسی این امکان رو به شما می‌ده تا در مورد خودِ «فکر
                  کردن» فکر کنید و وقتی‌ هم که دیباگ می‌کنید، در مورد خودِ
                  «یادگیری» یاد می‌گیرید. ”
                </p>
                <cite className="text-white text-opacity-70">
                  <Link href="https://en.wikipedia.org/wiki/Nicholas_Negroponte#:~:text=Nicholas%20Negroponte%20(born%20December%201,per%20Child%20Association%20(OLPC)." prefetch={false} scroll={false}>
                  نیکلاس نگروپونته
                  </Link>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </BgFixedDiv>
      <div className="w-full h-auto bg-neutral-50">
        <div className="grid grid-cols-1 w-full h-full gap-5">
          <PaddingContainer>
            <div className="w-full mt-16 flex items-center flex-row justify-center gap-10">
              <div className="h-full flex justify-center items-center">
                <p className="text-lg sm:text-4xl font-bold text-gradient-custom">
                  حالا اینجا کجاست
                </p>
              </div>
              <div className="h-full flex justify-center items-center">
                <p className="text-[100px] sm:text-[140px] animate-pulse text-gradient-custom">
                  ؟!
                </p>
              </div>
            </div>
            <div className="rounded-md w-full h-auto flex flex-col gap-10 text-lg p-5">
              <p className="mx-auto max-w-md text-justify bg-blue-primary bg-opacity-100 border-radius-custom-1 p-10 rounded-md text-neutral-100">
                در این وبسایت مطالب و مقالاتی از موضوعات مختلف مانند کامپیوتر و
                برنامه نویسی قرار خواهد گرفت که از بخش{" "}
                <Link
                  className="animate-pulse"
                  href="/blog"
                >
                  وبلاگ
                </Link>{" "}
                قابل دسترسی و مطالعه هستند .
              </p>
              <p className="text-center text-gradient-custom text-3xl font-semibold border-b-2 py-5">
                دو مقاله آخر
              </p>
              <div className="grid grid-cols-1 max-w-4xl mx-auto w-full h-full gap-10">
                <PostCard post={posts?.at(0)} />
                <PostCard post={posts?.at(1)} reverse />
              </div>
            </div>
          </PaddingContainer>
          <div className="rounded-md w-full h-auto flex justify-center items-center text-lg">
            <PaddingContainer className="w-full h-full">
              <div className="w-full flex justify-center items-center p-10 bg-gradient-custom-animation border-radius-custom-2 max-w-2xl mx-auto">
                <p className="text-justify text-neutral-50">
                  اگر تمایل دارید کمی با من آشنا بشید میتونید به بخش{" "}
                  <Link
                    className="animate-pulse"
                    href="/about-me"
                  >
                    من کیم ؟
                  </Link>{" "}
                  وبسایت مراجعه کنید .
                </p>
              </div>
            </PaddingContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
