interface BlueCircleProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function BlueCircle({ size = 'medium', className = '' }: BlueCircleProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div 
      className={`${sizeClasses[size]} bg-blue-500 rounded-full ${className}`}
      role="img"
      aria-label="Blue circle"
    />
  );
}
