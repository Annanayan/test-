'use client';

import { useEffect, useState } from 'react';

interface ShimmerTextProps {
  children: string;
  delay?: number;
  className?: string;
}

export default function ShimmerText({ children, delay = 0, className = '' }: ShimmerTextProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className={`text-transparent bg-clip-text transition-all duration-1000 ${
          shouldAnimate
            ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900'
            : 'bg-gray-400'
        }`}
        style={{
          backgroundSize: shouldAnimate ? '200% 100%' : '100% 100%',
          animation: shouldAnimate ? 'shimmer 2s ease-in-out' : 'none',
        }}
      >
        {children}
      </span>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </span>
  );
}