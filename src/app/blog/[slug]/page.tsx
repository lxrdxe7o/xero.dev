import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostParams {
  slug: string;
}

export default function BlogPost({ params }: { params: Promise<BlogPostParams> }) {
  const { slug } = React.use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container" style={{ padding: 'var(--space-3xl) var(--space-lg)', maxWidth: '800px' }}>
      <header style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
         <div className="tag" style={{ marginBottom: 'var(--space-md)' }}>{post.tags[0]}</div>
         <h1 style={{ fontSize: 'var(--fs-5xl)', marginBottom: 'var(--space-md)' }}>{post.title}</h1>
         <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>
            <time>{post.date}</time> • {post.readingTime} min read
         </div>
      </header>
      
      <div className="prose">
        <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
      </div>
      
      <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-color)' }}>
        <a href="/blog" className="btn btn-outline">← Back to Blog</a>
      </div>
    </article>
  );
}
