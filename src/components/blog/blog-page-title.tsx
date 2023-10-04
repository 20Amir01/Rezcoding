"use client";

import { useAllCategories } from "@/hooks/useClientCustoms";
import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "../../../typing";

const BlogPageTitle = () => {
  const { data: categories } = useAllCategories();
  const searchParams = useSearchParams();
  return (
    <>
      {searchParams?.has("category") ? (
        <h1>
          {categories?.filter(
            (item: Category) => item.title === searchParams.get("category")
          ).length > 0 && searchParams.get("category")}
        </h1>
      ) : (
        <h1>تمامی مقالات</h1>
      )}
    </>
  );
};

export default BlogPageTitle;
