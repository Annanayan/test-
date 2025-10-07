'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface JobFlowDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function JobFlowDetailClient({ project, relatedProjects }: JobFlowDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black and Gold Theme */}
      <section className="relative bg-black text-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3">
              <span className="inline-block px-2.5 py-0.5 bg-[#b8945f] text-black text-xs font-medium rounded-full">
                2025
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              JobFlow
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-3 max-w-3xl">
              AI-Powered Job Application Assistant
            </p>
            <p className="text-base text-gray-400 mb-6 max-w-3xl">
              {project.longDescription}
            </p>

            {/* Role and Skills & Tools */}
            <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-4xl">
              <div>
                <h3 className="text-xs font-semibold text-[#b8945f] mb-2 uppercase tracking-wider">Role</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.role.map((role, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 border border-[#b8945f]/30 text-white text-xs rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#b8945f] mb-2 uppercase tracking-wider">Skills & Tools</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 border border-[#b8945f]/30 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#b8945f] text-black rounded-md text-sm font-medium hover:bg-[#d4ab6f] transition-colors"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Work Responsibilities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.overview}
              </p>
            </div>

            {/* Core Scenarios */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Quick Match Assessment</h3>
                <p className="text-sm text-gray-600">
                  Instantly evaluate if a job matches your criteria: salary, location, and sponsorship requirements.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Manage Bulk Applications</h3>
                <p className="text-sm text-gray-600">
                  Effortlessly organize and track dozens or even hundreds of job application records.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Track Application Progress</h3>
                <p className="text-sm text-gray-600">
                  Monitor each position's status from application to interview to final outcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section - Black Background with Gold Accents */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-[#b8945f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Feature 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">AI-Powered Parsing</h3>
                <p className="text-gray-300 text-sm mb-1.5">
                  One-click job description parsing that automatically extracts 10+ key fields including company info, requirements, salary, and sponsorship.
                </p>
                <p className="text-[#b8945f] text-xs font-semibold">Saves 90% of time</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">Smart Card System</h3>
                <p className="text-gray-300 text-sm">
                  Auto-generated editable job cards with real-time status updates across 5 application stages, interview tracking, and contact management.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">Dual View Management</h3>
                <p className="text-gray-300 text-sm">
                  Switch seamlessly between card view for visual browsing and table view for comprehensive overview and batch management.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">Advanced Filtering</h3>
                <p className="text-gray-300 text-sm">
                  Quick search and filter by status, company, salary range, location with intelligent sorting options for efficient job hunting.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">Scalable Data Management</h3>
                <p className="text-gray-300 text-sm">
                  Support for 1000+ job records with data import/export in JSON format and automatic archiving of historical applications.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#b8945f]/20 p-4 rounded-lg hover:border-[#b8945f]/40 transition-colors">
                <svg className="w-6 h-6 text-[#b8945f] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-base font-bold mb-2 text-[#b8945f]">Privacy-First Design</h3>
                <p className="text-gray-300 text-sm">
                  100% local storage with encrypted API keys, no server dependencies, and complete offline functionality for maximum privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Flow Section - Compact Visual Diagram */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              User Flow
            </h2>

            {/* Compact Flow Diagram */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Step 1 */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-[#b8945f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Discover</h3>
                  <p className="text-xs text-gray-600">Copy job description</p>
                </div>

                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 2 */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-[#b8945f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">AI Parse</h3>
                  <p className="text-xs text-gray-600">Extract key fields</p>
                </div>

                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 3 */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-[#b8945f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Review</h3>
                  <p className="text-xs text-gray-600">Edit & adjust</p>
                </div>

                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 4 */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-[#b8945f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Track</h3>
                  <p className="text-xs text-gray-600">Update status</p>
                </div>

                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 5 */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-[#b8945f] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">5</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Manage</h3>
                  <p className="text-xs text-gray-600">Filter & export</p>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-gray-600">
                  <div>
                    <strong className="text-gray-900">Discover:</strong> Browse job sites and copy JD
                  </div>
                  <div>
                    <strong className="text-gray-900">AI Parse:</strong> Extract company, salary, location, sponsorship
                  </div>
                  <div>
                    <strong className="text-gray-900">Review:</strong> Preview results and make adjustments
                  </div>
                  <div>
                    <strong className="text-gray-900">Track:</strong> Update through 5 status stages
                  </div>
                  <div>
                    <strong className="text-gray-900">Manage:</strong> Card/table views with filtering
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Design Philosophy
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Minimalist design philosophy emphasizing clarity, precision, and professional elegance through restrained aesthetics and thoughtful details.
            </p>

            {/* Color Palette */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <div className="w-full h-16 bg-black rounded-lg mb-1.5"></div>
                  <p className="text-sm font-semibold text-gray-900">Primary Black</p>
                  <p className="text-xs text-gray-500">#000000</p>
                </div>
                <div>
                  <div className="w-full h-16 rounded-lg mb-1.5" style={{ backgroundColor: '#b8945f' }}></div>
                  <p className="text-sm font-semibold text-gray-900">Accent Gold</p>
                  <p className="text-xs text-gray-500">#b8945f</p>
                </div>
                <div>
                  <div className="w-full h-16 rounded-lg mb-1.5" style={{ backgroundColor: '#fafaf8' }}></div>
                  <p className="text-sm font-semibold text-gray-900">Background Cream</p>
                  <p className="text-xs text-gray-500">#fafaf8</p>
                </div>
                <div>
                  <div className="w-full h-16 bg-gray-800 rounded-lg mb-1.5"></div>
                  <p className="text-sm font-semibold text-gray-900">Text Gray</p>
                  <p className="text-xs text-gray-500">#2a2a2a</p>
                </div>
              </div>
            </div>

            {/* Typography & Principles */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Typography</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xl mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Cormorant Garamond</p>
                    <p className="text-xs text-gray-600">Headings — Elegant, Classic</p>
                  </div>
                  <div>
                    <p className="text-base mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Inter</p>
                    <p className="text-xs text-gray-600">Body — Modern, Readable</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Design Principles</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="text-[#b8945f]">•</div>
                    <span className="text-gray-700">Extreme minimalism</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#b8945f]">•</div>
                    <span className="text-gray-700">Elegant restraint</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#b8945f]">•</div>
                    <span className="text-gray-700">Generous spacing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#b8945f]">•</div>
                    <span className="text-gray-700">Refined details</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technical Architecture
            </h2>

            {/* Horizontal Tech Stack */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• HTML5 / CSS3 / JavaScript</li>
                  <li>• Vanilla JavaScript</li>
                  <li>• CSS Grid & Flexbox</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">AI Integration</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• OpenAI GPT-3.5 Turbo</li>
                  <li>• Natural Language Processing</li>
                  <li>• Structured Data Extraction</li>
                  <li>• JSON Response Parsing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">Data Management</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• Browser LocalStorage</li>
                  <li>• CRUD Operations</li>
                  <li>• Import/Export (JSON)</li>
                  <li>• Auto Archive</li>
                </ul>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-base font-bold mb-4 text-[#b8945f]">System Architecture</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="border border-gray-700 p-3 rounded">
                  <div className="text-[#b8945f] mb-1.5 text-xs">Presentation Layer</div>
                  <div className="ml-3 text-gray-300 text-xs">UI Components: Cards • Tables • Modals</div>
                </div>
                <div className="text-center text-gray-500 text-xs">↓</div>
                <div className="border border-gray-700 p-3 rounded">
                  <div className="text-[#b8945f] mb-1.5 text-xs">Business Logic</div>
                  <div className="ml-3 text-gray-300 text-xs">JobRecordManager: Add • Update • Delete • Filter</div>
                </div>
                <div className="text-center text-gray-500 text-xs">↓</div>
                <div className="border border-gray-700 p-3 rounded">
                  <div className="text-[#b8945f] mb-1.5 text-xs">Data Layer</div>
                  <div className="ml-3 text-gray-300 flex gap-6 text-xs">
                    <span>LocalStorage</span>
                    <span>OpenAI API</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="py-10 bg-gradient-to-br from-[#b8945f]/10 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Impact & Results
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border-2 border-[#b8945f]">
                <div className="text-4xl font-bold text-[#b8945f] mb-1">90%</div>
                <div className="text-gray-900 font-semibold mb-0.5 text-sm">Time Saved</div>
                <div className="text-xs text-gray-600">vs. manual data entry</div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#b8945f]">
                <div className="text-4xl font-bold text-[#b8945f] mb-1">1000+</div>
                <div className="text-gray-900 font-semibold mb-0.5 text-sm">Records Support</div>
                <div className="text-xs text-gray-600">Scalable data management</div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#b8945f]">
                <div className="text-4xl font-bold text-[#b8945f] mb-1">100%</div>
                <div className="text-gray-900 font-semibold mb-0.5 text-sm">Local Storage</div>
                <div className="text-xs text-gray-600">Complete privacy</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-2">Performance Metrics</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>&lt;2s AI parsing response time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>10+ key fields auto-extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>5 application status flows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-2">Security & Privacy</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>API Key local encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>XSS protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b8945f] mr-2">•</span>
                    <span>Zero backend dependency</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Development Insights */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Product Development Insights
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">UX Intuition-Driven Development</h3>
                  <p className="text-sm">
                    Built from personal experience during job search, leveraging strong user experience intuition to identify core pain points:
                    time-consuming manual data entry, difficulty tracking sponsorship information, and privacy concerns with cloud-based solutions.
                    Even in the initial version, focused on creating an interface that felt natural and efficient from day one.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Progressive Feature Enhancement</h3>
                  <p className="text-sm">
                    Started with simple AI parsing functionality, then iteratively added features guided by UX principles:
                    basic parsing → smart card management → real-time status tracking → dual-view system (cards/table) →
                    advanced filtering → data import/export. Each addition focused on improving user interaction and workflow efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Visual & Interaction Design Evolution</h3>
                  <p className="text-sm">
                    Continuously refined visual layout and interaction patterns to enhance user experience.
                    Chose local storage for privacy and speed, implemented dual-view system for different user needs (quick scanning vs. detailed comparison),
                    and selected black-gold color scheme to convey professionalism while standing out from typical productivity tools.
                    Focused on creating breathing space and elegant transitions throughout the interface.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reflection</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              JobFlow emerged from my own job search experience, which naturally guided the design toward solving real workflow inefficiencies.
              Building this tool reinforced the value of trusting UX intuition when you deeply understand the problem space—sometimes the best insights
              come from being your own user rather than external research alone.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The iterative development process taught me to start simple and progressively layer in complexity. Each feature addition—from basic parsing
              to dual-view management—was driven by identifying specific interaction pain points and designing solutions that felt natural within the existing interface.
              Through this project, I gained hands-on experience with AI API integration, learned to balance feature richness with interface clarity,
              and developed a stronger sense of how visual design choices (like the black-gold palette and generous spacing) can significantly impact
              perceived professionalism and user trust in a productivity tool.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.links && project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
