'use client';

import { useState } from 'react';

interface BlueSquareProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function BlueSquare({ size = 'medium', className = '' }: BlueSquareProps) {
  const [rotation, setRotation] = useState(0);
  
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const handleClick = () => {
    setRotation(prev => prev + 90);
  };

  return (
    <div 
      className={`${sizeClasses[size]} bg-blue-500 ${className} cursor-pointer transition-transform duration-300`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleClick}
      role="button"
      aria-label="Clickable blue square"
    />
  );
}
