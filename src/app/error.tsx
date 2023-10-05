"use client"; // Error components must be Client Components

import ClientSideRoute from "@/helpers/client-side-route";
import PaddingContainer from "@/components/layout/padding-container";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/navigation/header";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Navigation />
      <PaddingContainer>
        <div className="flex flex-col justify-center items-center w-full gap-2 h-[100dvh] overflow-hidden text-center">
          <p className="text-xl text-blue-500 font-bold">{error.name}</p>
          <h1 className="text-xl text-blue-500 font-bold">
            مشکلی در دخواست شما به وجود آمده است !
          </h1>
          <p dir="ltr" className="sm:text-lg text-sm font-semibold">
            {error.message}
          </p>
          <ClientSideRoute
            className="text-md font-semibold text-white bg-blue-500 px-2.5 py-1 rounded-md"
            route="/"
          >
            بازگشت به صفحه اصلی
          </ClientSideRoute>
        </div>
      </PaddingContainer>
      <Footer />
    </>
  );
}
