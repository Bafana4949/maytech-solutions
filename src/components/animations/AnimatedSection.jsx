import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = '', animation = 'animate-[fade-in-up_0.8s_ease-out_forwards]', threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // If prefers-reduced-motion is on, it will just be opacity-100 immediately.
  const motionClass = window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    ? 'opacity-100' 
    : (isVisible ? animation : 'opacity-0');

  return (
    <div 
      ref={domRef} 
      className={`${motionClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
