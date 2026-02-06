'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './RedactedText.module.css';

interface RedactedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function RedactedText({ children, className = '' }: RedactedTextProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      className={`${styles.wrapper} ${className}`}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
    >
      <span className={styles.text}>{children}</span>
      <AnimatePresence>
        {!revealed && (
          <motion.span
            className={styles.bar}
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {revealed && (
          <motion.span
            className={styles.highlight}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>
    </span>
  );
}
