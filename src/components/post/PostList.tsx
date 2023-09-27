import React from "react";
import PostCard from "./PostCard";
import { Post } from "../../../typing";
interface Props {
  posts: Post;
  layout: "horizontal" | "vertical";
}
const PostList = ({ posts, layout = "vertical" }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post: Post) => (
        <PostCard post={post} key={post._id} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
