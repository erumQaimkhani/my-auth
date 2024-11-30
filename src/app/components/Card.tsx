import React from 'react'
type CardProps = {
    title: string;
    description: string;
    children?: React.ReactNode; // Optional for custom content
  };
  
  const Card: React.FC<CardProps> = ({ title, description, children }) => {
    return (
      <div className="border rounded shadow-md p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        {children && <div className="mt-2">{children}</div>}
      </div>
    );
  };
  
  export default Card;