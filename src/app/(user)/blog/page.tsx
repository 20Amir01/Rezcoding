import BlogPageTitle from "@/components/blog/blog-page-title";
import PaddingContainer from "@/components/layout/PaddingContainer";
import PostList from "@/components/post/PostList";
import PostSearchBar from "@/components/post/PostSearchBar";
import getPosts from "@/helpers/getPosts";
export const revalidate = 30;
export default async function HomePage() {
  const posts = await getPosts();
  return (
    <>
      <div className="h-20 relative bg-neutral-800">
        <PostSearchBar />
      </div>
      <PaddingContainer>
        <main className="space-y-10 mt-16 relative">
          <p className="text-xl font-semibold inline-flex gap-2">
           <BlogPageTitle/>
          </p>
          {posts.length > 0 ? (
            <>
              <PostList posts={posts} />
            </>
          ) : (
            <div>
              <h1>در حال حاضر هیچ مطلبی در سایت وجود ندارد</h1>
            </div>
          )}
        </main>
      </PaddingContainer>
    </>
  );
}
