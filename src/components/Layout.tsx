"use client";

import Sidebar from './Sidebar';
import ThemeSwitcher from './ThemeSwitcher';
import ScrollProgress from './ScrollProgress';
import { ThemeProvider } from '@/contexts/ThemeContext';
import SkipLink from './SkipLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <ThemeProvider>
        <ScrollProgress aria-hidden="true" />
        <Sidebar />
        <ThemeSwitcher />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </ThemeProvider>
    </>
  );
} 