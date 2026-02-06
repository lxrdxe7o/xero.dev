'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type StampProps = {
  text?: string;
  type?: 'approved' | 'confidential' | 'top-secret' | 'draft';
  className?: string;
  angle?: number;
  animated?: boolean;
};

export default function Stamp({
  text = 'APPROVED',
  type = 'approved',
  className = '',
  angle = -15,
  animated = false,
}: StampProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const colors = {
    approved: '#cc3333',
    confidential: '#cc3333',
    'top-secret': '#cc3333',
    draft: '#4a4a4a',
  };

  const labels = {
    approved: 'APPROVED',
    confidential: 'CONFIDENTIAL',
    'top-secret': 'TOP SECRET',
    draft: 'DRAFT',
  };

  const finalLabel = text || labels[type];
  const color = colors[type];

  const stampContent = (
    <div className="stamp-inner" style={{ borderColor: color }}>
      {finalLabel}
    </div>
  );

  return (
    <div ref={ref} className={`stamp-outer ${className}`}>
      {animated ? (
        <motion.div
          className="stamp-container"
          style={{
            borderColor: color,
            color: color,
          }}
          initial={{ scale: 3, opacity: 0, rotate: angle - 10 }}
          animate={
            isInView
              ? { scale: 1, opacity: 0.8, rotate: angle }
              : { scale: 3, opacity: 0, rotate: angle - 10 }
          }
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 15,
            mass: 0.6,
          }}
        >
          {stampContent}
        </motion.div>
      ) : (
        <div
          className="stamp-container"
          style={{
            transform: `rotate(${angle}deg)`,
            borderColor: color,
            color: color,
          }}
        >
          {stampContent}
        </div>
      )}

      {animated && isInView && (
        <motion.div
          className="impact-ring"
          style={{ borderColor: color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
        />
      )}

      <style jsx>{`
        .stamp-outer {
          position: relative;
          display: inline-block;
        }

        .impact-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin-left: -20px;
          margin-top: -20px;
          border: 2px solid;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      <style jsx global>{`
        .stamp-container {
          display: inline-block;
          padding: 4px;
          border: 3px solid;
          border-radius: 4px;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.2rem;
          line-height: 1;
          opacity: 0.8;
          mix-blend-mode: multiply;
          mask-image: url("data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3Crect width='100%25' height='100%25' fill='black' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
          mask-size: 100% 100%;
        }

        .stamp-inner {
          border: 1px solid;
          padding: 4px 8px;
          border-radius: 2px;
          text-transform: uppercase;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
