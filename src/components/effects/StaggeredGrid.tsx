'use client';

import { motion } from 'framer-motion';
import { useAnimation } from '@/components/providers/AnimationProvider';

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    rotateZ: -1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function StaggeredGrid({
  children,
  className = '',
  staggerDelay = 0.08,
}: StaggeredGridProps) {
  const { reducedMotion } = useAnimation();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}
