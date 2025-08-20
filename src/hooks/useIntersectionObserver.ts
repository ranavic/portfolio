import { useState, useEffect, useRef, RefObject } from 'react';

export interface ObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useIntersectionObserver = (
  options: ObserverOptions
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

export default useIntersectionObserver;