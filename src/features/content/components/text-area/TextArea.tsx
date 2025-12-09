import React from 'react';
import './TextArea.css';

type TextAreaProps = {
  children?: React.ReactNode;
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ children, className = '' }) => {
  return <div className={`content-textarea ${className}`}>{children}</div>;
};

export default TextArea;
