import PostHero from "@/components/post/post-hero";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";
import { Post } from "../../../../../../typing";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
type Props = {
  params: { slug: string };
};
export const revalidate = 30;
export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({ slug }));
}

const PostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == "post"&&slug.current==$slug][0]
    {...,author->,categories[]->}
  `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <PaddingContainer className="py-5">
        <PostHero post={post} />
        {/* <CTACard/> */}
        <PostBody value={post.body} />
    </PaddingContainer>
  );
};

export default PostPage;
