import React from "react";
import { ChevronLeft } from "lucide-react";

import { Post, Category } from "@/../../typing";
import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import PortableText from "react-portable-text";

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
    <div className="space-y-4">
      {/* tags */}
      <div className="text-[0.8rem] flex-wrap font-semibold sm:font-normal flex gap-1 items-center text-neutral-400">
        {post?.categories?.map((item: any) => (
          <div className={`font-bold ${"text-indigo-600"}`} key={item._id}>
            {item.title}
          </div>
        ))}
        <div className="rounded-full w-1 h-1 bg-neutral-200"></div>
        <div>{post.author.name}</div>
        <div className="rounded-full w-1 h-1 bg-neutral-200"></div>
        <div>
          {/* {post && getReadingTime(PortableText(post.body))} */}
          {/* 10 min (test) */}
        </div>
        {/* <div className="rounded-full w-1 h-1 bg-neutral-200"></div> */}
        <div>{post && getRelativeDate(post._createdAt)}</div>
      </div>
      {/* post title */}
      <h2
        className={`${
          isPostPage
            ? `font-bold text-2xl md:text-3xl lg:text-5xl text-neutral-600`
            : `font-medium text-2xl text-neutral-700`
        }`}
      >
        {post?.title}
      </h2>
      {/* desc */}
      <p className={`text-neutral-600 leading-snug text-sm line-clamp-2 text-opacity-90 ${isPostPage?"text-lg text-neutral-700 font-semibold":""}`}>
        {post?.description}
      </p>
      {/* read more */}
      {!isPostPage && (
        <div
          className={`flex gap-2 items-center text-neutral-500 font-semibold ${
            layout === "horizontal" ? "text-lg" : " text-sm justify-center"
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
