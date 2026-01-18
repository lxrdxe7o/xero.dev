import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import MarkdownRenderer from '@/components/MarkdownRenderer';

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
    <article className="container" style={{ padding: 'var(--space-3xl) var(--space-lg)', maxWidth: '900px' }}>
      <header style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
         <div className="tag" style={{ marginBottom: 'var(--space-md)', display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid var(--sidebar-border)', fontFamily: 'var(--font-mono)' }}>{post.tags[0]}</div>
         <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-header)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{post.title}</h1>
         <div style={{ color: 'var(--ink-dim)', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
            <time>{post.date}</time> • {post.readingTime} min read
         </div>
      </header>
      
      <MarkdownRenderer content={post.content} />
      
      <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '2px solid var(--sidebar-border)' }}>
        <a href="/lab" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', border: '2px solid var(--sidebar-border)', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.2s ease' }}>← Back to Lab</a>
      </div>
    </article>
  );
}
