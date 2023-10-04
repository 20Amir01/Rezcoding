"use client";
import { ChevronDown, Library, Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Button from "../elements/Button";
import PostSearchFilterBox from "./PostSearchFilterBox";
import SearchPostInput from "./SearchPostInput";
import PaddingContainer from "../layout/PaddingContainer";

const PostSearchBar = () => {
  const [searchBoxToggle, setSearchBoxToggle] = useState(false);
  const [categoryBoxToggle, setCategoryBoxToggle] = useState(false);
  useEffect(() => {
    if (categoryBoxToggle) setSearchBoxToggle(false);
    if (searchBoxToggle) setCategoryBoxToggle(false);
  }, [categoryBoxToggle, searchBoxToggle]);
  return (
    <PaddingContainer className="absolute top-[50%] right-0 left-0">
      <div className="flex w-full flex-row-reverse items-center justify-between gap-1 bg-white rounded-md relative z-20 px-2.5 py-5 drop-shadow-md">
        <Button
          onClick={() => {
            setSearchBoxToggle(!searchBoxToggle);
          }}
          className="text-sm"
          title="جستجو در وبلاگ"
        >
          <span className="hidden md:block"> جست و جو در وبلاگ</span>
          <Search size={16} />
        </Button>
        <Button
          onClick={() => {
            setCategoryBoxToggle(!categoryBoxToggle);
          }}
          className="text-sm"
        >
          دسته بندی موضوعات<ChevronDown/>
        </Button>
        {categoryBoxToggle && <PostSearchFilterBox />}
        {searchBoxToggle && <SearchPostInput />}
      </div>
    </PaddingContainer>
  );
};

export default PostSearchBar;
