"use client";
import React from "react";
import TypeIt from "typeit-react";

interface ClientSideTypeItProps {
  options?: any;
  className?: string;
}
const ClientSideTypeIt = ({
  options = {},
  className = "",
}: ClientSideTypeItProps) => {
  return (
    <div className={className}>
      <TypeIt options={options}></TypeIt>
    </div>
  );
};

export default ClientSideTypeIt;
