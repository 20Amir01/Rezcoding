import React from "react";
import { ChevronLeft, Dot } from "lucide-react";
import { Post} from "@/../../typing";
import {getRelativeDate } from "@/lib/helpers";
import urlFor from "@/lib/url-for";
import Image from "next/image";
import BackButton from "../elements/back-button";
import Link from "next/link";
interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
  layout?: "vertical" | "horizontal";
}
const PostContent = ({
  post,
  isPostPage = false,
  layout = "horizontal",
}: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* tags */}
      {post && (
        <div
          className={`text-[0.6rem] lg:text-[0.8rem] flex-wrap flex justify-start items-center text-neutral-400 ${
            isPostPage ? "md:text-[100%]" : ""
          }`}
        >
          {isPostPage && <BackButton />}
          {post.author && (
            <Link
              title="نویسنده"
              href="/about-me"
              className="flex items-center font-semibold justify-center gap-1"
            >
              <Image
                src={urlFor(post.author.image).url()}
                className={`object-center object-cover rounded-full ${
                  isPostPage ? "w-7 md:w-16 h-7 md:h-16" : "w-7 h-7"
                }`}
                width={50}
                height={50}
                quality={100}
                alt="author image"
              />
              <span>{post.author.name}</span>
              <Dot />
            </Link>
          )}
          {post?.categories &&
            post.categories.map((category: any) => (
              <>
                <Link
                  href={`/blog?category=${category.title}`}
                  title="دسته بندی"
                  style={{ color: category.color ? category.color : "#333" }}
                  className={`font-bold`}
                  key={category._id}
                >
                  {category.title}
                </Link>
                <Dot />
              </>
            ))}
          {/* {
              post?.body&& <> <div>زمان مطالعه : {getReadingTime(post.body.toLocaleString()).split('').splice(0,2)}</div><Dot/></>
            } */}
          {/* <span>
            {post && getReadingTime(PortableText(post.body))}
            10 min (test)
          </span> */}
          {post._createdAt && (
            <span className="inline-block" dir="ltr">
              {post && getRelativeDate(post._createdAt)}
            </span>
          )}
        </div>
      ) }
      {/* post title */}
      {isPostPage ? (
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl w-full max-w-4xl mx-auto text-neutral-600">
          {post?.title}
        </h1>
      ) : (
        <h2
          className={`font-medium ${
            layout == "horizontal" ? "text-lg md:text-2xl" : "text-lg"
          } text-neutral-700`}
        >
          {post?.title}
        </h2>
      )}
      {/* desc */}
      {!isPostPage && (
        <p className="text-neutral-600 leading-snug text-sm line-clamp-2 text-opacity-90">
          {post?.description}
        </p>
      )}
      {/* read more */}
      {!isPostPage && (
        <div
          className={`flex gap-2 items-center text-blue-primary text-opacity-70 font-semibold ${
            layout === "horizontal"
              ? "text-sm justify-center md:justify-start md:text-lg"
              : "text-sm justify-center"
          }`}
        >
          مطالعه
          <ChevronLeft size={16} />
        </div>
      )}
    </div>
  );
};

export default PostContent;
