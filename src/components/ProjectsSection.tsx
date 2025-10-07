'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import ScrollIndicator from './ScrollIndicator';

interface ProjectsSectionProps {
  title: string;
  description: string;
  category: 'product' | 'other';
  showFeatured?: boolean;
}

export default function ProjectsSection({ title, description, category, showFeatured = false }: ProjectsSectionProps) {
  const filteredProjects = projects.filter(project => {
    if (showFeatured) {
      return project.category === category && project.featured;
    }
    return project.category === category;
  });

  const sectionProjects = showFeatured ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id={category === 'product' ? 'projects' : 'other-projects'} className={`${category === 'other' ? 'py-10 pb-12 bg-gray-100' : 'py-10 bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-georgia">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-georgia leading-snug">
            {description}
          </p>
        </motion.div>

        {/* Layout changes based on category */}
        {category === 'other' ? (
          // Portrait mobile card layout for Other Projects
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Square Tablet Card Frame */}
                <div className="relative mx-auto max-w-xs transform group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Tablet Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-800/30 to-blue-950/40 rounded-[1.5rem] blur-xl translate-y-4 scale-95"></div>
                  <div className="absolute inset-0 bg-[#0e1321]/50 rounded-[1.5rem] blur-lg translate-y-5 scale-96"></div>

                  {/* Square Tablet Frame - Medium dark gray transition */}
                  <div className="relative bg-gradient-to-br from-gray-700 via-slate-700 to-gray-800 border-[0.25px] border-blue-800/30 rounded-[1.5rem] p-3 aspect-[4/5] metallic-gray-glow">
                    {/* Screen Bezel */}
                    <div className="w-full h-full bg-black rounded-[1.2rem] p-0.5">
                      {/* Screen Content */}
                      <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden flex flex-col">
                        {/* Project Image - Fixed Height */}
                        <div className="relative h-48 bg-gray-50 flex items-center justify-center mx-3 mt-3 rounded-lg">

                          {project.id === 'big-ideas-synthesis' ? (
                            <div className="w-full h-full flex items-center justify-center rounded-lg" style={{ backgroundColor: '#63B5FE' }}>
                              <div className="text-center text-white">
                                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <p className="text-sm font-semibold">8 Big Ideas</p>
                              </div>
                            </div>
                          ) : project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={400}
                              height={320}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                              <div className="text-center">
                                <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content Area - Fixed Height */}
                        <div className="flex-1 p-3 text-center flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-1 font-georgia">
                              {project.title}
                            </h3>

                            <p className="text-gray-600 text-xs mb-3 line-clamp-2 font-georgia leading-tight">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mb-3 justify-center">
                              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-full font-georgia"
                                >
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 2 && (
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-georgia">
                                  +{project.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* View Project Button */}
                          <div>
                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center justify-center px-2.5 py-1 rounded-md font-medium transition-all duration-300 text-xs border-2 border-red-700 text-red-700 bg-white hover:bg-red-700 hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-georgia"
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Large featured layout for Product Projects (new portfolio style)
          <div className="grid gap-6">
            {sectionProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  slug={project.id}
                  image={project.image}
                  featured={showFeatured && project.featured}
                  externalUrl={project.id === 'spectrum-research-library' ? 'https://spectrum-research-library.vercel.app/' : undefined}
                  showExperienceButton={project.id === 'math-village'}
                  experienceUrl={project.id === 'math-village' ? 'https://math-village-student.vercel.app/' : undefined}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Scroll Indicator - only for product category */}
        {category === 'product' && (
          <ScrollIndicator
            targetId="other-projects"
            className="mt-8"
          />
        )}
      </div>
    </section>
  );
}