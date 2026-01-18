'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { id: '01', label: 'PROJECTS', path: '/' },
  { id: '02', label: 'ABOUT', path: '/about' },
  { id: '03', label: 'LAB', path: '/lab' },
  { id: '04', label: 'CONTACT', path: '/contact' },
];

import styles from './TabNavigation.module.css';

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
        return (
          <Link 
            key={tab.id} 
            href={tab.path}
            className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
          >
            {/* CSS Shape Background */}
            <div className={styles.tabBg}></div>

            <span className={styles.tabContent}>
              <span className={styles.tabId}>FILE NO. {tab.id} //</span> 
              <span className={styles.tabLabel}>{tab.label}</span>
            </span>
          </Link>
        );
      })}
      <div className={styles.tabFiller}></div>
      <button 
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </nav>
  );
}
