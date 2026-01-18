import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';
import { blogPosts } from '@/lib/blogData';

export const metadata = {
  title: 'Lab | xero.dev',
  description: 'Experiments, tutorials, and documentation of my dev journey.',
};

const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

export default function LabPage() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>🧪</span>
            <span className="gradient-text">Lab</span>
          </h1>
          <p className={styles.subtitle}>
            Experiments, tutorials, and documentation of my dev journey.
          </p>

          <div className={styles.tags}>
            <button className={`${styles.tagButton} ${styles.active}`}>
              All Posts
            </button>
            {allTags.map((tag) => (
              <button key={tag} className={styles.tagButton}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.posts}>
        <div className="container">
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

