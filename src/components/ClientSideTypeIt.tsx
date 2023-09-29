"use client";
import React from "react";
import TypeIt from "typeit-react";

interface ClientSideTypeItProps {
  children: string;
  options?: {};
  className?: string;
}
const ClientSideTypeIt = ({
  children,
  options = {},
  className = "",
}: ClientSideTypeItProps) => {
  return (
    <p className={className}>
      <TypeIt options={options}>{children}</TypeIt>
    </p>
  );
};

export default ClientSideTypeIt;
