'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({ targetId, className = '' }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex justify-center ${className}`}
    >
      <button
        onClick={handleClick}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Scroll to next section"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7M19 8l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </motion.div>
  );
}