"use client";

import { useState, useEffect, type RefObject } from 'react';

interface Options extends IntersectionObserverInit {
}

export function useInView(ref: RefObject<Element>, options?: Options): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset only when the element is below the viewport (scrolling up)
          if (entry.boundingClientRect.top > 0) {
            setIsInView(false);
          }
        }
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin,
        threshold: options?.threshold ?? 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}
