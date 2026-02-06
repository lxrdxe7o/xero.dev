'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import TextScramble from './effects/TextScramble';
import { useMagnetic } from '@/hooks/useMagnetic';
import styles from './Footer.module.css';

function MagneticButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const magnetic = useMagnetic(0.3);
  return (
    <motion.a
      ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      className={className}
      style={magnetic.style}
      {...magnetic.handlers}
    >
      {children}
    </motion.a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.top}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              <TextScramble text="Something Together?" trigger="inView" speed={30} />
            </h2>
            <MagneticButton href="mailto:hello@xero.dev" className={styles.emailBtn}>
              Email Me
            </MagneticButton>
          </div>

          <motion.div
            className={styles.links}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.copyright}>
            &copy; {currentYear} The Creative Journal. All rights reserved.
          </p>
          <p className={styles.locations}>
            Dhaka, BD
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
