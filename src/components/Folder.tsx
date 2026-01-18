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
          max-width: 800px; /* Default max width, can be overridden */
          margin: 0 auto;
        }

        .folder-tab {
          width: 40%;
          min-width: 150px;
          background: #e6dcc8;       /* Cream color */
          border: 1px solid #c9bfa8;
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
          color: #1a1815;            /* Dark warm text for visibility */
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: bold;
        }

        .folder-body {
          background: #e6dcc8;       /* Cream color */
          border: 1px solid #c9bfa8;
          border-radius: 0 6px 6px 6px;
          padding: var(--space-md);
          position: relative;
          min-height: 200px;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            rgba(0,0,0,0.05) 20px
          );
        }

        .folder-content {
          background: var(--paper-light);
          border: 1px solid #eee;
          padding: var(--space-xl); /* Increased padding for content */
          height: 100%;
          min-height: 300px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: relative; 
          overflow: hidden;
        }

        /* Dark Mode Overrides - Warm Archival */
        :global([data-theme="dark"]) .folder-tab {
          background: #8a7a5e;       /* Muted warm tan */
          border-color: #6a5a42;     /* Darker warm border */
        }

        :global([data-theme="dark"]) .tab-text {
          color: #1a1815;            /* Dark warm text */
        }

        :global([data-theme="dark"]) .folder-body {
          background: #9a8a6e;       /* Warm tan folder body */
          border-color: #6a5a42;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            rgba(0,0,0,0.1) 20px
          );
        }

        :global([data-theme="dark"]) .folder-content {
          background: var(--paper-light);  /* Uses the warm dark paper */
          border-color: #3a332a;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}
