"use client";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, Search, Trash2 } from "lucide-react";
import { useEffect } from "react";
import Button from "../elements/custom-button";
import PostSearchFilterBox from "./blog-category-filter-box";
import SearchPostInput from "./blog-search-input";
import PaddingContainer from "../layout/padding-container";
import { useQuery } from "react-query";
import getCategories from "@/helpers/get-categories";
// import { useBlog } from "@/contexts/blog-provider";
import { RootState } from "@/redux/store";
import { clearSearchQuery, closeSearchBox, toggleSearchBox } from "@/redux/features/search/search-slice";
import { closeCategoryBox, toggleCategoryBox } from "@/redux/features/category/category-slice";

const BlogHeader = ({ categories }: { categories: [] }) => {
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    initialData: categories,
  });
  // const {
  //   state: { categoryBoxToggle, searchBoxToggle, searchQuery },
  //   dispatch,
  // } = useBlog();
  const { categoryBoxToggle } = useSelector(
    (state: RootState) => state.category
  );
  const { searchBoxToggle, searchQuery } = useSelector(
    (state: RootState) => state.search
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // v1
    // if (categoryBoxToggle) dispatch({ type: "search-box-/close" });
    // if (searchBoxToggle) dispatch({ type: "category-box/close" });
    // v1
    if (categoryBoxToggle) dispatch(closeSearchBox());
    if (searchBoxToggle) dispatch(closeCategoryBox());
  }, [categoryBoxToggle, searchBoxToggle, dispatch]);

  return (
    <PaddingContainer className="absolute top-[50%] right-0 left-0 z-0">
      <div className="flex w-full flex-row-reverse items-center justify-between gap-1 bg-white rounded-md relative z-20 px-2.5 py-5 drop-shadow-md">
        <div className="flex gap-1 flex-row-reverse h-full">
          <Button
            onClick={() => {
              // dispatch({ type: "search-box-/toggle" });
              dispatch(toggleSearchBox())
            }}
            className="text-sm bg-gradient-custom"
            title="جستجو در وبلاگ"
          >
            <span className="hidden md:block"> جست و جو در وبلاگ</span>
            <Search size={16} />
          </Button>
          {searchQuery && (
            <Button
              className="text-sm bg-gradient-custom"
              title="پاک کردن جستجو"
              // onClick={() => dispatch({ type: "search-query-clear" })}
              onClick={() => dispatch(clearSearchQuery())}
            >
              <Trash2 size={16} />
            </Button>
          )}
        </div>
        <Button
          title="دسته بندی"
          onClick={() => {
            // dispatch({ type: "category-box/toggle" });
            dispatch(toggleCategoryBox());
          }}
          className="text-sm bg-gradient-custom"
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

export default BlogHeader;
