'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './BlogCard.module.css';
import { BlogPost } from '@/lib/blogData';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { slug, title, excerpt, date, tags } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.categoryDot}></span>
            <span className={styles.category}>
              {tags && tags[0] ? tags[0] : 'Article'}
            </span>
          </div>

          <Link href={`/lab/${slug}`}>
            <h3 className={styles.title}>{title}</h3>
          </Link>

          <p className={styles.excerpt}>{excerpt}</p>

          <div className={styles.footer}>
            <span className={styles.date}>{formattedDate}</span>
            <Link href={`/lab/${slug}`} className={styles.readMore}>
              →
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        className={styles.scanline}
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.article>
  );
}
