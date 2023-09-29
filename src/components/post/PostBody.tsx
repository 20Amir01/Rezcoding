import React from "react";
import { Block } from "../../../typing";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "./RichTextComponents";
interface BodyProps {
  value: Block[];
}

const PostBody = ({ value }: BodyProps) => {
  return <section className="text-[125% text-neutral-700 text-justify leading-9 font-medium max-w-[800px] mx-auto w-full]"><PortableText value={value} components={RichTextComponents}/></section>
};

export default PostBody;