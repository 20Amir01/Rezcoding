type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
export interface Post extends Base {
  at(arg0: number): unknown;
  reverse(): unknown;
  map: any;
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  //   add by me :
  //   layout: "horizontal" | "vertical";
}

interface Author {
  _createdAt:string;
  _id:string;
  _rev:string;
  _type:"author";
  _updatedAt: string;
  _id: string;
  image: {
    asset: Image;
    _type: "image";
    alt: string;
  };
  slug: Slug;
  name: string;
  bio:Block;
}

interface Image {
  _type: "image";
  alt: string;
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: string;
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Block {
  children: Span[];
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  _key: string;
  markDefs: any[];
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
interface Category extends Base {
  title: string;
  slug: Slug;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: "category";
  description: string;
  _id: string;
  color:string;
}
