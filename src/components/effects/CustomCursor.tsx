'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'card'>('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      className={`${styles.cursor} ${styles[hoverType]}`}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div className={styles.crosshairH} />
      <div className={styles.crosshairV} />
      <div className={styles.dot} />
      {hoverType === 'card' && <span className={styles.label}>VIEW</span>}
    </motion.div>
  );
}
