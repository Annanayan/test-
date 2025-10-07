'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  image?: string;
  featured?: boolean;
  externalUrl?: string;
  showExperienceButton?: boolean;
  experienceUrl?: string;
}

export default function ProjectCard({ title, description, tags, slug, image, featured = false, externalUrl, showExperienceButton = false, experienceUrl }: ProjectCardProps) {
  // Check if this project should have static iPad interior
  const isStaticProject = slug === 'diagnostic-game-design' || slug === 'spectrum-research-library' || slug === 'ai-edtech-b2b' || slug === 'user-research-product-growth';
  // Check if this is the diagnostic project (mobile game)
  const isMobileProject = slug === 'diagnostic-game-design';
  // Check if this is the multimodal geometry project (academic paper style)
  const isAcademicProject = slug === 'multimodal-geometry';
  // Check if this is the math village project (special dark styling)
  const isMathVillageProject = slug === 'math-village';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative border border-slate-300 rounded-3xl h-full overflow-hidden transition-all duration-300">
        <div className="flex flex-col md:flex-row min-h-[520px]">
          {/* Project Image - Left Side with iPad-style Screen Effect */}
          <div className={`relative h-[520px] md:h-auto md:w-[60%] flex items-center justify-start pl-3 pr-5 py-5 bg-transparent`}>
            {/* Outer Device Frame */}
            <div className={`relative mx-auto transform group-hover:scale-[1.01] transition-transform duration-700 ease-out ${
              isMobileProject
                ? 'w-[90%] h-[65%] max-w-xl'
                : slug === 'spectrum-research-library'
                  ? 'w-full h-[85%] max-w-xl'
                  : 'w-full h-[80%] max-w-xl'
            }`}>
              {/* Base shadow - deep black for floating effect */}
              <div className={`absolute inset-0 bg-black/40 blur-3xl translate-y-12 scale-95 ${isMobileProject ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'}`}></div>

              {/* Mid shadow - softer gray */}
              <div className={`absolute inset-0 bg-gray-900/30 blur-2xl translate-y-8 scale-96 ${isMobileProject ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'}`}></div>

              {/* Dynamic Multi-layer Shadow - Enhanced for dark background projects */}
              <div className={`absolute inset-0 ${
                isMathVillageProject || isAcademicProject
                  ? 'bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-cyan-400/30 blur-3xl translate-y-6 scale-90'
                  : 'bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-pink-500/15 blur-2xl translate-y-5 scale-95'
              } ${isMobileProject ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'} ${
                isMathVillageProject || isAcademicProject ? 'animate-pulse' : 'animate-pulse'
              }`}></div>

              {/* Close shadow for depth */}
              <div className={`absolute inset-0 bg-black/20 blur-xl translate-y-4 scale-98 ${isMobileProject ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'}`}></div>

              {/* Additional floating shadow for dark background projects */}
              {(isMathVillageProject || isAcademicProject) && (
                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-blue-300/20 to-purple-300/15 blur-xl translate-y-3 scale-98 ${
                  isMobileProject ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'
                }`}></div>
              )}

              {/* Device Frame - Mobile Phone, iPad, or Academic Paper Style with Enhanced Floating Effect */}
              <div className={`relative w-full h-full p-3 ${
                isMobileProject
                  ? 'bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 border-4 border-gradient-to-r from-blue-800 via-slate-700 to-blue-900 rounded-[1.5rem] p-4 transform hover:scale-[1.02] transition-transform duration-500'
                  : isAcademicProject
                    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gradient-to-r from-blue-800 via-slate-700 to-blue-900 rounded-[2.5rem] p-4 transform hover:scale-[1.02] transition-transform duration-500'
                    : isStaticProject
                      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gradient-to-r from-blue-800 via-slate-700 to-blue-900 rounded-[2.5rem] p-4 transform hover:scale-[1.02] transition-transform duration-500'
                      : isMathVillageProject
                        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gradient-to-r from-blue-800 via-slate-700 to-blue-900 blue-gaming-frame-glow rounded-[2.5rem] p-4 transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-blue-500/30'
                        : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gradient-to-r from-blue-400 via-purple-500 to-pink-400 gaming-frame-glow rounded-[2.5rem] p-4'
              }`} style={{
                boxShadow: isMathVillageProject
                  ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(6, 182, 212, 0.3)'
                  : undefined
              }}>
                {/* Ultra-thin Screen Bezel */}
                <div className={`w-full h-full p-0.5 ${
                  isMobileProject
                    ? 'bg-blue-700 rounded-[1.25rem]'
                    : isAcademicProject
                      ? 'bg-black rounded-[2rem]'
                      : 'bg-black rounded-[2rem]'
                }`}>
                  {/* Screen Content */}
                  <div className={`relative w-full overflow-hidden mx-auto ${
                    isMobileProject
                      ? 'h-full aspect-[16/9] rounded-[1rem] bg-gradient-to-br from-white to-blue-50'
                      : isAcademicProject
                        ? 'h-full aspect-[4/3] rounded-[1.75rem] bg-gradient-to-br from-gray-900 to-black'
                        : slug === 'spectrum-research-library'
                          ? 'h-full rounded-[1.75rem] bg-gradient-to-br from-gray-900 to-black'
                          : 'h-full aspect-[4/3] rounded-[1.75rem] bg-gradient-to-br from-gray-900 to-black'
                  }`}>
                    {image ? (
                      <>
                        {isAcademicProject ? (
                          <div className="w-full h-full flex items-center justify-center p-3">
                            <div className="relative w-full h-full">
                              <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={image}
                            alt={title}
                            fill
                            className={`object-cover ${
                              isStaticProject
                                ? ''
                                : 'ambient-glow'
                            }`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        {/* Screen Reflection Effect */}
                        <div className="absolute inset-0 screen-reflection pointer-events-none"></div>
                        {/* Screen Glass Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-xs font-medium font-georgia">{title}</p>
                        </div>
                      </div>
                    )}

                    {/* Camera Module and Controls - Different Styles */}
                    {isMobileProject ? (
                      <>
                        {/* Front Camera */}
                        <div className="absolute top-2 left-4 w-2 h-2 bg-blue-900 rounded-full border border-blue-800"></div>
                        {/* Speaker Grille */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-900 rounded-full"></div>
                        {/* Status LED */}
                        <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-blue-600 rounded-full shadow-sm shadow-blue-600/30 animate-pulse"></div>
                      </>
                    ) : isAcademicProject ? (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-amber-600 rounded-full"></div>
                    ) : isStaticProject ? (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full border border-gray-600/50"></div>
                    ) : (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border border-pink-400/50 shadow-lg shadow-purple-500/30"></div>
                    )}

                    {/* Additional Mobile Elements */}
                    {isMobileProject && (
                      <>
                        {/* Home Button Area */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-900 rounded-full"></div>
                      </>
                    )}

                    {/* Status Indicators - Different styles for each project type */}
                    {!isMobileProject && (
                      isStaticProject ? (
                        <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm shadow-green-400/30"></div>
                      ) : (
                        <>
                          <div className="absolute top-2 right-3 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
                          <div className="absolute top-2 right-7 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-md shadow-purple-400/50 animate-bounce delay-75"></div>
                          <div className="absolute top-2 right-10 w-1 h-1 bg-pink-400 rounded-full shadow-sm shadow-pink-400/50 animate-ping delay-150"></div>
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Elements - Different styles for each project */}
              {isAcademicProject ? (
                <>
                  {/* Floating Geometric Shapes for Academic Project */}
                  <div className="absolute -top-3 -right-3 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-amber-600 animate-bounce delay-100 opacity-70"></div>
                  <div className="absolute -top-1 -right-8 w-3 h-3 bg-amber-600 animate-ping delay-200 opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full border-2 border-amber-600 animate-bounce delay-300 opacity-70"></div>
                  <div className="absolute -bottom-4 -right-1 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-amber-600 animate-pulse delay-400 opacity-60"></div>
                  <div className="absolute top-1/2 -left-3 w-2.5 h-2.5 bg-amber-600 animate-ping delay-500 opacity-65"></div>
                  <div className="absolute top-1/4 -right-6 w-3 h-3 rounded-full border-2 border-amber-600 animate-bounce delay-600 opacity-60"></div>
                  <div className="absolute bottom-1/3 -left-4 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-amber-600 animate-pulse delay-700 opacity-70"></div>
                </>
              ) : isMobileProject ? (
                <>
                  {/* Floating Emojis and Colorful Circles for Diagnostic Game Project */}
                  <div className="absolute -top-4 -right-8 text-2xl animate-[float_3s_ease-in-out_infinite] delay-100 opacity-80" style={{'--rotate': '12deg'} as React.CSSProperties}>🛹</div>
                  <div className="absolute -top-2 -left-6 text-2xl animate-[float_2.5s_ease-in-out_infinite] delay-200 opacity-75" style={{'--rotate': '-6deg'} as React.CSSProperties}>🦊</div>
                  <div className="absolute -bottom-3 -right-5 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce delay-300 opacity-80 shadow-lg shadow-pink-400/50"></div>
                  <div className="absolute -bottom-5 -left-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-ping delay-400 opacity-75"></div>
                  <div className="absolute top-1/4 -left-7 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse delay-500 opacity-70 shadow-md shadow-green-400/40"></div>
                  <div className="absolute top-1/3 -right-9 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-600 opacity-75"></div>
                  <div className="absolute bottom-1/4 -right-10 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-ping delay-700 opacity-80"></div>
                  <div className="absolute bottom-1/3 -left-8 w-2 h-2 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full animate-pulse delay-800 opacity-75"></div>
                </>
              ) : (
                <>
                  {/* Gaming RGB Floating Elements (Outside iPad - Keep All Colors) */}
                  <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce delay-100 shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute -top-1 -right-8 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-ping delay-200"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-300 shadow-md shadow-green-400/50"></div>
                  <div className="absolute -bottom-4 -right-1 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse delay-400"></div>
                  <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-ping delay-500"></div>
                </>
              )}
            </div>

          </div>

          {/* Content - Right Side */}
          <div className="p-6 md:p-8 md:w-[40%] flex flex-col justify-center text-center">
          {/* Institution/Company Logos - Top Center */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {(slug === 'math-village' || slug === 'multimodal-geometry' || slug === 'spectrum-research-library') && (
              <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200">
                <Image src="/CMU.png" alt="Carnegie Mellon University" width={40} height={40} className="object-contain" />
              </div>
            )}
            {(slug === 'ai-edtech-b2b' || slug === 'user-research-product-growth') && (
              <div className="bg-white rounded-full p-2 shadow-md border border-gray-200">
                <Image src="/Aishang AI.png" alt="Aishang AI" width={40} height={40} className="object-contain" />
              </div>
            )}
            {slug === 'diagnostic-game-design' && (
              <>
                <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200">
                  <Image src="/Mrs Wordsmith.png" alt="Mrs Wordsmith" width={40} height={40} className="object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200">
                  <Image src="/CMU.png" alt="Carnegie Mellon University" width={40} height={40} className="object-contain" />
                </div>
              </>
            )}
          </div>

          <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 font-georgia`}>
            {title}
          </h3>

          <p className={`text-gray-600 mb-6 leading-snug line-clamp-3 font-georgia`}>
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {tags.slice(0, 4).map((tag, index) => {
              const colors = [
                'bg-gray-200',
                'bg-stone-200',
                'bg-neutral-200',
                'bg-slate-200',
                'bg-zinc-200',
                'bg-gray-300',
                'bg-stone-300',
                'bg-neutral-300'
              ];
              return (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full text-black font-georgia ${colors[index % colors.length]}`}
                >
                  {tag}
                </span>
              );
            })}
            {tags.length > 4 && (
              <span className={`px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full font-georgia`}>
                +{tags.length - 4}
              </span>
            )}
          </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {/* View Project Button */}
              {externalUrl ? (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red font-georgia"
                >
                  {slug === 'spectrum-research-library' ? 'Explore Website' : 'View Project'}
                </a>
              ) : (
                <Link
                  href={`/projects/${slug}`}
                  className="btn-red font-georgia"
                >
                  View Project
                </Link>
              )}

              {/* Experience Button (for Math Village) */}
              {showExperienceButton && experienceUrl && (
                <a
                  href={experienceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red font-georgia"
                >
                  Explore Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}