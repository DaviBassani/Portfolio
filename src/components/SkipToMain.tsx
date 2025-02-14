"use client";

export default function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                bg-[rgb(var(--primary))] text-[rgb(var(--background))]
                px-4 py-2 rounded-lg z-50"
    >
      Pular para o conteúdo principal
    </a>
  );
} 