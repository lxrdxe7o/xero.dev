'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// ponytail: context-free Lenis init, replaced AnimationProvider context
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area') as HTMLDivElement | null;
    if (reducedMotion || !scrollArea) return;

    const lenis = new Lenis({
      wrapper: scrollArea,
      content: scrollArea.firstElementChild as HTMLElement || scrollArea,
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [reducedMotion]);

  return <>{children}</>;
}
