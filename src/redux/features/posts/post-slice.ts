"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../../typing";
import getPosts from "@/helpers/get-posts";

interface initialStateTypes {
  posts: null | Post[];
  pageIndex: number;
  postCountPerPage: number;
}
const initialState: initialStateTypes = {
  posts: null,
  pageIndex: 1,
  postCountPerPage: 8,
};
const getPostsThunk=(dispatch:any,getState:any)=>{
  return async ()=>{
    const posts=getPosts()
    
  }
}
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increamentPageIndex: (state, action) => {
      state.pageIndex === action.payload ? action.payload : state.pageIndex + 1;
    },
    decreamentPageIndex: (state) => {
      state.pageIndex === 1 ? 1 : state.pageIndex - 1;
    },
  },
});

export const { decreamentPageIndex, increamentPageIndex } = postsSlice.actions;
export default postsSlice.reducer;
