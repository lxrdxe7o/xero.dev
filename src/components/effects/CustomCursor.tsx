'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'card'>('default');
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="link"]');
      const card = target.closest('[data-cursor="card"]');
      if (card) {
        setHoverType('card');
      } else if (interactive) {
        setHoverType('link');
      } else {
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${styles[hoverType]}`}
      style={{ willChange: 'transform' }}
    >
      <div className={styles.crosshairH} />
      <div className={styles.crosshairV} />
      <div className={styles.dot} />
      {hoverType === 'card' && <span className={styles.label}>VIEW</span>}
    </div>
  );
}
