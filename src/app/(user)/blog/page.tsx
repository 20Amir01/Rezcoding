import BlogPageTitle from "@/components/blog/blog-page-title";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";
import PostSearchBar from "@/components/blog/blog-header";
import getCategories from "@/helpers/get-categories";
import getPosts from "@/helpers/get-posts";
export const revalidate = 30;
export default async function BlogPage() {
  const posts = await getPosts();
  const categories = await getCategories();
  return (
    <>
      <div className="h-20 relative bg-neutral-800 z-0">
        <PostSearchBar categories={categories}/>
      </div>
      <PaddingContainer>
        <main className="space-y-10 mt-16 relative">
          <div className="text-xl font-semibold inline-flex gap-2">
            <BlogPageTitle categories={categories} />
          </div>
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
