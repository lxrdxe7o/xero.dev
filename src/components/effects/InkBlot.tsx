'use client';

import styles from './InkBlot.module.css';

const blobs = [
  {
    className: styles.blob1,
    d1: 'M40,80 Q65,10 80,40 Q95,70 60,90 Q25,110 20,70 Z',
    d2: 'M35,75 Q70,15 85,45 Q100,75 55,95 Q20,115 15,65 Z',
  },
  {
    className: styles.blob2,
    d1: 'M50,20 Q80,30 70,60 Q60,90 30,80 Q0,70 20,40 Z',
    d2: 'M45,25 Q85,25 75,55 Q65,85 35,85 Q5,75 25,35 Z',
  },
  {
    className: styles.blob3,
    d1: 'M30,50 Q50,10 70,30 Q90,50 70,70 Q50,90 30,70 Q10,50 30,50 Z',
    d2: 'M35,45 Q55,5 75,25 Q95,55 65,75 Q45,95 25,75 Q5,45 35,45 Z',
  },
];

export default function InkBlot() {
  return (
    <div className={styles.container}>
      {blobs.map((blob, i) => (
        <svg
          key={i}
          className={blob.className}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={blob.d1} fill="currentColor">
            <animate
              attributeName="d"
              values={`${blob.d1};${blob.d2};${blob.d1}`}
              dur={`${20 + i * 10}s`}
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ))}
    </div>
  );
}
