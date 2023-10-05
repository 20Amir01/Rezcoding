"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "../../../typing";
import getCategories from "@/helpers/get-categories";
import { useQuery } from "react-query";

const BlogPageTitle = ({ categories }: { categories: Category[] }) => {
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    initialData: categories,
  });
  const searchParams = useSearchParams();
  return (
    <>
      {searchParams?.has("category") ? (
        <p className="inline-flex gap-1 text-sm text-neutral-800">
          <span>دسته بندی ها</span>
          <span>/</span>
          <span>
            {categoriesData?.filter(
              (item: Category) => item.title === searchParams.get("category")
            ).length > 0 && searchParams.get("category")}
          </span>
        </p>
      ) : (
        <p className="text-sm text-neutral-800">تمامی مقالات</p>
      )}
    </>
  );
};

export default BlogPageTitle;