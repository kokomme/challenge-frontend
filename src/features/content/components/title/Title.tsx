import React from 'react';
import './Title.css';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return <h1 className={`content-title ${className}`}>{children}</h1>;
};

export default Title;
