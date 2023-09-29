import React from "react";

import PostContent from "./PostContent";
// import PaddingContainer from "../layout/PaddingContainer";
import { Post } from "../../../typing";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
// import Image from "next/image";

interface PostHeroProps {
  post: Post;
}
const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div className="w-full mx-auto space-y-5 mb-10">
      <PostContent isPostPage post={post} />
      <Image src={urlFor(post.mainImage).url()} alt={post.title} className="h-[300px] rounded-md object-cover object-center md:h-[500px]" width={1280} height={500}/>
    </div>
  );
};

export default PostHero;
