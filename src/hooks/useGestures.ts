"use client";

import { useState, TouchEvent } from 'react';

interface GestureHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

export const useGestures = (handlers: GestureHandlers) => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = () => {
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

    if (isHorizontalSwipe) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0 && handlers.onSwipeLeft) {
          handlers.onSwipeLeft();
        } else if (deltaX < 0 && handlers.onSwipeRight) {
          handlers.onSwipeRight();
        }
      }
    } else {
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0 && handlers.onSwipeUp) {
          handlers.onSwipeUp();
        } else if (deltaY < 0 && handlers.onSwipeDown) {
          handlers.onSwipeDown();
        }
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}; 