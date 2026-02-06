'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './ScrollProgressBar.module.css';

export default function ScrollProgressBar() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area');
    if (!scrollArea) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) {
        setVisible(false);
        return;
      }
      setVisible(scrollTop > 10);
      progress.set(scrollTop / maxScroll);
    };

    scrollArea.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollArea.removeEventListener('scroll', handleScroll);
  }, [progress]);

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX, opacity: visible ? 1 : 0 }}
    />
  );
}
