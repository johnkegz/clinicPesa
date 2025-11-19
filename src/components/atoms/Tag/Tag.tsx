import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'green' | 'gray';
}

const Tag: React.FC<TagProps> = ({ children, className = '', variant = 'gray' }) => {
  const variantClasses = {
    green: 'bg-background-green-light text-white',
    gray: 'bg-background-gray text-primary',
  };

  return (
    <div className={`absolute top-0 left-0 
      inline-block px-2 py-0.5 text-xs font-bold rounded-tl-xl rounded-br-lg ${variantClasses[variant]} ${className}`}
      >
        {children}
      </div>
  );
};

export default Tag;

