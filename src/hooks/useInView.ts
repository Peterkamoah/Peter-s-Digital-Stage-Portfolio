"use client";

import { useState, useEffect, type RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView(ref: RefObject<Element>, options?: Options): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && options?.triggerOnce) {
          observer.unobserve(element);
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
