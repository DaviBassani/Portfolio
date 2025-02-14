"use client";

import { useEffect } from 'react';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function KonamiCode() {
  useEffect(() => {
    let keys: string[] = [];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys = keys.slice(-10);
      
      if (JSON.stringify(keys) === JSON.stringify(konamiCode)) {
        // Ativar modo especial
        document.documentElement.classList.add('konami-mode');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
} 