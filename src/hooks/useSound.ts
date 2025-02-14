"use client";

export const useSound = () => {
  const playHover = () => {
    const audio = new Audio('/sounds/hover.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  const playClick = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.15;
    audio.play().catch(() => {});
  };

  const playSuccess = () => {
    const audio = new Audio('/sounds/success.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return { playHover, playClick, playSuccess };
}; 