'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import ScrollIndicator from './ScrollIndicator';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

// SVG Icons for skills carousel
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#000">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
  </svg>
);

const GenericIcon = ({ children }: { children: string }) => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#000">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-current">
      {children.slice(0, 2)}
    </text>
  </svg>
);

const skills: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <GenericIcon>NX</GenericIcon> },
  { name: 'TypeScript', icon: <GenericIcon>TS</GenericIcon> },
  { name: 'Node.js', icon: <GenericIcon>ND</GenericIcon> },
  { name: 'Python', icon: <GenericIcon>PY</GenericIcon> },
  { name: 'Machine Learning', icon: <GenericIcon>ML</GenericIcon> },
  { name: 'Product Strategy', icon: <GenericIcon>PS</GenericIcon> },
  { name: 'Data Analysis', icon: <GenericIcon>DA</GenericIcon> },
  { name: 'AI Tools', icon: <GenericIcon>AI</GenericIcon> },
  { name: 'Product Management', icon: <GenericIcon>PM</GenericIcon> },
  { name: 'Figma', icon: <GenericIcon>FG</GenericIcon> },
  { name: 'UI/UX Design', icon: <GenericIcon>UX</GenericIcon> },
  { name: 'User Research', icon: <GenericIcon>UR</GenericIcon> },
  { name: 'A/B Testing', icon: <GenericIcon>AB</GenericIcon> },
  { name: 'Analytics', icon: <GenericIcon>AN</GenericIcon> },
];

export default function SkillsCarousel() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    // Update URL fragment for deep linking
    if (!isExpanded) {
      window.history.replaceState(null, '', '#skills-all');
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
    <section id="skills" className="pt-16 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-georgia">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-georgia">
            A diverse toolkit spanning design, development, product management, and research
          </p>
        </motion.div>

        {/* Skills Carousel */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex space-x-8 animate-scroll">
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{ scale: 1.05, animationPlayState: 'paused' }}
                className="flex-shrink-0 flex flex-col items-center min-w-[120px] text-center group"
              >
                <div className="mb-3 transition-all duration-300 group-hover:text-red-700">{skill.icon}</div>
                <span className="text-sm font-medium text-gray-700 font-georgia transition-all duration-300 group-hover:text-red-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={toggleExpanded}
            className="px-3 py-1.5 border-2 border-gray-700 text-gray-700 font-medium rounded-md hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300 font-georgia flex items-center justify-center mx-auto text-sm"
            aria-expanded={isExpanded}
            aria-controls="skills-detailed"
          >
            <span className="font-medium mr-2">
              {isExpanded ? 'Hide detailed skills' : 'Explore all my skills'}
            </span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>

        {/* Expanded Skills Section (Old Portfolio Content) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="skills-detailed"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden mt-8"
            >
              <div className="rounded-2xl p-8">

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* AI & ML & Product Skills */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-600"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center font-georgia">AI & ML & Product</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        'C++', 'Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 'HTML/CSS/JS',
                        'Tailwind', 'Vite', 'NoSQL/SQL', 'MySQL', 'APIs', 'AWS', 'Vercel', 'Render',
                        'Supabase', 'ML/DL', 'PyTorch', 'TensorFlow', 'Spline', 'Figma', 'Product Management'
                      ].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Image
                            src="/checkmark.png"
                            alt="Checkmark"
                            width={16}
                            height={16}
                            className="w-4 h-4 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700 font-georgia">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Other Skills */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-600"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center font-georgia">Others</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        'UX Research', 'Data Analysis & Visualization', 'Tableau', 'Overleaf',
                        'Agile', 'Lean Startup', 'Learning Experience Design',
                        'Learning Science Principles', 'Cross-functional Collaboration',
                        'Project Management', 'Mentoring'
                      ].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Image
                            src="/checkmark.png"
                            alt="Checkmark"
                            width={16}
                            height={16}
                            className="w-4 h-4 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700 font-georgia">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll {
          animation: scroll 12s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>

    {/* Scroll Indicator - Outside colored background */}
    <div className="py-4 bg-transparent">
      <ScrollIndicator targetId="projects" />
    </div>
    </>
  );
}