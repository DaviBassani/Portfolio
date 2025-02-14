"use client";

import { useState, useEffect } from 'react';

export const useFocusMode = () => {
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'f') {
        setIsFocusMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return isFocusMode;
}; 