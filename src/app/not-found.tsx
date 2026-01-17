import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.catWrapper}>
          <img 
            src="/images/cats/pixel_cat_confused_1768601376221.png"
            alt="Confused pixel cat"
            className={`${styles.cat} pixel-art`}
            width={250}
            height={250}
          />
          <div className={styles.catGlow}></div>
        </div>

        <h1 className={styles.title}>
          <span className={styles.errorCode}>404</span>
        </h1>
        
        <h2 className={styles.subtitle}>
          Page not found
        </h2>
        
        <p className={styles.message}>
          Looks like this page wandered off... just like a cat would.
        </p>

        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Go Home
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
