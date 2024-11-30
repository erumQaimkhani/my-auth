import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;