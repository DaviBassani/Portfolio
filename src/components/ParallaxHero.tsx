"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGestures } from '@/hooks/useGestures';
import { useSound } from '@/hooks/useSound';

export default function ParallaxHero() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const { playClick } = useSound();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const gestures = useGestures({
    onSwipeUp: () => {
      const formSection = document.getElementById('contact-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        playClick();
      }
    },
    onSwipeDown: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playClick();
    }
  });

  const handleClick = () => {
    router.push('/about#timeline');
  };

  return (
    <div 
      {...gestures}
      className="relative h-screen overflow-hidden touch-pan-y"
    >
      {/* Elementos de fundo com parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))/20] to-[rgb(var(--secondary))/20] backdrop-blur-3xl" />
      </motion.div>

      {/* Conteúdo principal */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center"
        style={{ y: y2 }}
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] bg-clip-text text-transparent">
          Davi Bassani
        </h1>
        <p className="text-2xl mb-8">
          Desenvolvedor Full Stack
        </p>
        <motion.button
          onClick={handleClick}
          className="px-8 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] 
                   rounded-full hover:bg-[rgb(var(--accent))] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Conheça meu trabalho
        </motion.button>
      </motion.div>

      {/* Elementos decorativos */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y2 }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-[rgb(var(--primary))/10] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[rgb(var(--secondary))/10] rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
} 