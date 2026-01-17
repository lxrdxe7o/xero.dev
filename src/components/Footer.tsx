'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`${styles.footer} slide-up-bounce`} ref={footerRef}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Something Together?</h2>
            <a href="mailto:hello@xero.dev" className={styles.emailBtn}>
              Email Me
            </a>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h5 className={styles.linkTitle}>Socials</h5>
              <ul className={styles.linkList}>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lxrdxe7o" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h5 className={styles.linkTitle}>Legal</h5>
              <ul className={styles.linkList}>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/impressum">Impressum</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} The Creative Journal. All rights reserved.
          </p>
          <p className={styles.locations}>
            Dhaka, BD
          </p>
        </div>
      </div>
    </footer>
  );
}
