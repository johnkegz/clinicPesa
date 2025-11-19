import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'white' | 'gray' | 'lightGray' | 'blue' | 'black' | 'primary';
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
}

const Text: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'base',
  weight = 'normal',
  color = 'black',
  lineHeight = 'normal',
}) => {
  const sizeClasses = {
    '2xs': 'text-[10px]',
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const colorClasses = {
    primary: 'text-primary',
    white: 'text-white',
    gray: 'text-gray-500',
    lightGray: 'text-gray-400',
    blue: 'text-blue-600',
    black: 'text-gray-900',
  };

  const lineHeightClasses = {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  };

  return (
    <p
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${lineHeightClasses[lineHeight]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;

