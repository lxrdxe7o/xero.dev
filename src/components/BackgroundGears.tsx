'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

export default function BackgroundGears() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const scrollContainer = document.querySelector('.scroll-area');
    if (scrollContainer) {
      setScrollY(scrollContainer.scrollTop);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-area');
    if (!scrollContainer) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <div className="gears-container">
      <div
        className="gear gear-lg"
        style={{ transform: `rotate(${scrollY * 0.1}deg)`, willChange: 'transform' }}
      >
        <GearSVG size={600} teeth={24} />
      </div>

      <div
        className="gear gear-md"
        style={{ transform: `rotate(${-scrollY * 0.25}deg)`, willChange: 'transform' }}
      >
        <GearSVG size={300} teeth={16} />
      </div>

      <div
        className="gear gear-sm"
        style={{ transform: `rotate(${scrollY * 0.15}deg)`, willChange: 'transform' }}
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
          opacity: 0.08;
        }

        .gear {
          position: absolute;
          color: var(--ink);
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
          left: 250px;
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

    let newD = '';
    const angleStep = (2 * Math.PI) / teeth;

    for (let i = 0; i < teeth; i++) {
      const angle = i * angleStep;
      const nextAngle = (i + 1) * angleStep;
      const toothWidth = angleStep * 0.25;

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

  if (!d) return null;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={d} fill="currentColor" />
      <circle cx={radius} cy={radius} r={holeRadius} fill="var(--paper)" />
      <circle cx={radius} cy={radius} r={innerRadius * 0.8} fill="none" stroke="var(--paper)" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
};
