"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiUser, HiBriefcase, HiMenu, HiX, HiNewspaper } from 'react-icons/hi';
import { useGestures } from '@/hooks/useGestures';
import { useSound } from '@/hooks/useSound';

const menuItems = [
  { id: 1, title: 'Início', icon: <HiHome size={20} />, path: '/' },
  { id: 2, title: 'Sobre', icon: <HiUser size={20} />, path: '/about' },
  { id: 3, title: 'Portfólio', icon: <HiBriefcase size={20} />, path: '/portfolio' },
  { 
    id: 4, 
    title: 'Blog', 
    icon: <HiNewspaper size={20} />, 
    path: 'https://www.tabnews.com.br/Bassani/conteudos/1',
    external: true 
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { playClick } = useSound();

  const gestures = useGestures({
    onSwipeLeft: () => {
      if (isOpen) {
        setIsOpen(false);
        playClick();
      }
    },
    onSwipeRight: () => {
      if (!isOpen) {
        setIsOpen(true);
        playClick();
      }
    }
  });

  return (
    <>
      {/* Botão Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 
                 shadow-md hover:shadow-lg transition-shadow"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-30"
        />
      )}

      {/* Sidebar */}
      <motion.div
        {...gestures}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 
                 shadow-xl z-40 flex flex-col touch-pan-y"
      >
        <div className="p-8 flex-1">
          <div className="mt-8 space-y-4">
            {menuItems.map((item) => (
              item.external ? (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 
                           dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-blue-600">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 
                           dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-blue-600">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
} 