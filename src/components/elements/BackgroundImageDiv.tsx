"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface DivProps {
  imageURL: string;
}
const Div = styled.div<DivProps>`
  background-image: url(${(props) => props.imageURL});
`;
interface BackgroundImageDivProps {
  url: string;
  children: ReactNode;
  className?: string;
}
const BackgroundImageDiv = ({
  children,
  url,
  className,
}: BackgroundImageDivProps) => {
  return (
    <Div className={className} imageURL={url}>
      {children}
    </Div>
  );
};

export default BackgroundImageDiv;
