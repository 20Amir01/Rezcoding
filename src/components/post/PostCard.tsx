// import Image from "next/image";
import React from "react";
import PostContent from "./PostContent";
import { Post } from "../../../typing";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "../ClientSideRoute";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
  id?: string;
}
const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <ClientSideRoute
      route={`/post/${post.slug.current}`}
      className={`bg-white px-2.5 py-10 rounded-md gap-2 ${
        layout === "horizontal"
          ? `grid grid-cols-1 sm:gap-5 sm:grid-cols-2 md:gap-5 md:px-5 justify-center items-center sm:col-span-2 md:col-span-3`
          : "w-full flex flex-col"
      }`}
    >
      {/* post image */}
      <Image
        className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${
          reverse ? "sm:order-last" : ""
        }`}
        alt={post.title}
        src={urlFor(post.mainImage).url()}
        width={600}
        height={300}
      />
      {/* post content */}
      <PostContent post={post} layout={layout} />
    </ClientSideRoute>
  );
};

export default PostCard;
