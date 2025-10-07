'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectDetailNavProps {
  sections: string[];
}

function ProjectDetailNav({ sections }: ProjectDetailNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-20 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-blue-50/90 backdrop-blur-sm border-b border-gray-100 py-4 mb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

interface ProjectSectionProps {
  id: string;
  title: string;
  content: string;
  delay?: number;
}

function ProjectSection({ id, title, content, delay = 0 }: ProjectSectionProps) {
  // For the first section (overview), show immediately without animation delay
  const isOverview = id === 'overview';

  return (
    <motion.section
      initial={{ opacity: isOverview ? 1 : 0, y: isOverview ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isOverview ? 0 : delay }}
      viewport={{ once: true, amount: 0.2 }}
      id={id}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none text-gray-600">
        <p>{content}</p>
      </div>
    </motion.section>
  );
}

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({ project, relatedProjects }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen py-20">

      {/* Project Header */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {project.id !== 'progresso' && project.id !== 'placeholder-project' && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                  {project.year}
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            {/* Company Description for Aishang AI projects */}
            {(project.id === 'ai-edtech-b2b' || project.id === 'user-research-product-growth') && (
              <p className="text-base text-gray-600 mb-6 max-w-3xl mx-auto italic">
                A Series B-funded AI EdTech company serving 2000+ B2B clients.
              </p>
            )}

            {/* Skills */}
            <div className="mb-8 max-w-4xl mx-auto">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Work Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Responsibilities</h2>

          {/* Role */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.role.map((role, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="prose prose-lg max-w-none text-gray-600">
            {project.longDescription.includes('•') ? (
              <ul className="list-disc list-inside space-y-3">
                {project.longDescription.split('•').filter(item => item.trim()).map((item, index) => (
                  <li key={index} className="leading-relaxed">{item.trim()}</li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed">{project.longDescription}</p>
            )}
          </div>
        </section>

        {/* Content coming soon for work experience projects */}
        {(project.id === 'ai-edtech-b2b' || project.id === 'user-research-product-growth') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
              <p className="text-lg text-blue-800 font-medium">Content details coming soon</p>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}