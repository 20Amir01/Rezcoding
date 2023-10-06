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
      <BgFixedDiv className="h-screen" imageURL={coffe_laptop_image.src}>
        {/* <div className="h-full w-full bg-gradient-to-t opacity-20 from-purple-primary to-blue-primary" /> */}
        <div className="h-full w-full test opacity-40 z-10 bg-gradient-custom-animation" />
        <PaddingContainer className="absolute bottom-10 inset-x-0 w-full flex items-end">
          <div className="bg-center bg-cover text-white bg-gradient-custom border-radius-custom-2 max-w-lg p-10">
            <blockquote className="relative max-w-md sm:text-neutral-800 italic text-sm sm:text-xl mx-auto mb-10">
              <p className="leading-10 text-white text-opacity-70">
                “ برنامه‌نویسی این امکان رو به شما می‌ده تا در مورد خودِ «فکر
                کردن» فکر کنید و وقتی‌ هم که دیباگ می‌کنید، در مورد خودِ
                «یادگیری» یاد می‌گیرید. ”
              </p>
              <cite className="text-white text-opacity-70">
                نیکلاس نگروپونته
              </cite>
            </blockquote>
          </div>
        </PaddingContainer>
      </BgFixedDiv>
      <div className="w-full h-auto">
        <div className="grid grid-cols-1 w-full h-full gap-5">
          <PaddingContainer>
            <div className="w-full my-10 flex flex-col items-center sm:flex-row justify-center gap-10">
              <div className="h-full flex justify-center items-center">
                <p className="text-4xl font-bold text-gradient-custom">
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
              <p className="mx-auto max-w-md text-justify bg-blue-primary bg-opacity-30 border-radius-custom-1 p-10 rounded-md text-neutral-800">
                در این وبسایت مطالب و مقالاتی از موضوعات مختلف مانند کامپیوتر و
                برنامه نویسی قرار خواهد گرفت که از بخش{" "}
                <Link className="text-blue-primary font-semibold" href="/blog">
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
            <PaddingContainer>
              <p className="text-center">
                اگر تمایل دارید کمی با من آشنا بشید میتونید به بخش{" "}
                <Link
                  className="text-purple-primary font-semibold"
                  href="/about-me"
                >
                  من کیم ؟
                </Link>{" "}
                وبسایت مراجعه کنید .
              </p>
            </PaddingContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
