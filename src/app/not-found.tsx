'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TextScramble from '@/components/effects/TextScramble';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.scanline} />

      <div className={styles.content}>
        {/* Classification header */}
        <motion.div
          className={styles.classHeader}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>CASE FILE // MISSING DOCUMENT</span>
        </motion.div>

        {/* Large 404 */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.errorCode}>
            <TextScramble text="404" trigger="mount" speed={40} delay={100} />
          </span>
        </motion.h1>

        {/* Stamp */}
        <motion.div
          className={styles.stampWrapper}
          initial={{ scale: 4, opacity: 0, rotate: -25 }}
          animate={{ scale: 1, opacity: 0.8, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.6 }}
        >
          <div className={styles.stamp}>
            <div className={styles.stampInner}>FILE MISSING</div>
          </div>
        </motion.div>

        {/* Cat in polaroid */}
        <motion.div
          className={styles.polaroid}
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <img
            src="/images/cats/pixel_cat_confused_1768601376221.png"
            alt="Confused pixel cat"
            className={`${styles.cat} pixel-art`}
            width={120}
            height={120}
          />
          <span className={styles.polaroidLabel}>LAST KNOWN PHOTO</span>
        </motion.div>

        {/* Terminal readout */}
        <motion.div
          className={styles.terminal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <p>
            <TextScramble
              text="SEARCHING ARCHIVES... FILE NOT FOUND // ACCESS DENIED"
              trigger="mount"
              speed={20}
              delay={1200}
            />
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link href="/" className={styles.btn}>
            RETURN TO ARCHIVES
          </Link>
          <Link href="/lab" className={styles.btnOutline}>
            SEARCH FILES
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
