"use client";

import { motion } from 'framer-motion';

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "linear"
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }
};

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
}

export default function AnimatedIcon({ icon, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
      className={className}
    >
      {icon}
    </motion.div>
  );
} 