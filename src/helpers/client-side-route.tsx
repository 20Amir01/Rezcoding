"use client";
import Link from "next/link";
import React from "react";

interface ClientSideRouteProps{
    children: React.ReactNode;
  route: string;
  className?: string;
}
const ClientSideRoute = ({
  children,
  route,
  className = "",
}: ClientSideRouteProps) => {
  return (
    <Link className={className} href={route}>
      {children}
    </Link>
  );
};

export default ClientSideRoute;
