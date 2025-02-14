"use client";

import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

export default function ScrollIndicator() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-section');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      onClick={scrollToForm}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer
                hover:opacity-100 transition-opacity z-20 pointer-events-auto"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <HiChevronDown 
        size={40} 
        className="text-[rgb(var(--primary))] opacity-80 hover:opacity-100 
                   transition-opacity"
      />
    </motion.div>
  );
} 