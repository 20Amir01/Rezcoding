"use client";
import PostCard from "./post-card";
import { Post } from "../../../typing";
import getPosts from "@/helpers/get-posts";
import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import { useBlog } from "@/contexts/blog-provider";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
  posts: Post;
}
const PostList = ({ posts }: Props) => {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: posts,
  });

  const {
    state: { searchQuery, pageIndex, postCountPerPage },
    dispatch,
  } = useBlog();

  const searchParams = useSearchParams();
  let filteredPosts = searchParams?.has("category")
    ? postsData.filter((post: Post) =>
        post.categories.find(
          (category) => category.title == searchParams?.get("category")
        )
      )
    : postsData;
  const searchWords = searchQuery.split(" ");
  filteredPosts = filteredPosts.filter((post: Post) => {
    return searchWords.every((searchWord: string) => {
      const postTitle = post.title.replace(/\s/g, ""); // Remove spaces from post title
      const postCategories = post.categories.map((category) =>
        category.title.replace(/\s/g, "")
      ); // Remove spaces from each category title
      const postDescription = post.description.replace(/\s/g, ""); // Remove spaces from post description
      const searchWordWithoutSpaces = searchWord.replace(/\s/g, ""); // Remove spaces from search word

      return (
        postTitle.includes(searchWordWithoutSpaces) ||
        postCategories.some((category) =>
          category.includes(searchWordWithoutSpaces)
        ) ||
        postDescription.includes(searchWordWithoutSpaces)
      );
    });
  });
  const pagesCount = Math.ceil(filteredPosts?.length / 8);
  const indexOfLastPost = pageIndex * postCountPerPage;
  const indexOfFirstPost = indexOfLastPost - postCountPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      {searchQuery && (
        <div className="flex items-center gap-5">
          <p>
            نتایج جستجوی شما برای :{" "}
            <span className="text-neutral-600 border-b-2">{searchQuery}</span>
          </p>
        </div>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto`}
      >
        {filteredPosts.length > 0 ? (
          currentPosts.map((post: Post, index: number) => {
            return (
              <PostCard
                post={post}
                key={post._id}
                layout={index % 7 == 0 ? "horizontal" : "vertical"}
                reverse={index % 7 == 0 && index % 0 !== 0 ? true : false}
              />
            );
          })
        ) : (
          <div className="w-full col-span-3 text-center">
            <h2 className="text-sm sm:text-xl">
              مقاله ای با دسته بندی یا موضوع مورد نظر شما یافت نشد !
            </h2>
          </div>
        )}
      </div>
      {pagesCount>1 ? (
        <div
          dir="ltr"
          className="flex justify-center items-center gap-2 text-center w-full p-10"
        >
          <button
            title="صفحه قبل"
            className="bg-blue-primary text-white rounded-full inline-flex items-center justify-center p-2"
            onClick={() => dispatch({ type: "page-index/decreament" })}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            <span>{`${pageIndex}`}</span>
            <span>از</span>
            <span>{`${pagesCount}`}</span>
          </div>
          <button
            className="bg-blue-primary text-white rounded-full inline-flex items-center justify-center p-2"
            title="صفحه بعد"
            onClick={() =>
              dispatch({
                type: "page-index/increament",
                payload: pagesCount,
              })
            }
          >
            <ChevronRight />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PostList;
