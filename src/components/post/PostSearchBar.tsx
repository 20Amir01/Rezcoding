"use client";
import { ChevronDown, Library, Search, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Button from "../elements/Button";
import PostSearchFilterBox from "./PostSearchFilterBox";
import SearchPostInput from "./SearchPostInput";
import PaddingContainer from "../layout/PaddingContainer";
import { useQuery } from "react-query";
import getCategories from "@/helpers/getCategories";
import { useBlog } from "@/contexts/BlogProvider";

const PostSearchBar = ({ categories }: { categories: [] }) => {
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    initialData: categories,
  });
  const {
    state: { categoryBoxToggle, searchBoxToggle, searchQuery },
    dispatch,
  } = useBlog();
  useEffect(() => {
    if (categoryBoxToggle) dispatch({ type: "search-box-/close" });
    if (searchBoxToggle) dispatch({ type: "category-box/close" });
  }, [categoryBoxToggle, searchBoxToggle, dispatch]);

  return (
    <PaddingContainer className="absolute top-[50%] right-0 left-0">
      <div className="flex w-full flex-row-reverse items-center justify-between gap-1 bg-white rounded-md relative z-20 px-2.5 py-5 drop-shadow-md">
        <div className="flex gap-1 flex-row-reverse h-full">
          <Button
            onClick={() => {
              dispatch({ type: "search-box-/toggle" });
            }}
            className="text-sm"
            title="جستجو در وبلاگ"
          >
            <span className="hidden md:block"> جست و جو در وبلاگ</span>
            <Search size={16} />
          </Button>
          {searchQuery && (
            <Button
              className="text-sm"
              title="پاک کردن جستجو"
              onClick={() => dispatch({ type: "search-query-clear" })}
            >
              <Trash2 size={16}/>
            </Button>
          )}
        </div>
        <Button
          title="دسته بندی"
          onClick={() => {
            dispatch({ type: "category-box/toggle" });
          }}
          className="text-sm"
        >
          دسته بندی موضوعات
          <ChevronDown />
        </Button>
        {categoryBoxToggle && (
          <PostSearchFilterBox categories={categoriesData} />
        )}
        {searchBoxToggle && <SearchPostInput />}
      </div>
    </PaddingContainer>
  );
};

export default PostSearchBar;
