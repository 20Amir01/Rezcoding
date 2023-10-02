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
      <Image src={urlFor(post.mainImage).url()} alt={post.title} className="w-full h-auto max-w-4xl mx-auto aspect-video rounded-md object-cover object-center" width={1280} height={500}/>
    </div>
  );
};

export default PostHero;
