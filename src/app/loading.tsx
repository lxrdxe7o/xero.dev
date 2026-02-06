'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      gap: '1.5rem',
    }}>
      <motion.div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: 0.6,
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        RETRIEVING FILES...
      </motion.div>

      {/* Progress bar */}
      <div style={{
        width: '200px',
        height: '2px',
        background: 'var(--grid-line)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'var(--accent-red)',
            width: '40%',
          }}
          animate={{ x: ['-40%', '250%'] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.1em',
        opacity: 0.3,
        textTransform: 'uppercase',
      }}>
        ACCESSING ARCHIVE
      </div>
    </div>
  );
}
