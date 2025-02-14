"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSound } from '@/hooks/useSound';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { playHover } = useSound();

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHover();
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
              }
            }}
            exit={{ 
              opacity: 0, 
              y: 5, 
              scale: 0.95,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            className="absolute z-50 px-2 py-1 text-sm rounded-md 
                     bg-[rgb(var(--card-background))] text-[rgb(var(--foreground))]
                     border border-[rgb(var(--foreground))]/10 shadow-lg
                     backdrop-blur-sm
                     whitespace-nowrap left-1/2 -translate-x-1/2 bottom-full mb-2"
          >
            {text}
            <motion.div 
              className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 
                       border-solid border-t-[rgb(var(--card-background))]
                       border-t-8 border-x-transparent border-x-8 border-b-0"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                transition: {
                  delay: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 