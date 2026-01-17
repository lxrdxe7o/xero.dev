'use client';

import { useEffect, useRef } from 'react';
import styles from './NewsTicker.module.css';

const tickerItems = [
  "/// BREAKING: New Design System Launching Soon ///",
  "/// Interview with renowned typographer Sarah Kern ///",
  "/// The resurgence of brutalism in web design ///",
  "/// 2024 Design Trends Report Available Now ///",
];

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone items for seamless loop
    const items = ticker.innerHTML;
    ticker.innerHTML = items + items;
  }, []);

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker} ref={tickerRef}>
        {tickerItems.map((item, index) => (
          <span key={index} className={styles.tickerItem}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
