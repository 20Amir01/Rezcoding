import React from "react";
import Image from "next/image";
import BackgroundImageDiv from "@/components/elements/BackgroundImageDiv";
import PaddingContainer from "@/components/layout/PaddingContainer";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import RichTextComponents from "@/components/post/RichTextComponents";
import PortableText from "react-portable-text";
import PostBody from "@/components/post/PostBody";

const query = groq`
  *[_type == "author"]{
  name,
  bio,
  "authorImage": image.asset->url,
  "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
    title,
    "slug": slug.current,
  }
}`;

const AboutMePage = async () => {
  const author = await client.fetch(query).then(data=>data.at(0));
  return (
    <>
      <div></div>
      <PaddingContainer className="flex justify-center mt-10">
       <PostBody value={author.bio}/>
      </PaddingContainer>
    </>
  );
};
export default AboutMePage;
