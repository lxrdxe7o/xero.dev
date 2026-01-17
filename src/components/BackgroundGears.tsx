'use client';

import React, { useEffect, useState } from 'react';

export default function BackgroundGears() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Only access sidebar element scroll if available, otherwise window
    const scrollContainer = document.querySelector('.scroll-area');
    
    const handleScroll = () => {
      if (scrollContainer) {
        setScrollY(scrollContainer.scrollTop);
      } else {
        setScrollY(window.scrollY);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="gears-container">
      {/* Large Gear - Bottom Right */}
      <div 
        className="gear gear-lg"
        style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
      >
        <GearSVG size={600} teeth={24} />
      </div>

      {/* Medium Gear - Connected to Large */}
      <div 
        className="gear gear-md"
        style={{ transform: `rotate(${-scrollY * 0.25}deg)` }}
      >
        <GearSVG size={300} teeth={16} />
      </div>

      {/* Small Gear - Top Left */}
      <div 
        className="gear gear-sm"
        style={{ transform: `rotate(${scrollY * 0.15}deg)` }}
      >
        <GearSVG size={200} teeth={12} />
      </div>

      <style jsx>{`
        .gears-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
          opacity: 0.08; /* Very subtle */
        }

        .gear {
          position: absolute;
          color: var(--ink);
          transition: transform 0.1s linear; /* Smooth visual update but reactive */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gear-lg {
          bottom: -150px;
          right: -150px;
          transform-origin: center;
        }

        .gear-md {
          bottom: 350px;
          right: 300px;
          transform-origin: center;
        }

        .gear-sm {
          top: -50px;
          left: 250px; /* Offset from sidebar */
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}

const GearSVG = ({ size, teeth }: { size: number; teeth: number }) => {
  const [d, setD] = useState('');

  useEffect(() => {
    const radius = size / 2;
    const innerRadius = radius * 0.85;
    
    // Create gear path
    let newD = '';
    const angleStep = (2 * Math.PI) / teeth;
    
    for (let i = 0; i < teeth; i++) {
      const angle = i * angleStep;
      const nextAngle = (i + 1) * angleStep;
      const toothWidth = angleStep * 0.25;
      
      // Tooth points
      const p1x = Math.cos(angle) * innerRadius + radius;
      const p1y = Math.sin(angle) * innerRadius + radius;
      
      const p2x = Math.cos(angle + toothWidth) * radius + radius;
      const p2y = Math.sin(angle + toothWidth) * radius + radius;
      
      const p3x = Math.cos(nextAngle - toothWidth) * radius + radius;
      const p3y = Math.sin(nextAngle - toothWidth) * radius + radius;
      
      const p4x = Math.cos(nextAngle) * innerRadius + radius;
      const p4y = Math.sin(nextAngle) * innerRadius + radius;
      
      if (i === 0) {
        newD += `M${p1x},${p1y} L${p2x},${p2y} L${p3x},${p3y} L${p4x},${p4y}`;
      } else {
        newD += ` L${p1x},${p1y} L${p2x},${p2y} L${p3x},${p3y} L${p4x},${p4y}`;
      }
    }
    
    newD += 'Z';
    setD(newD);
  }, [size, teeth]);

  const radius = size / 2;
  const innerRadius = radius * 0.85;
  const holeRadius = radius * 0.2;

  // Don't render until path is ready to avoid hydration mismatch
  if (!d) return null;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
       {/* Gear Body */}
       <path d={d} fill="currentColor" />
       {/* Center Hole */}
       <circle cx={radius} cy={radius} r={holeRadius} fill="var(--paper)" />
       {/* Decorative dashed circle */}
       <circle cx={radius} cy={radius} r={innerRadius * 0.8} fill="none" stroke="var(--paper)" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
};
