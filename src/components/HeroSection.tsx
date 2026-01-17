'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Left Column - Content */}
      <div className={`${styles.content} slide-from-left`} ref={leftRef}>
        <span className={styles.featureTag}>Dev Blog</span>
        
        <h2 className={styles.headline}>
          xero<span className={styles.cursor}>_</span>
          <span className={styles.headlineAccent}>.dev</span>
        </h2>

        <p className={styles.excerpt}>
          <span className={styles.dropCap}>H</span>ey! I'm xero, a Linux enthusiast 
          from Dhaka, Bangladesh. I build things, break things, and document my 
          learning journey along the way. Welcome to my corner of the internet.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.locationTag}>
            <span className="material-icons" style={{ fontSize: '1rem' }}>location_on</span>
            Dhaka, Bangladesh
          </span>
          <span className={styles.locationTag}>
            <span className="material-icons" style={{ fontSize: '1rem' }}>code</span>
            Linux Enthusiast
          </span>
        </div>

        <div className={styles.authorRow}>
          <div className={styles.authorInfo}>
            <span className={styles.authorLabel}>Focus Areas</span>
            <span className={styles.authorName}>Systems • TUIs • Web</span>
          </div>
          <Link href="/blog" className={styles.readBtn}>
            Read the Blog
          </Link>
        </div>

        {/* Decorative Circle */}
        <div className={styles.decorCircle}>
          <div className={styles.decorCircleInner}></div>
        </div>
      </div>

      {/* Right Column - Image/Terminal */}
      <div className={`${styles.imageWrapper} slide-from-right`} ref={rightRef}>
        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalDot} style={{ background: '#ff5f56' }}></span>
            <span className={styles.terminalDot} style={{ background: '#ffbd2e' }}></span>
            <span className={styles.terminalDot} style={{ background: '#27ca3e' }}></span>
            <span className={styles.terminalTitle}>~/xero</span>
          </div>
          <div className={styles.terminalBody}>
            <p><span className={styles.prompt}>$</span> whoami</p>
            <p className={styles.output}>xero</p>
            <p><span className={styles.prompt}>$</span> cat interests.txt</p>
            <p className={styles.output}>Rust, NeoVim, Linux, TUIs, Systems</p>
            <p><span className={styles.prompt}>$</span> ls projects/</p>
            <p className={styles.output}>DeadDrop/ hachi/ KrakenVim/ xero-shell/</p>
            <p><span className={styles.prompt}>$</span> echo $CURRENTLY_LEARNING</p>
            <p className={styles.output}>Systems programming with Rust</p>
            <p><span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span></p>
          </div>
        </div>
        <div className={styles.imageCaption}>
          <p>Fig 1. The terminal is home.</p>
        </div>
      </div>
    </section>
  );
}
