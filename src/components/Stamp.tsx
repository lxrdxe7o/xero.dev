'use client';

import React from 'react';

type StampProps = {
  text?: string;
  type?: 'approved' | 'confidential' | 'top-secret' | 'draft';
  className?: string;
  angle?: number;
};

export default function Stamp({ 
  text = 'APPROVED', 
  type = 'approved', 
  className = '',
  angle = -15
}: StampProps) {
  
  const colors = {
    approved: '#cc3333',
    confidential: '#cc3333',
    'top-secret': '#cc3333',
    draft: '#4a4a4a',
  };

  const labels = {
    approved: 'APPROVED',
    confidential: 'CONFIDENTIAL',
    'top-secret': 'TOP SECRET',
    draft: 'DRAFT',
  };

  const finalLabel = text || labels[type];
  const color = colors[type];

  return (
    <div 
      className={`stamp-container ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        borderColor: color,
        color: color,
      }}
    >
      <div className="stamp-inner" style={{ borderColor: color }}>
        {finalLabel}
      </div>

      <style jsx>{`
        .stamp-container {
          display: inline-block;
          padding: 4px;
          border: 3px solid;
          border-radius: 4px;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.2rem;
          line-height: 1;
          opacity: 0.8;
          mix-blend-mode: multiply;
          mask-image: url("data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3Crect width='100%25' height='100%25' fill='black' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
          mask-size: 100% 100%;
        }

        .stamp-inner {
          border: 1px solid;
          padding: 4px 8px;
          border-radius: 2px;
          text-transform: uppercase;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
