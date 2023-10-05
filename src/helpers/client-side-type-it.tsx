"use client";
import React from "react";
import TypeIt from "typeit-react";

interface ClientSideTypeItProps {
  children: React.ReactNode;
  options?: {};
  className?: string;
}
const ClientSideTypeIt = ({
  children,
  options = {},
  className = "",
}: ClientSideTypeItProps) => {
  return (
    <div className={className}>
      <TypeIt options={options}>{children}</TypeIt>
    </div>
  );
};

export default ClientSideTypeIt;
