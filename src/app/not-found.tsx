import PaddingContainer from "@/components/layout/padding-container";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <PaddingContainer>
        <div className="flex flex-col justify-center items-center w-full gap-2 h-[100dvh] overflow-hidden">
          <h1 className="text-9xl text-blue-500 font-bold">404</h1>
          <p className="sm:text-lg text-sm font-semibold">
            {" "}
            متاسفانه صفحه مورد نظر شما یافت نشد😢
          </p>
          <Link
            className="text-md font-semibold text-white bg-blue-500 px-2.5 py-1 rounded-md"
            href="/"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </PaddingContainer>
      <Footer />
    </>
  );
};

export default NotFound;
