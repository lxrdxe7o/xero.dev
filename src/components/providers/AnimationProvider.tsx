'use client';

import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';

interface AnimationContextType {
  lenis: Lenis | null;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  reducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  lenis: null,
  scrollContainerRef: { current: null },
  reducedMotion: false,
});

export const useAnimation = () => useContext(AnimationContext);

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area') as HTMLDivElement | null;
    if (scrollArea) {
      scrollContainerRef.current = scrollArea;
    }

    if (reducedMotion || !scrollArea) return;

    const lenisInstance = new Lenis({
      wrapper: scrollArea,
      content: scrollArea.firstElementChild as HTMLElement || scrollArea,
      lerp: 0.1,
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  return (
    <AnimationContext.Provider value={{ lenis, scrollContainerRef, reducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
}
