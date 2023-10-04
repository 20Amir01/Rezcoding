import getCategories from "@/helpers/getCategories";
import getPosts from "@/helpers/getPosts";
import { useQuery } from "react-query";
export function useAllPosts() {
  return useQuery("posts", getPosts);
}
export function useAllCategories(){
     return useQuery("categories",getCategories)
}
