'use client';

import React from 'react';
import Stamp from './Stamp';

type FolderCardProps = {
  name: string;
  description: string;
  link: string;
  index: number;
};

export default function FolderCard({ name, description, link, index }: FolderCardProps) {
  // Randomize stamp type based on index
  const stamps = ['approved', 'confidential', 'top-secret'];
  const stampType = stamps[index % stamps.length] as 'approved' | 'confidential' | 'top-secret';
  // Deterministic randomness based on index to ensure SSR/Client match
  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  };

  const hasStamp = pseudoRandom(index) > 0.3; 
  const angle = -10 + pseudoRandom(index + 100) * 20;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="folder-link">
      <div className="folder-wrapper fade-rotate-in " style={{ animationDelay: `${index * 0.1}s` }}>
        {/* Folder Tab */}
        <div className="folder-tab">
           <span className="tab-text">PRJ-{String(index + 80).padStart(3, '0')}</span>
        </div>
        
        {/* Main Folder Body */}
        <div className="folder-body">
          <div className="folder-content">
            <h3 className="project-title font-mono">{name}</h3>
            
            <div className="schematic-placeholder">
              {/* Decorative schematic lines */}
              <svg width="100%" height="60" viewBox="0 0 200 60" className="schematic-svg">
                <path d="M10,10 L190,10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
                <rect x="20" y="20" width="40" height="30" stroke="currentColor" fill="none" opacity="0.7" />
                <rect x="80" y="20" width="40" height="30" stroke="currentColor" fill="none" opacity="0.7" />
                 <path d="M60,35 L80,35" stroke="currentColor" strokeWidth="1" />
                 <circle cx="150" cy="35" r="10" stroke="currentColor" fill="none" />
              </svg>
            </div>

            <p className="project-desc font-mono">{description}</p>
            
            {hasStamp && (
               <div className="stamp-wrapper">
                 <Stamp type={stampType} angle={angle} />
               </div>
            )}
            
            <div className="metadata">
               <span>CLASSIFIED</span>
               <span>// REV.0{index % 5}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .folder-link {
          display: block;
          text-decoration: none;
          color: inherit;
          margin-bottom: var(--space-lg);
          border: none !important; /* Override global a border */
        }

        .folder-wrapper {
          position: relative;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .folder-link:hover .folder-wrapper {
          transform: translateY(-5px) rotate(-1deg);
          filter: drop-shadow(0 12px 12px rgba(0,0,0,0.15));
        }

        .folder-tab {
          width: 40%;
          background: #e6e4dc;
          border: 1px solid #c0c0b8;
          border-bottom: none;
          border-radius: 6px 6px 0 0;
          padding: 4px 12px;
          margin-bottom: -1px;
          position: relative;
          z-index: 1;
        }

        .tab-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--ink-dim);
          letter-spacing: 0.1em;
        }

        .folder-body {
          background: #f0f0eb;
          border: 1px solid #c0c0b8;
          border-radius: 0 6px 6px 6px;
          padding: var(--space-md);
          position: relative;
          min-height: 200px;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            #e0e0d9 20px
          );
        }

        .folder-content {
          background: var(--paper-light);
          border: 1px solid #eee;
          padding: var(--space-md);
          height: 100%;
          min-height: 180px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: relative; 
          overflow: hidden;
        }

        .project-title {
          font-size: 1.2rem;
          margin-bottom: var(--space-sm);
          border-bottom: 2px solid var(--ink);
          padding-bottom: 4px;
        }

        .project-desc {
          font-size: 0.8rem;
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: var(--space-lg);
          flex-grow: 1;
        }

        .schematic-placeholder {
          color: var(--ink-dim);
          margin-bottom: var(--space-sm);
          opacity: 0.4;
        }

        .stamp-wrapper {
          position: absolute;
          bottom: 40px;
          right: 20px;
          transform: rotate(-15deg);
          pointer-events: none;
        }

        .metadata {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--ink-dim);
          margin-top: auto;
          border-top: 1px dashed var(--ink-dim);
          padding-top: 4px;
        }
      `}</style>
    </a>
  );
}
