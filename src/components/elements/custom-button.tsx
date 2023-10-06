"use client";
import React from "react";
import styled from "styled-components";
interface StyledButtonProps {
  color: string;
  bgColor: string;
}
const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  gap: 2.5px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
`;
interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
}
const CustomButton = ({
  children,
  bgColor = "",
  color = "#FFF",
  title = "",
  className = "",
  onClick: clickHandler,
}: ButtonProps) => {
  return (
    <>
      {clickHandler ? (
        <StyledButton
          className={className}
          onClick={clickHandler}
          title={title}
          bgColor={bgColor}
          color={color}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton
          className={className}
          title={title}
          bgColor={bgColor}
          color={color}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default CustomButton;
