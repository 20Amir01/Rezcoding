// import Image from "next/image";
import React from "react";
import PostContent from "./post-content";
import { Post } from "../../../typing";
import Image from "next/image";
import urlFor from "@/lib/url-for";
import ClientSideRoute from "../../helpers/client-side-route";
import Link from "next/link";

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
    <Link
      href={`blog/post/${post.slug.current}`}
      className={`px-2.5 py-10 rounded-md gap-2 bg-white shadow-sm ${
        layout === "horizontal"
          ? `grid grid-cols-1 sm:gap-5 sm:grid-cols-2 md:gap-5 md:px-5 justify-center items-center sm:col-span-2 md:col-span-3  `
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
    </Link>
  );
};

export default PostCard;
