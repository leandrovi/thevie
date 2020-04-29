import { useState, useEffect } from 'react';

interface UseScrollData {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down';
}

export function useScroll(): UseScrollData {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [bodyOffset, setBodyOffset] = useState<any>(
    typeof window === 'undefined' || !window.document
      ? 0
      : document.body.getBoundingClientRect(),
  );

  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();

  const listener = e => {
    setBodyOffset(
      typeof window === 'undefined' || !window.document
        ? 0
        : document.body.getBoundingClientRect(),
    );
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
