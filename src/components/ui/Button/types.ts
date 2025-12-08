import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'normal' | 'icon';

export type ButtonSize = 'md' | 'sm';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}