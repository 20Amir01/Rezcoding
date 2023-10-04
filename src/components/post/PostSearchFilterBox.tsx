"use client";
import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import { useAllCategories } from "@/hooks/useClientCustoms";
import { Category } from "../../../typing";
import { useRouter, useSearchParams } from "next/navigation";

const PostSearchFilterBox = () => {
  const { data: categories } = useAllCategories();
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    if (!selectedCategory) return router.push("/blog");
    router.push(`?category=${selectedCategory}`);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="text-black p-1 absolute top-[115%] w-full sm:w-auto right-0 justify-center">
      <div className="bg-white z-10 w-5 h-5 absolute -top-1.5 right-10 rotate-45" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="grid bg-white rounded-md drop-shadow-lg grid-cols-1 sm:grid-cols-2 p-5 gap-2"
      >
        <select
          onChange={handleCategoryChange}
          className="w-full bg-neutral-100 rounded-md drop-shadow-lg font-semibold"
        >
          <option
            title="تمام مقالات"
            value=""
            className="text-center text-black"
          >
            تمام مقالات
          </option>
          {categories?.map((category: Category) => (
            <>
              <option
                className="text-center text-black"
                title={category.title}
                key={category._id}
                value={category.title}
              >
                {category.title}
              </option>
            </>
          ))}
        </select>
        <div className="flex justify-center">
          <Button className="w-full">بزن بریم !</Button>
        </div>
      </form>
    </div>
  );
};

export default PostSearchFilterBox;
