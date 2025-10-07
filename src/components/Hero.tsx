'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingEffect from './TypingEffect';
import ShimmerText from './ShimmerText';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section id="profile" className="relative min-h-screen bg-[#0e1321]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-screen relative">

        {/* Hero Image aligned with right edge of background - fixed */}
        <div className="absolute top-0 right-0 max-w-md">
          <div className="relative">
            <Image
              src="/hero-yan.png"
              alt="Yan Wang"
              width={384}
              height={576}
              className="object-cover w-full"
              style={{
                height: '100vh',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>
        </div>

        {/* Main title and subtitle at bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-24 left-12 text-left"
        >
          {/* Main Title with Typing Effect - White Color */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-georgia text-white">
            <TypingEffect text="Hi, I'm " speed={150} delay={800} />
            <span className="text-red-700">Yan</span>
          </h1>

          {/* Tagline - Same size as description text */}
          <h2 className="text-base sm:text-lg font-normal font-georgia text-gray-300">
            <TypingEffect text="Crafting products that merge clarity with intelligence" speed={50} delay={2200} />
          </h2>
        </motion.div>

        {/* Description text layered over the image area - fixed container with animated content */}
        <div className="absolute bottom-12 right-0 max-w-md z-10">
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 border border-slate-600/40">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base sm:text-lg text-gray-200 font-georgia leading-relaxed"
            >
              Product engineer and designer bridging full-stack systems, machine learning, and user research. From fundamental software technologies to cutting-edge AI developments, transforming complex challenges into scalable, user-centered solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-3 justify-start mt-6"
            >
              <a
                href="#projects"
                className="px-3 py-1.5 bg-red-700 text-white font-medium rounded-md hover:bg-red-600 transition-all duration-300 font-georgia text-center text-sm"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="px-3 py-1.5 border-2 border-red-700 text-red-700 font-medium rounded-md hover:bg-red-700 hover:text-white transition-all duration-300 font-georgia text-center text-sm"
              >
                About Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator targetId="skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
      </div>
    </section>
  );
}