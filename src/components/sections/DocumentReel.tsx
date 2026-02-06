'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './DocumentReel.module.css';

const exhibits = [
  {
    id: 'A',
    title: 'SYSTEMS & TOOLS',
    items: ['Arch Linux', 'Hyprland WM', 'Neovim', 'Tmux', 'Zsh'],
    classification: 'FIELD NOTES',
  },
  {
    id: 'B',
    title: 'LANGUAGES',
    items: ['TypeScript', 'Rust', 'Lua', 'Python', 'Go'],
    classification: 'DOSSIER',
  },
  {
    id: 'C',
    title: 'FRONTEND',
    items: ['React 19', 'Next.js 16', 'CSS Modules', 'Framer Motion', 'Three.js'],
    classification: 'INTEL REPORT',
  },
  {
    id: 'D',
    title: 'BACKEND & INFRA',
    items: ['Node.js', 'Docker', 'PostgreSQL', 'Redis', 'Nginx'],
    classification: 'OPERATIONS',
  },
  {
    id: 'E',
    title: 'INTERESTS',
    items: ['Creative Coding', 'Security Research', 'UI/UX Design', 'Open Source', 'System Design'],
    classification: 'PERSONAL FILE',
  },
];

export default function DocumentReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>EVIDENCE BOARD // SKILLS & EXPERTISE</span>
        <span className={styles.headerLine} />
      </div>

      <div className={styles.reelWrapper}>
        <motion.div className={styles.reel} style={{ x }}>
          {exhibits.map((exhibit, i) => (
            <motion.div
              key={exhibit.id}
              className={styles.card}
              style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * (1 + (i * 0.5))}deg` }}
              whileHover={{ scale: 1.04, rotate: '0deg', zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.pin} />
              <div className={styles.exhibitLabel}>EXHIBIT {exhibit.id}</div>
              <h3 className={styles.cardTitle}>{exhibit.title}</h3>
              <div className={styles.cardClassification}>{exhibit.classification}</div>
              <ul className={styles.cardList}>
                {exhibit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span>REF-{exhibit.id}00{i + 1}</span>
                <span>pg. {i + 1}/{exhibits.length}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Yarn connections */}
        <svg className={styles.yarn} viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path
            d="M0,10 Q150,2 300,10 T600,10 T900,10 T1200,10"
            fill="none"
            stroke="var(--accent-red)"
            strokeWidth="1"
            strokeDasharray="6 4"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
