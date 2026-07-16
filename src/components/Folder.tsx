'use client';

import React from 'react';

type FolderProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Folder({ title, children, className = '' }: FolderProps) {
  return (
    <div className={`folder-wrapper ${className}`}>
      {/* Folder Tab */}
      <div className="folder-tab">
         <span className="tab-text">{title}</span>
      </div>
      
      {/* Main Folder Body */}
      <div className="folder-body">
        <div className="folder-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .folder-wrapper {
          position: relative;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .folder-tab {
          width: 40%;
          min-width: 150px;
          background: var(--folder-tab-bg);
          border: 1px solid var(--folder-tab-border);
          border-bottom: none;
          border-radius: 6px 6px 0 0;
          padding: 8px 16px;
          margin-bottom: -1px;
          position: relative;
          z-index: 1;
        }

        .tab-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--folder-tab-text);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: bold;
        }

        .folder-body {
          background: var(--folder-body-bg);
          border: 1px solid var(--folder-body-border);
          border-radius: 0 6px 6px 6px;
          padding: var(--space-md);
          position: relative;
          min-height: 200px;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            var(--folder-ruled-line) 20px
          );
        }

        .folder-content {
          background: var(--folder-content-bg);
          border: 1px solid var(--folder-content-border);
          padding: var(--space-xl);
          height: 100%;
          min-height: 300px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: relative; 
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
