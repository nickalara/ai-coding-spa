'use client';

import { useNavigation } from '../contexts/NavigationContext';

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  const { isOpen } = useNavigation();

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'scale-95 transform-gpu origin-center' 
          : 'scale-100'
      }`}
    >
      {children}
    </div>
  );
}
