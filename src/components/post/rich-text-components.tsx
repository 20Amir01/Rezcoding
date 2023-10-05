import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/url-for";
import CodeBlock from "../elements/code-block";
const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 m-10 mx-auto">
        {value.link && !value.ads ? (
          <Link prefetch={false} href={value?.link}>
            <Image
              className="max-w-full h-auto my-5 mx-auto rounded-md"
              width={1280}
              height={500}
              src={urlFor(value.asset._ref).url()}
              alt={"d"}
            />
          </Link>
        ) : value.ads && !value.link ? (
          <Link prefetch={false} href={value?.ads}>
            <p className="absolute top-0 right-5 bg-neutral-800 rounded-b-lg text-sm p-1 text-neutral-400">
              <span className="animate-pulse">تبلیغات</span>
            </p>
            <Image
              className="max-w-full h-auto my-5 mx-auto rounded-md"
              width={1280}
              height={500}
              src={urlFor(value.asset._ref).url()}
              alt={"d"}
            />
          </Link>
        ) : (
          <Image
            className="max-w-full h-auto my-5 mx-auto rounded-md"
            width={1280}
            height={500}
            src={urlFor(value.asset._ref).url()}
            alt={"d"}
          />
        )}
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mr-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mr-10 py-5 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-r-blue-500 border-r-4 pr-4 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    code: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
    link: ({ children, value }: any) => {
      const rel = !value.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          prefetch={false}
          href={value.href ? value.href : ""}
          rel={rel ? rel : ""}
        >
          {children}
        </Link>
      );
    },
  },
};
export default RichTextComponents;
