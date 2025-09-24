'use client';

import { useState } from 'react';

interface BlueTriangleProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function BlueTriangle({ size = 'medium', className = '' }: BlueTriangleProps) {
  const [rotation, setRotation] = useState(0);
  
  const sizeClasses = {
    small: 'w-0 h-0',
    medium: 'w-0 h-0',
    large: 'w-0 h-0'
  };

  const borderClasses = {
    small: 'border-l-[20px] border-r-[20px] border-b-[35px]',
    medium: 'border-l-[30px] border-r-[30px] border-b-[52px]',
    large: 'border-l-[40px] border-r-[40px] border-b-[70px]'
  };

  const handleClick = () => {
    setRotation(prev => prev + 90);
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${borderClasses[size]} border-l-transparent border-r-transparent border-b-blue-500 ${className} cursor-pointer transition-transform duration-300`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleClick}
      role="button"
      aria-label="Clickable blue triangle"
    />
  );
}
