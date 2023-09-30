import React from "react";
import PostCard from "./PostCard";
import { Post } from "../../../typing";
interface Props {
  posts: Post;
}
const PostList = ({ posts }: Props) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`}>
      {posts.map((post: Post, index: number) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            layout={index % 7 == 0 ? "horizontal" : "vertical"}
            reverse={index % 7 == 0 && index % 0 !== 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default PostList;
