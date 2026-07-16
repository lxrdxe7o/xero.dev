'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gear1Path, gear2Path, gear3Path, gear4Path } from './gear-paths';
import styles from './BackgroundGears.module.css';

const r4 = (n: number) => Math.round(n * 1e4) / 1e4;

// Tooth counts used for visible rotation: pick non-multiple-of-360 totals so
// each gear ends the page at a distinct angle (BASE = total spin per page).
const T1 = 22, T2 = 14, T3 = 20, T4 = 16;
const BASE = 720; // 2 revolutions — perceptible even on short pages

function SvgGear({ path, colors }: { path: string; colors: { stroke: string; fill: string } }) {
  return (
    <svg viewBox="0 0 100 100" className={styles.gearSvg} shapeRendering="geometricPrecision">
      <path d={path} fill={colors.fill} fillOpacity="0.22" stroke={colors.stroke} strokeWidth="1" fillRule="evenodd" />
      {/* Center lines — overshoot the part, drafting convention */}
      <line x1="8" y1="50" x2="92" y2="50" stroke={colors.stroke} strokeWidth="0.2" strokeDasharray="10 2 2 2" opacity="0.6" />
      <line x1="50" y1="8" x2="50" y2="92" stroke={colors.stroke} strokeWidth="0.2" strokeDasharray="10 2 2 2" opacity="0.6" />
      {/* Pitch circle — dashed per engineering-drawing convention */}
      <circle cx="50" cy="50" r="32" fill="none" stroke={colors.stroke} strokeWidth="0.35" strokeDasharray="2.4 1.8" opacity="0.7" />
      <circle cx="50" cy="50" r="26" fill="none" stroke={colors.stroke} strokeWidth="0.5" opacity="0.5" />
      <circle cx="50" cy="50" r="16" fill="none" stroke={colors.stroke} strokeWidth="0.4" opacity="0.5" />
      <circle cx="50" cy="50" r="12" fill="none" stroke={colors.stroke} strokeWidth="0.8" />
      {/* Center bore + keyway */}
      <circle cx="50" cy="50" r="6" fill="none" stroke={colors.stroke} strokeWidth="0.6" />
      <path d="M 48.4 44.5 L 48.4 42.8 L 51.6 42.8 L 51.6 44.5" fill="none" stroke={colors.stroke} strokeWidth="0.4" opacity="0.7" />
      <path d="M 48.5 37 L 48.5 35 L 51.5 35 L 51.5 37" fill="none" stroke={colors.stroke} strokeWidth="0.5" opacity="0.7" />
      {/* Index mark — the only asymmetric feature at a glance, so rotation reads
          even at whisper opacity. Drafting convention: dot on the pitch circle. */}
      <line x1="50" y1="25" x2="50" y2="13" stroke={colors.stroke} strokeWidth="0.8" opacity="0.85" />
      <circle cx="50" cy="18" r="1.8" fill={colors.stroke} opacity="0.9" />
      {/* Simple spokes */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 6;
        const cos = Math.cos(a), sin = Math.sin(a);
        return (
          <g key={i}>
            <line
              x1={r4(50 + cos * 12)} y1={r4(50 + sin * 12)}
              x2={r4(50 + cos * 26)} y2={r4(50 + sin * 26)}
              stroke={colors.stroke} strokeWidth="0.25" opacity="0.5"
            />
            <circle cx={r4(50 + Math.cos(a + Math.PI / 6) * 14)} cy={r4(50 + Math.sin(a + Math.PI / 6) * 14)} r="0.8" fill="none" stroke={colors.stroke} strokeWidth="0.25" opacity="0.5" />
          </g>
        );
      })}
      {/* Outer tick ring */}
      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 48;
        const major = i % 6 === 0;
        return (
          <line key={i}
            x1={r4(50 + Math.cos(a) * (major ? 27 : 28))} y1={r4(50 + Math.sin(a) * (major ? 27 : 28))}
            x2={r4(50 + Math.cos(a) * (major ? 29 : 29.5))} y2={r4(50 + Math.sin(a) * (major ? 29 : 29.5))}
            stroke={colors.stroke} strokeWidth={major ? 0.35 : 0.18} opacity="0.5"
          />
        );
      })}
    </svg>
  );
}

export default function BackgroundGears() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const g1Ref = useRef<HTMLDivElement | null>(null);
  const g2Ref = useRef<HTMLDivElement | null>(null);
  const g3Ref = useRef<HTMLDivElement | null>(null);
  const g4Ref = useRef<HTMLDivElement | null>(null);
  const p1Ref = useRef<HTMLDivElement | null>(null);
  const p2Ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  // ponytail: skip ScrollTrigger — Lenis already owns scroll progression, so we
  // read lenis.scroll / lenis.dimensions directly per RAF tick. Removes a brittle
  // non-static-position requirement and a plugin registration race.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollArea = document.querySelector('.scroll-area') as HTMLDivElement | null;
    if (!scrollArea) return;

    const g1 = g1Ref.current, g2 = g2Ref.current, g3 = g3Ref.current, g4 = g4Ref.current;
    if (!g1 || !g2 || !g3 || !g4) return;

    if (reducedMotion) {
      gsap.set([g1, g2, g3, g4], { rotation: 0 });
      return;
    }

    let raf = 0;
    let cancelled = false;
    let lastProgress = -1;

    const tick = () => {
      if (cancelled) return;
      const lenis = (scrollArea as any).__lenis;
      let progress = 0;
      if (lenis && typeof lenis.scroll === 'number' && lenis.dimensions) {
        const max = lenis.dimensions.scrollHeight - lenis.dimensions.height;
        progress = max > 0 ? Math.min(1, Math.max(0, lenis.scroll / max)) : 0;
      } else {
        const max = scrollArea.scrollHeight - scrollArea.clientHeight;
        progress = max > 0 ? Math.min(1, Math.max(0, scrollArea.scrollTop / max)) : 0;
      }

      // Idle frames are free — only touch the DOM when scroll actually moved.
      if (Math.abs(progress - lastProgress) > 0.00005) {
        lastProgress = progress;
        const rot1 = progress * BASE;
        const rot2 = -(progress * BASE * T1) / T2;
        const rot3 = -progress * BASE;
        const rot4 = (progress * BASE * T3) / T4;

        gsap.set(g1, { rotation: rot1 });
        gsap.set(g2, { rotation: rot2 });
        gsap.set(g3, { rotation: rot3 });
        gsap.set(g4, { rotation: rot4 });
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  // Ambient floating & pulse
  useEffect(() => {
    if (typeof window === 'undefined' || reducedMotion) return;

    const p1 = p1Ref.current, p2 = p2Ref.current;
    if (!p1 || !p2) return;

    const floats = [
      gsap.to(p1, { y: '+=10', duration: 4.5, ease: 'sine.inOut', repeat: -1, yoyo: true }),
      gsap.to(p2, { y: '-=12', duration: 5.5, ease: 'sine.inOut', repeat: -1, yoyo: true }),
    ];

    const scales = [
      gsap.to(p1, { scale: 1.015, duration: 7, ease: 'sine.inOut', repeat: -1, yoyo: true }),
      gsap.to(p2, { scale: 0.985, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true }),
    ];

    return () => {
      floats.forEach((t) => t.kill());
      scales.forEach((t) => t.kill());
    };
  }, [reducedMotion]);

  // Mouse proximity glow
  useEffect(() => {
    if (typeof window === 'undefined' || reducedMotion) return;

    const root = containerRef.current;
    if (!root) return;

    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const glowEls = root.querySelectorAll('[data-gear-glow]');
    let framePending = false;

    const onMouseMove = (e: MouseEvent) => {
      if (framePending) return;
      framePending = true;
      const { clientX, clientY } = e;

      requestAnimationFrame(() => {
        framePending = false;
        const mx = (clientX / window.innerWidth - 0.5) * 12;
        const my = (clientY / window.innerHeight - 0.5) * 12;
        gsap.to(root, { x: mx, y: my, duration: 1.2, ease: 'power2.out' });

        glowEls.forEach((el) => {
          const rect = (el as HTMLElement).getBoundingClientRect();
          const gcx = rect.left + rect.width / 2;
          const gcy = rect.top + rect.height / 2;
          const dist = Math.hypot(clientX - gcx, clientY - gcy);
          const radius = rect.width / 2;
          const maxD = radius * 2.8;

          const factor = Math.max(0, 1 - dist / maxD);
          const hoverIntensity = Math.pow(factor, 2.2);

          gsap.to(el, {
            opacity: 0.15 + hoverIntensity * 0.2,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const onChange = (e: MediaQueryListEvent) => {
      if (!e.matches) window.removeEventListener('mousemove', onMouseMove);
    };
    mediaQuery.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mediaQuery.removeEventListener('change', onChange);
    };
  }, [reducedMotion]);

  // Archival palette colors for each gear
  const gearPalette = {
    g1: { stroke: 'var(--accent-blue)', fill: 'var(--ink)' },
    g2: { stroke: 'var(--accent-red)', fill: 'var(--ink)' },
    g3: { stroke: 'var(--ink-dim)', fill: 'var(--ink)' },
    g4: { stroke: 'var(--ink)', fill: 'var(--ink)' },
  };

  return (
    <div ref={containerRef} className={styles.container} aria-hidden="true">
      {/* Pair 1 — Right: accent-blue drives accent-red */}
      <div ref={p1Ref} className={`${styles.pairContainer} ${styles.pair1}`}>
        <div ref={g1Ref} className={`${styles.gearBase} ${styles.gear1}`} data-gear-glow>
          <SvgGear path={gear1Path} colors={gearPalette.g1} />
        </div>
        <div ref={g2Ref} className={`${styles.gearBase} ${styles.gear2}`} data-gear-glow>
          <SvgGear path={gear2Path} colors={gearPalette.g2} />
        </div>
      </div>

      {/* Pair 2 — Left: ink-dim drives ink */}
      <div ref={p2Ref} className={`${styles.pairContainer} ${styles.pair2}`}>
        <div ref={g3Ref} className={`${styles.gearBase} ${styles.gear3}`} data-gear-glow>
          <SvgGear path={gear3Path} colors={gearPalette.g3} />
        </div>
        <div ref={g4Ref} className={`${styles.gearBase} ${styles.gear4}`} data-gear-glow>
          <SvgGear path={gear4Path} colors={gearPalette.g4} />
        </div>
      </div>
    </div>
  );
}
