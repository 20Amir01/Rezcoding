import ClientSideTypeIt from "@/components/ClientSideTypeIt";
import BgFixedDiv from "@/components/elements/BgFixedDiv";
// import CTACard from "@/components/elements/CtaCard";
import PaddingContainer from "@/components/layout/PaddingContainer";
import PostCard from "@/components/post/PostCard";
import PostList from "@/components/post/PostList";
import { client } from "@/lib/sanity.client";
import { ChevronDown, Library } from "lucide-react";
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
      <BgFixedDiv
        banner
        imageURL="https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png"
      >
        <div className="h-full w-full flex items-center justify-center text-neutral-100 drop-shadow-xl font-bold [text-shadow:_0_3px_1px_black]">
          <ClientSideTypeIt
            className="text-sm sm:text-3xl md:text-4xl lg:text-5xl"
            options={{
              speed: 100,
              waitUntilVisible: true,
            }}
          >
            واقعا همه می تونن برنامه نویس بشن ؟🤔
          </ClientSideTypeIt>
        </div>
      </BgFixedDiv>
      <PaddingContainer>
        <main className="space-y-10 mt-10">
          {posts.length > 0 ? (
            <>
              <div className="w-full text-center flex flex-col items-center justify-center text-neutral-700">
                <p className="text-xl font-semibold inline-flex gap-2">                
                 <Library/>
                 تمامی مقالات 
                </p>
              </div>
              <PostCard post={posts[0]} layout="horizontal" />
              {/* <CTACard /> */}
              <PostList
                posts={posts.filter(
                  (_: any, index: number) => index > 0 && index < 7
                )}
                layout="vertical"
              />
              {posts.at(7) && (
                <>
                  <PostCard post={posts[7]} layout="horizontal" reverse />
                  <PostList
                    posts={posts.filter((_: any, index: number) => index > 7)}
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
