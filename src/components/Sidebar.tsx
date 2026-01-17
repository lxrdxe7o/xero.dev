'use client';

import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [time, setTime] = useState<string>('');
  
  useEffect(() => {

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Dhaka',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }) + ' BST');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="sidebar hide-mobile">
      <div className="sidebar-header">
        <h2 className="glitch-text">TECHNICAL STATS</h2>
      </div>
      
      <div className="sidebar-content font-mono text-sm">
        <div className="stat-group">
          <label>CURRENT TIME:</label>
          <div className="value">{time || '00:00:00 BST'}</div>
        </div>

        <div className="stat-group">
          <label>LOCATION:</label>
          <div className="value">DHAKA, BD</div>
        </div>

        <div className="stat-group">
          <label>SYSTEM:</label>
          <div className="value">ARCH LINUX KERNEL 6.8</div>
        </div>

        <div className="stat-group">
          <label>TECH STACK:</label>
          <ul className="value-list">
            <li>TYPE SCRIPT</li>
            <li>NEXT.JS 14</li>
            <li>REACT</li>
            <li>TAILWIND (REMOVED)</li>
            <li>CSS MODULES</li>
          </ul>
        </div>

        <div className="stat-group">
          <label>BUILD STATUS:</label>
          <div className="value status-stable">STABLE :: v3.0.1</div>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          background: var(--sidebar-bg);
          border-right: 2px solid var(--sidebar-border);
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 0;
          flex-shrink: 0;
          z-index: 20;
          position: relative;
        }

        .sidebar-header {
          padding: var(--space-md);
          border-bottom: 2px solid var(--sidebar-border);
          background: var(--paper);
        }

        .sidebar-header h2 {
          font-size: 1rem;
          margin: 0;
          letter-spacing: 0.05em;
        }

        .sidebar-content {
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
          overflow-y: auto;
        }

        .stat-group label {
          display: block;
          opacity: 0.6;
          margin-bottom: var(--space-xs);
          font-size: 0.7rem;
        }

        .value {
          font-weight: 700;
        }

        .value-list {
          list-style: none;
          padding: 0;
        }

        .value-list li::before {
          content: '> ';
          opacity: 0.5;
        }

        .status-stable {
          color: var(--accent-blue);
        }
        
        .status-stable::before {
          content: '● ';
        }
      `}</style>
    </aside>
  );
}
