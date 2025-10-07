'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const hobbies = [
  {
    id: 1,
    title: 'OUTDOOR SPORTS',
    description: 'Adventure seeker & nature explorer',
    icon: '⛰️',
    image: '/aboutme/outdoor.jpg',
  },
  {
    id: 2,
    title: 'PHOTOGRAPHY',
    description: 'Capturing moments & beauty',
    icon: '📷',
    image: '/aboutme/photography.jpg',
  },
  {
    id: 3,
    title: 'LEARNING',
    description: 'Knowledge excites me',
    icon: '📖',
    image: '/aboutme/learning.jpg',
  },
  {
    id: 4,
    title: 'BICHON FRISE',
    description: 'My greatest happiness',
    icon: '🐾',
    image: '/aboutme/dog.jpg',
  },
  {
    id: 5,
    title: 'EXPLORATION',
    description: 'Always seeking new things',
    icon: '🧭',
    image: '/aboutme/exploration.jpg',
  },
  {
    id: 6,
    title: 'COFFEE MAKING',
    description: 'Every cup is an art',
    icon: '☕',
    image: '/aboutme/coffee.jpg',
  },
  {
    id: 7,
    title: 'CAREER JOURNEY',
    description: 'Math Teacher → PM → HCI Student',
    icon: '✏️',
    image: '/aboutme/career.jpg',
  },
  {
    id: 8,
    title: 'TRAVELING',
    description: 'World explorer & culture lover',
    icon: '✈️',
    image: '/aboutme/travel.jpg',
  },
  {
    id: 9,
    title: 'MOMENTS',
    description: 'Cherishing beautiful life moments',
    icon: '✨',
    image: '/aboutme/moments.jpg',
  },
];

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);

  const roles = ['product engineer', 'designer', 'manager'];

  useEffect(() => {
    if (animationComplete) return;

    const role = roles[currentRole];
    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      const typeChar = () => {
        if (charIndex <= role.length) {
          setDisplayText(role.substring(0, charIndex));
          charIndex++;
          typingTimeout = setTimeout(typeChar, 100);
        } else {
          // Pause before erasing
          pauseTimeout = setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      };
      typeChar();
    } else {
      // Erasing animation
      charIndex = role.length;
      const eraseChar = () => {
        if (charIndex >= 0) {
          setDisplayText(role.substring(0, charIndex));
          charIndex--;
          typingTimeout = setTimeout(eraseChar, 50);
        } else {
          // Move to next role or complete
          if (currentRole < roles.length - 1) {
            setCurrentRole(currentRole + 1);
            setIsTyping(true);
          } else {
            setAnimationComplete(true);
          }
        }
      };
      eraseChar();
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [currentRole, isTyping, animationComplete]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section - Minimalist */}
      <div className="relative pt-20 pb-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Portrait - Positioned top left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 mb-2"
          >
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Image
                src="/Yan2.png"
                alt="Yan"
                fill
                className="object-cover"
                style={{
                  filter: 'grayscale(100%) contrast(1.15) brightness(1.05)'
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Centered below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto -mt-4"
          >
            <h1
              className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-none"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Yan Wang
            </h1>

            <div className="w-24 h-px bg-gray-900 mb-8 mx-auto" />

            <div className="space-y-6 text-base text-gray-700 leading-relaxed">
              <p>
                I'm Yan Wang — {animationComplete ? (
                  'a product engineer, designer, and manager'
                ) : (
                  <>
                    a <span className="inline-block min-w-[200px]">{displayText}<span className="inline-block w-0.5 h-5 bg-gray-600 ml-0.5 animate-blink"></span></span>
                  </>
                )} who builds technology with both precision and empathy. My work bridges AI engineering, UX research, and product design, uniting data-driven logic with artistic clarity. Whether I'm prototyping an LLM-powered learning system, refining a user flow in Figma, or architecting full-stack infrastructure, my approach is always the same: craft with intention, think with structure, and design for human impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Passions Grid - Minimalist Masonry */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-5xl font-light text-gray-900 mb-4"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Passions
            </h2>
            <div className="w-16 h-px bg-gray-900" />
          </motion.div>

          {/* Grid Layout - 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(hobby.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className={`${hobby.id === 7 ? 'object-contain' : 'object-cover'} transition-all duration-700 group-hover:scale-105`}
                    style={{
                      filter: hoveredCard === hobby.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                  />
                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === hobby.id ? 0 : 0.1,
                    }}
                  />
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-6xl">{hobby.icon}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-sm font-medium tracking-wider text-gray-900 mb-2 uppercase">
                  {hobby.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote
              className="text-base font-light text-gray-900 leading-relaxed mb-8"
            >
              Across every discipline I've worked in — education technology, product management, full-stack design, and machine learning — my goal has been to build things that feel alive: technically sound, intuitively beautiful, and genuinely useful. I see creativity as a form of engineering, and engineering as an act of design. Between these worlds, I've found my craft — where clarity meets emotion, and innovation feels both elegant and inevitable.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gray-400" />
              <span className="text-sm tracking-widest text-gray-500 uppercase">Yan Wang</span>
              <div className="w-12 h-px bg-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}
