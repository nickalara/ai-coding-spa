'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // All pages use the same slide-from-right effect
  const variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  };

  // Previous code with different transitions per page (commented for future reference):
  /*
  const getTransitionVariant = () => {
    if (pathname === '/') {
      // Home page - slide up from bottom
      return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 }
      };
    } else if (pathname === '/contact') {
      // Contact page - fade in with slight scale
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 }
      };
    } else if (pathname === '/about') {
      // About page - slide from right
      return {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 }
      };
    } else {
      // Default transition - slide from left
      return {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 30 }
      };
    }
  };
  const variants = getTransitionVariant();
  */

  return (
    <motion.div
      key={pathname}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
    >
      {children}
    </motion.div>
  );
}
