"use client";
import Link from "next/link";
import React from "react";

const ClientSideRoute = ({
  children,
  route,
  className = "",
}: {
  children: React.ReactNode;
  route: string;
  className?: string;
}) => {
  return (
    <Link className={className} href={route}>
      {children}
    </Link>
  );
};

export default ClientSideRoute;
