'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './BlogCard.module.css';

import { BlogPost } from '@/lib/blogData';

interface BlogCardProps {
  post: BlogPost & { coverImage?: string };
  animationType?: string;
  index?: number;
}

export default function BlogCard({ post, animationType = 'pop-in', index = 0 }: BlogCardProps) {
  const { slug, title, excerpt, date, tags, coverImage, readingTime } = post;
  const cardRef = useRef(null);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay based on index for staggered effect
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article 
      className={`${styles.card} ${animationType}`} 
      ref={cardRef}
    >
      <div className={styles.layout}>
        {coverImage && (
          <Link href={`/blog/${slug}`} className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src={coverImage} 
                alt={title}
                className={styles.image}
              />
            </div>
          </Link>
        )}
        
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.categoryDot}></span>
            <span className={styles.category}>
              {tags && tags[0] ? tags[0] : 'Article'}
            </span>
          </div>

          <Link href={`/blog/${slug}`}>
            <h3 className={styles.title}>{title}</h3>
          </Link>

          <p className={styles.excerpt}>{excerpt}</p>

          <div className={styles.footer}>
            <span className={styles.date}>{formattedDate}</span>
            <Link href={`/blog/${slug}`} className={styles.readMore}>
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
