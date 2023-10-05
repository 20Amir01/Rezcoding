import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const postsQuery = groq` 
  *[_type=='post']{
    ...,
    author->,
    categories[]->}|order(createdAt desc)
  
`;
export default async function getPosts() {
     const posts = await client.fetch(postsQuery);
     return posts
}