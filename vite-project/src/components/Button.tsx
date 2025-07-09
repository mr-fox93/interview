import React from 'react';
import { css } from '@emotion/react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={css`
      color: white; 
      background-color: purple; 
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
      max-width: 200px;
      cursor: pointer;
      &:hover {
        background-color: darkmagenta;
      }
    `} {...props}>{children}</button>
  );
}

export default Button;