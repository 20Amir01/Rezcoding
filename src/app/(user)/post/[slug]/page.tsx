import PostHero from "@/components/post/PostHero";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";
import { Post } from "../../../../../typing";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import PaddingContainer from "@/components/layout/PaddingContainer";
import PostBody from "@/components/post/PostBody";
import CTACard from "@/components/elements/CtaCard";
type Props = {
  params: { slug: string };
};
const PostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == "post"&&slug.current==$slug][0]
    {...,author->,categories[]->}
  `;
  const post: Post = await client.fetch(query, { slug });

  // {console.log("log body : ",post.body)}
  return (
    <PaddingContainer>
      <article>
        <PostHero post={post} />
      {/* <CTACard/> */}
        <PostBody value={post.body}/>
      </article>
    </PaddingContainer>
  );
};

export default PostPage;
