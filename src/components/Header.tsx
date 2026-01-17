'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsTicker from './NewsTicker';
import styles from './Header.module.css';

const navCategories = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
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
    <>
      <NewsTicker />
      <header className={styles.header}>
        {/* Left Corner Info - Hidden on Mobile */}
        <div className={`${styles.cornerInfo} ${styles.leftCorner}`}>
          <p className={styles.established}>Est. 2025</p>
          <p className={styles.location}>Dhaka, BD</p>
        </div>

        {/* Main Masthead */}
        <div className={styles.masthead}>
          <Link href="/" className={styles.titleLink}>
            <h1 className={styles.title}>
              The Creative
              <span className={styles.subtitle}>Journal Feed</span>
            </h1>
          </Link>
        </div>

        {/* Right Corner Info - Hidden on Mobile */}
        <div className={`${styles.cornerInfo} ${styles.rightCorner}`}>
          <p className={styles.volume}>Vol. 12</p>
          <p className={styles.issue}>Issue 04</p>
          <p className={styles.price}>€ 4.50</p>
        </div>

        {/* Theme Toggle */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="material-icons">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </header>

      {/* Navigation Bar */}
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navInner}>
          {navCategories.map((cat, index) => (
            <span key={cat.label}>
              <Link href={cat.href} className={styles.navLink}>
                {cat.label}
              </Link>
              {index < navCategories.length - 1 && <span className={styles.navDot}>•</span>}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
