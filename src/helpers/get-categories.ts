import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
const categoryQuery = groq` 
   *[_type=='category']{
    ...,
    author->,
    categories[]->}|order(createdAt desc)
  
`;
export default async function getCategories() {
  const categories = await client.fetch(categoryQuery);
  return categories;
}

// <div className="w-full h-auto py-2.5 flex justify-start">
// {categories.map((category: Category) => (
//   <CategoryCard value={category} key={category._id} />
// ))}
// </div>
