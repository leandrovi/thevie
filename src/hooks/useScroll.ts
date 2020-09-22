import { useState, useEffect } from 'react';

interface UseScrollData {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down';
}

export function useScroll(): UseScrollData {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [bodyOffset, setBodyOffset] = useState<any>(() => {
    if (typeof window === 'undefined' || !window.document) {
      return 0;
    }

    if (
      typeof document.querySelector('#parallax-container > div') ===
        'undefined' ||
      !document.querySelector('#parallax-container > div')
    ) {
      return 0;
    }

    return document
      .querySelector('#parallax-container > div')
      .getBoundingClientRect();
  });

  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();

  const listener = e => {
    setBodyOffset(() => {
      if (typeof window === 'undefined' || !window.document) {
        return 0;
      }

      if (
        typeof document.querySelector('#parallax-container > div') ===
          'undefined' ||
        !document.querySelector('#parallax-container > div')
      ) {
        return 0;
      }

      return document
        .querySelector('#parallax-container > div')
        .getBoundingClientRect();
    });
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);

    console.log(scrollY);
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
