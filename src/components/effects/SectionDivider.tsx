'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './SectionDivider.module.css';

interface SectionDividerProps {
  variant?: 'line' | 'stamp' | 'tape';
  label?: string;
}

function LineDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={styles.lineWrapper}>
      <svg width="100%" height="2" className={styles.lineSvg}>
        <motion.line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="var(--ink)"
          strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function StampDivider({ label = 'DECLASSIFIED' }: { label?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={styles.stampWrapper}>
      <motion.div
        className={styles.stamp}
        initial={{ scale: 3, opacity: 0, rotate: -20 }}
        animate={isInView ? { scale: 1, opacity: 0.7, rotate: -6 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 15, mass: 0.8 }}
      >
        <div className={styles.stampInner}>{label}</div>
      </motion.div>
      <motion.div
        className={styles.impactRing}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 2.5, opacity: [0, 0.3, 0] } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
}

function TapeDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={styles.tapeWrapper}>
      <motion.div
        className={styles.tape}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}

export default function SectionDivider({ variant = 'line', label }: SectionDividerProps) {
  switch (variant) {
    case 'stamp':
      return <StampDivider label={label} />;
    case 'tape':
      return <TapeDivider />;
    default:
      return <LineDivider />;
  }
}
