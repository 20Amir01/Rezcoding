"use client";
import styled from "styled-components";
import React from "react";
interface DivImageContainerProps {
  imageURL: string;
}
const Div = styled.div<DivImageContainerProps>`
  @media (min-width: 768px) {
    background-attachment: fixed;
  }
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  /* background-position: right; */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  /* width: 100%; */
  /* height: auto; */
`;
const BannerDiv = styled.div<DivImageContainerProps>`
  @media (min-width: 768px) {
    height: auto;
    max-height: 100dvh;
    background-attachment: fixed;
  }
  position: relative;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  max-height: auto;
`;
interface BgFixedDivProps {
  imageURL: string;
  children?: React.ReactNode;
  className?:string;
  banner?: boolean;
}
const BackgroundFixedDiv = ({
  imageURL,
  children,
  className="",
  banner = false,
}: BgFixedDivProps) => {
  const url = imageURL;
  if (banner) return <BannerDiv imageURL={url}>{children}</BannerDiv>;
  return (
    <Div imageURL={url} className={className}>
      {children}
    </Div>
  );
};

export default BackgroundFixedDiv;
// https://i.ibb.co/wcY820P/Grey-Minimalist-Tips-Blog-Banner.png
// https://i.ibb.co/sts1JWD/logo-no-background.png
// https://i.ibb.co/ZKp6nbD/me.png
