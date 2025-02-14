"use client";

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div 
      className="flex gap-2 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full bg-[rgb(var(--primary))]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
} 