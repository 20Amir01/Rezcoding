import React from "react";
import { ChevronLeft, Dot } from "lucide-react";

import { Post, Category } from "@/../../typing";
import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
  layout?: "vertical" | "horizontal";
}

interface CategoriesProp {
  item: Category;
}

const PostContent = ({
  post,
  isPostPage = false,
  layout = "horizontal",
}: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* tags */}
      <div
        className={`text-[0.7rem] flex-wrap font-semibold sm:font-normal gap-0 flex items-center text-neutral-400 ${
          isPostPage ? "text-[100%]" : ""
        }`}
      >
        {post.author && (
          <div className="flex items-center justify-center gap-1">
            <Image
              src={urlFor(post.author.image).url()}
              className={`object-center object-cover rounded-full ${
                isPostPage ? "w-16 h-16" : "w-7 h-7"
              }`}
              width={50}
              height={50}
              alt="author image"
            />
            <span>{post.author.name}</span>
            <Dot />
          </div>
        )}
        {post?.categories &&
          post.categories.map((category: any) => (
            <>
              <div
                className={`font-bold ${
                  category.color
                    ? `text-[${category.color}]`
                    : "text-neutral-500"
                }`}
                key={category._id}
              >
                {category.title}
              </div>
              <Dot />
            </>
          ))}

        <div>
          {/* {post && getReadingTime(PortableText(post.body))} */}
          {/* 10 min (test) */}
        </div>
        {post._createdAt && (
          <div>{post && getRelativeDate(post._createdAt)}</div>
        )}
      </div>
      {/* post title */}
      {isPostPage ? (
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mr-10 text-neutral-600">
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
          className={`flex gap-2 items-center text-neutral-500 font-semibold ${
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
