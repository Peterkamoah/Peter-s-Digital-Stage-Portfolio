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
      ([entry], obs) => {
        // If the element is intersecting (in view), set state to true
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stop observing the element after it has been animated once.
          // This provides a cleaner, more performant experience.
          obs.unobserve(element);
        }
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin,
        threshold: options?.threshold ?? 0.1, // Trigger a bit earlier
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}
