import React, {  ReactNode } from "react";

interface ButtonsProps {
    children: ReactNode,
    rest: HTMLButtonElement
}

export const Buttons = ({ children, ...rest }: ButtonsProps) => {
  return <button {...rest}>{children}</button>;
};

