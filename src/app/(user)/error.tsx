"use client"; // Error components must be Client Components

import ClientSideRoute from "@/components/ClientSideRoute";
import PaddingContainer from "@/components/layout/PaddingContainer";
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
    <PaddingContainer>
      <div className="flex justify-center items-center h-[100dvh] gap-1 flex-col text-neutral-800 text-[90%] md:text-[110%]">
        <h2>مشکلی در درخواست شما به به وجود آمده است !</h2>
        <p>لطفا به صفحه اصلی سایت بازگردید .</p>
        <ClientSideRoute
          route="/"
          className="px-2.5 py-1 bg-neutral-800 text-neutral-100 rounded-md"
        >
          صفحه اصلی
        </ClientSideRoute>
      </div>
    </PaddingContainer>
  );
}
