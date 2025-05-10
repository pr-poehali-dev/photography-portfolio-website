
import { useEffect, useRef, RefObject } from 'react';

type ScrollAnimationOptions = {
  threshold?: number;
  delay?: number;
};

/**
 * Hook для анимации появления элементов при прокрутке страницы
 * @param options Настройки анимации
 * @returns ref для контейнера, который содержит элементы с классом .appear-animation
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> {
  const { threshold = 0.1, delay = 100 } = options;
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = currentRef?.querySelectorAll('.appear-animation');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('active');
            }, delay * index);
          });
        }
      });
    }, { threshold });
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return ref;
}
