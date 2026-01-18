'use client';

import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [time, setTime] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
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

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const statsContent = (
    <>
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
        <div className="value">ARCH LINUX KERNEL 6.18</div>
      </div>

      <div className="stat-group">
        <label>TECH STACK:</label>
        <ul className="value-list">
          <li>TYPE SCRIPT</li>
          <li>NEXT.JS 16</li>
          <li>REACT 19</li>
          <li>CSS MODULES</li>
        </ul>
      </div>

      <div className="stat-group">
        <label>BUILD STATUS:</label>
        <div className="value status-stable">STABLE :: v3.0.2</div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="glitch-text">TECHNICAL STATS</h2>
        </div>
        
        <div className="sidebar-content font-mono text-sm">
          {statsContent}
        </div>
      </aside>

      {/* Mobile Collapsible - Shows only on mobile */}
      <div className="mobile-stats-wrapper">
        <button 
          className="sidebar-mobile-toggle"
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
          aria-controls="mobile-stats-content"
        >
          <span className="toggle-label">TECHNICAL STATS</span>
          <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </button>

        <div 
          id="mobile-stats-content"
          className={`sidebar-mobile-content ${isExpanded ? 'expanded' : ''}`}
        >
          <div className="sidebar-content font-mono text-sm">
            {statsContent}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop Sidebar */
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
          content: '• ';
          opacity: 0.5;
          margin-right: 0.5rem;
        }

        .status-stable {
          color: var(--accent-blue);
        }
        
        .status-stable::before {
          content: '● ';
        }

        /* Mobile Stats Wrapper - Hidden on desktop */
        .mobile-stats-wrapper {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          width: 100%;
          z-index: 100;
        }

        /* Mobile Toggle Button */
        .sidebar-mobile-toggle {
          display: flex;
          width: 100%;
          padding: var(--space-md);
          background: var(--sidebar-bg);
          border: none;
          border-bottom: 2px solid var(--sidebar-border);
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          justify-content: space-between;
          align-items: center;
          user-select: none;
          transition: background 0.2s ease;
          color: var(--ink);
          text-align: left;
        }

        .sidebar-mobile-toggle:hover {
          background: var(--paper);
        }

        .toggle-icon {
          transition: transform 0.3s ease;
          font-size: 0.75rem;
        }

        .toggle-icon.expanded {
          transform: rotate(180deg);
        }

        /* Mobile Content */
        .sidebar-mobile-content {
          max-height: 0;
          overflow: hidden;
          background: var(--sidebar-bg);
          transition: max-height 0.3s ease-out;
        }

        .sidebar-mobile-content.expanded {
          max-height: 400px;
          border-bottom: 2px solid var(--sidebar-border);
        }

        .sidebar-mobile-content .sidebar-content {
          padding: var(--space-md);
          gap: var(--space-md);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }

          .mobile-stats-wrapper {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
