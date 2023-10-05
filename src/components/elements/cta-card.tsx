// import Link from "next/link";
import React from "react";
import Logo from "./logo";

const CTACard = () => {
  return (
    <div className="rounded-md my-5 overflow-hidden text-neutral-800 px-6 py-10 h-auto w-full relative bg-gradient-to-tl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
      {/* overlay */}
      <div className="inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/30 absolute z-20"></div>
      {/* image */}
      {/* <Image fill src="" alt="CTA card image" className="object-center object-cover"/> */}
      {/* content container */}
      <div className="relative z-20 space-y-2">
        <Logo />
        <div className="text-lg font-medium">
          <h3 className="text-2xl font-semibold">Expolore world with me</h3>
          <p className="max-w-lg text-lg mt-2">
            A minimal and lovely travel blog which shares experiences and cities
            around
          </p>
        </div>
        <form className="flex justify-center flex-col sm:flex-row sm:justify-start gap-2">
          <input
            placeholder="write your email ..."
            type="text"
            maxLength={320}
            className="px-4 py-3 text-center bg-white/90 rounded-md outline-none focus:ring-2 ring-neutral-600 text-sm text-neutral-600 font-semibold w-full sm:w-auto"
          />
          <button className="bg-neutral-900 text-neutral-200 px-3 py-2 rounded-md w-full sm:w-auto">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
