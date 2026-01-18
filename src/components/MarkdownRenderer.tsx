'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className={styles.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom heading with anchor links
          h1: ({ children, ...props }) => (
            <h1 className={styles.heading1} {...props}>{children}</h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className={styles.heading2} {...props}>{children}</h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className={styles.heading3} {...props}>{children}</h3>
          ),
          // Custom code blocks
          pre: ({ children, ...props }) => (
            <pre className={styles.codeBlock} {...props}>{children}</pre>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code className={styles.inlineCode} {...props}>{children}</code>
            ) : (
              <code className={className} {...props}>{children}</code>
            );
          },
          // Custom links
          a: ({ href, children, ...props }) => (
            <a 
              href={href} 
              className={styles.link}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props}
            >
              {children}
            </a>
          ),
          // Custom tables
          table: ({ children, ...props }) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table} {...props}>{children}</table>
            </div>
          ),
          // Custom blockquotes
          blockquote: ({ children, ...props }) => (
            <blockquote className={styles.blockquote} {...props}>{children}</blockquote>
          ),
          // Custom lists
          ul: ({ children, ...props }) => (
            <ul className={styles.unorderedList} {...props}>{children}</ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className={styles.orderedList} {...props}>{children}</ol>
          ),
          // Horizontal rule
          hr: (props) => (
            <hr className={styles.hr} {...props} />
          ),
          // Images with placeholder for screenshots
          img: ({ src, alt, ...props }) => (
            <figure className={styles.figure}>
              <img src={src} alt={alt} className={styles.image} {...props} />
              {alt && <figcaption className={styles.figcaption}>{alt}</figcaption>}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
