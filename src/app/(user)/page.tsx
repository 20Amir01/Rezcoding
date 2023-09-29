import BgFixedDiv from "@/components/elements/BgFixedDiv";
// import CTACard from "@/components/elements/CtaCard";
import PaddingContainer from "@/components/layout/PaddingContainer";
import PostCard from "@/components/post/PostCard";
import PostList from "@/components/post/PostList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq` 
  *[_type=='post']{
    ...,
    author->,
    categories[]->}|order(createdAt desc)
  
`;

export default async function HomePage() {
  const posts = await client.fetch(query);
  return (
    <main>
      <BgFixedDiv banner imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"/>
      <PaddingContainer>
      <main className="space-y-10">
        {posts.length > 0 ? (
          <>
            {" "}
            <PostCard post={posts[0]} layout="horizontal" />
            {/* <CTACard /> */}
            <PostList
              posts={posts.filter((_:any, index:number) => index > 0 && index < 7)}
              layout="vertical"
            />
            {posts.at(7) && (
              <>
                <PostCard post={posts[7]} layout="horizontal" reverse />
                <PostList
                  posts={posts.filter((_:any, index:number) => index > 7)}
                  layout="vertical"
                />
              </>
            )}
          </>
        ) : (
          <div>
            <h1>در حال حاضر هیچ مطلبی در سایت وجود ندارد</h1>
          </div>
        )}
      </main>
    </PaddingContainer>
    </main>
  );
}
