"use client";

import { useState, useEffect } from 'react';

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
};

const defaultThemes = {
  default: {
    primary: '59 130 246',
    secondary: '147 51 234',
    background: '255 255 255',
    foreground: '0 0 0'
  },
  ocean: {
    primary: '14 165 233',
    secondary: '79 70 229',
    background: '241 245 249',
    foreground: '30 41 59'
  },
  forest: {
    primary: '34 197 94',
    secondary: '16 185 129',
    background: '247 254 231',
    foreground: '20 83 45'
  }
};

export const useCustomTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof defaultThemes>('default');

  const applyTheme = (theme: ThemeColors) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  const changeTheme = (themeName: keyof typeof defaultThemes) => {
    setCurrentTheme(themeName);
    applyTheme(defaultThemes[themeName]);
  };

  return { currentTheme, changeTheme };
}; 