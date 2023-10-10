"use client";
import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/posts/post-slice";
import mobileMenuSlice from "./features/mobile-menu/mobile-menu-slice";
import categorySlice from "./features/category/category-slice";
import searchSlice from "./features/search/search-slice";

const store = configureStore({
  reducer: {
    posts: postSlice,
    mobileMenu: mobileMenuSlice,
    category: categorySlice,
    search: searchSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
