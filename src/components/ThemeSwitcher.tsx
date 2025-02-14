"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useSound } from '@/hooks/useSound';

const iconVariants = {
  initial: { scale: 0.6, rotate: -90 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  exit: { 
    scale: 0.6, 
    rotate: 90,
    transition: {
      duration: 0.2
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { playClick } = useSound();

  return (
    <motion.button
      className="fixed top-4 right-4 p-2 rounded-full 
                bg-[rgb(var(--card-background))] text-[rgb(var(--foreground))]
                border border-[rgb(var(--foreground))]/10 shadow-lg
                hover:shadow-xl z-50"
      onClick={() => {
        toggleTheme();
        playClick();
      }}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        variants={iconVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-6 h-6 flex items-center justify-center"
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.div>
    </motion.button>
  );
} 