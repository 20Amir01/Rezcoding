"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useBlog } from "@/contexts/blog-provider";

const BlogSearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const {
    dispatch,
    state: { searchQuery },
  } = useBlog();
  const handleSubmit = () => {
    if (!searchInputValue) dispatch({ type: "search-query-clear" });
    if (!searchInputValue) return;
    // dispatch({ type: "search-box-/close" });
    dispatch({ type: "search-query-set", payload: searchInputValue });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="absolute top-[117%] left-0 flex justify-end w-full"
    >
      <button
        className="rounded-r-md bg-blue-primary text-white w-14 h-14 drop-shadow-md z-20 inline-flex justify-center items-center"
        title="جستجو"
      >
        <Search />
      </button>
      <input
        title="search"
        type="text"
        name=""
        id=""
        defaultValue={searchQuery}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        placeholder="جستجو در وبلاگ"
        className="bg-white drop-shadow-md text-black border-none text-center rounded-l-md h-14 w-full sm:w-80 focus:outline-neutral-900"
      />
    </form>
  );
};

export default BlogSearchInput;
