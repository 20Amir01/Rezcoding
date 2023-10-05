import React from "react";
import { Block } from "../../../typing";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../../helpers/rich-text-components";
interface BodyProps {
  value: Block[];
}

const PostBody = ({ value }: BodyProps) => {
  return (
    <section className="sm:text-[125%] text-neutral-700 text-justify leading-10 font-medium max-w-2xl mx-auto w-full]">
      <PortableText value={value} components={RichTextComponents} />
    </section>
  );
};

export default PostBody;
