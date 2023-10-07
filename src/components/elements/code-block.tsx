"use client";
import { Copy } from "lucide-react";
import React from "react";
const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  // function copyText(entryText: any) {
  //   navigator.clipboard.writeText(entryText);
  // }
  return (
    <code
      dir="ltr"
      className="w-full flex-col overflow-x-auto flex-nowrap max-w-md sm:max-w-none mx-auto bg-neutral-900 flex justify-start text-green-500 leading-10 h-auto rounded-lg my-4 overflow-hidden"
    >
      {/* <code className="w-full  border-b-2 px-3 py-1 border-neutral-800 flex items-center justify-end">
        <button title="copy to clipboard" className="hover:text-neutral-500" onClick={() => copyText(children?.toString().replaceAll(',','').replaceAll('[object Object]',''))}>
          <Copy size={18}/>
        </button>
      </code> */}
      <code className="p-[1rem]">{children}</code>
    </code>
  );
};

export default CodeBlock;
