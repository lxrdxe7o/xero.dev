'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>[]{}|;:?/~';

interface TextScrambleProps {
  text: string;
  trigger?: 'mount' | 'inView' | 'hover';
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export default function TextScramble({
  text,
  trigger = 'inView',
  speed = 30,
  delay = 0,
  className = '',
  as: Tag = 'span',
}: TextScrambleProps) {
  const [display, setDisplay] = useState('');
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const rafRef = useRef<number>(0);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = text.length * 3;

    const update = () => {
      let result = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' ';
          continue;
        }
        const charFrame = i * 2;
        if (frame >= charFrame + 6) {
          result += text[i];
        } else if (frame >= charFrame) {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(result);
      frame++;
      if (frame <= totalFrames + 10) {
        rafRef.current = requestAnimationFrame(() => {
          setTimeout(update, speed);
        });
      } else {
        setDisplay(text);
      }
    };

    update();
  }, [text, speed]);

  useEffect(() => {
    if (trigger === 'mount' && !hasTriggered) {
      setHasTriggered(true);
      const timeout = setTimeout(scramble, delay);
      return () => clearTimeout(timeout);
    }
    if (trigger === 'inView' && isInView && !hasTriggered) {
      setHasTriggered(true);
      const timeout = setTimeout(scramble, delay);
      return () => clearTimeout(timeout);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, isInView, hasTriggered, scramble, delay]);

  useEffect(() => {
    if (trigger === 'hover' && isHovering) {
      scramble();
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, isHovering, scramble]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsHovering(false);
      setDisplay(text);
    }
  };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement & HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
    >
      {display || (trigger === 'mount' || (trigger === 'inView' && !isInView) ? '\u00A0'.repeat(text.length) : text)}
    </Tag>
  );
}
