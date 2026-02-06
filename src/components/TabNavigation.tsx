'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';

const TABS = [
  { id: '01', label: 'PROJECTS', path: '/' },
  { id: '02', label: 'ABOUT', path: '/about' },
  { id: '03', label: 'LAB', path: '/lab' },
  { id: '04', label: 'CONTACT', path: '/contact' },
];

import styles from './TabNavigation.module.css';

function MagneticTab({ tab, isActive }: { tab: typeof TABS[0]; isActive: boolean }) {
  const magnetic = useMagnetic(0.25);

  return (
    <motion.div
      ref={magnetic.ref as React.RefObject<HTMLDivElement>}
      style={magnetic.style}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: Number(tab.id) * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...magnetic.handlers}
    >
      <Link
        href={tab.path}
        className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.tabBg}></div>
        <span className={styles.tabContent}>
          <span className={styles.tabId}>FILE NO. {tab.id} //</span>
          <span className={styles.tabLabel}>{tab.label}</span>
        </span>
      </Link>
    </motion.div>
  );
}

export default function TabNavigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`${styles.tabNav} hide-mobile`}>
      {TABS.map((tab) => {
        const isActive = pathname === tab.path;
        return <MagneticTab key={tab.id} tab={tab} isActive={isActive} />;
      })}
      <div className={styles.tabFiller}>
        <motion.button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: 15 }}
        >
          {theme === 'dark' ? '\u2600' : '\u263E'}
        </motion.button>
      </div>
    </nav>
  );
}
