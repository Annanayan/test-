'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

// Simple arrow icons as SVG components
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

interface DiagnosticDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function DiagnosticDetailClient({ project, relatedProjects }: DiagnosticDetailClientProps) {
  const [activeTab, setActiveTab] = useState('diagnostic');

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section */}
      <section className="py-24 bg-[#F56839] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/diagnostic-hero.png"
            alt="Diagnostic Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Orange overlay filter */}
        <div className="absolute inset-0 bg-[#F56839]/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Role */}
              <div>
                <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide">Role</h3>
                <p className="text-white text-sm">Product Researcher</p>
              </div>

              {/* Duration */}
              <div>
                <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide">Duration</h3>
                <p className="text-white text-sm">6 months</p>
                <p className="text-white/90 text-sm">Jan. 2025 - Aug. 2025 | London (remote), UK</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide">Skills</h3>
                <p className="text-white text-sm leading-tight max-w-[45%]">
                  {project.tags.map((tag, index) => (
                    <span key={index}>• {tag}{index < project.tags.length - 1 ? ' ' : ''}</span>
                  ))}
                </p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide">Team</h3>
                <p className="text-white text-sm">Lexplore!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Title */}
            <div className="md:col-span-1">
              {/* Company Logos and Names */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/Mrs Wordsmith.png"
                    alt="Mrs Wordsmith Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-[#FFA500] font-bold text-sm">Mrs Wordsmith</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/CMU.png"
                    alt="Carnegie Mellon University Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-[#DC143C] font-semibold text-sm">Carnegie Mellon University</span>
                </div>
              </div>

              <h2 className="text-base text-gray-600 font-inter">Diagnostic Word Game Design for Word Tag</h2>
            </div>

            {/* Right Column - Responsibilities */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-space-grotesk">Work Responsibilities</h3>

              {/* Role */}
              <div className="mb-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.role.map((role, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="prose max-w-none text-gray-600">
                {project.longDescription.includes('•') ? (
                  <ul className="list-disc list-inside space-y-1.5 text-sm">
                    {project.longDescription.split('•').filter(item => item.trim()).map((item, index) => (
                      <li key={index} className="leading-relaxed">{item.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-sm">{project.longDescription}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`py-2 text-left font-medium text-base transition-all duration-300 font-inter ${
                activeTab === 'diagnostic'
                  ? 'text-gray-900 border-b-2 border-[#A46FE3]'
                  : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
              }`}
            >
              Diagnostic Game Design Guide
            </button>
            <button
              onClick={() => setActiveTab('wordfair')}
              className={`py-2 text-left font-medium text-base transition-all duration-300 font-inter md:col-span-2 ${
                activeTab === 'wordfair'
                  ? 'text-gray-900 border-b-2 border-[#A46FE3]'
                  : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
              }`}
            >
              Word Fair Mini-games Design Guide
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'diagnostic' ? <DiagnosticContent project={project} /> : <WordFairContent />}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}

// Diagnostic Content Component
function DiagnosticContent({ project }: { project: Project }) {
  const [synonymRationaleOpen, setSynonymRationaleOpen] = useState(false);
  const [contextRationaleOpen, setContextRationaleOpen] = useState(false);

  return (
    <div className="font-inter">
      {/* Project Overview */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Section Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">Overview</h2>
            </div>

            {/* Right Column - All Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-base leading-relaxed font-inter text-gray-700">
                  The onboarding diagnostic is a short, game-based assessment that runs during a new player&apos;s first login. It quickly evaluates each learner&apos;s vocabulary level so that content can be personalized from the very first session.
                </p>
              </div>

              {/* The Problem */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space-grotesk">The Problem</h3>
                <p className="text-base leading-relaxed font-inter text-gray-700">
                  Currently, Word Tag relies on a learner&apos;s grade level to set the starting point. While the CatBoost algorithm adapts content over time, it takes several days of gameplay before meaningful adjustments occur. This delay can cause early content mismatches, reducing engagement and learning effectiveness.
                </p>
              </div>

              {/* The Opportunity */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space-grotesk">The Opportunity</h3>
                <p className="text-base leading-relaxed font-inter text-gray-700">
                  The onboarding diagnostic introduces a <strong>fast, approximately two-minute assessment</strong> at the start of the game. This diagnostic immediately identifies the learner&apos;s vocabulary level, enabling accurate personalization from the first session and creating a smoother, more engaging experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools & Process */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">Design Tools & Process</h2>

          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/Figma Design & Miro Brainstorm.png"
              alt="Figma Design & Miro Brainstorm"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Onboarding Diagnostic Design */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Sticky Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">
                Onboarding Diagnostic Design
              </h2>
            </div>

            {/* Right Column - All Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Assessment Types */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Assessment Types</h3>
                <p className="text-base leading-relaxed text-gray-700 font-inter mb-3">
                  The diagnostic includes two multiple-choice question formats, chosen for speed and reliability:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="text-lg font-bold mb-3 text-gray-900 font-inter">Synonym Matching</h5>
                    <p className="font-inter text-gray-700 mb-4 text-sm">Players are shown a target word and select a synonym from three options.</p>

                    <button
                      onClick={() => setSynonymRationaleOpen(!synonymRationaleOpen)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-600 transition-colors font-inter"
                    >
                      {synonymRationaleOpen ? 'Hide Rationale' : 'Show Rationale'}
                    </button>

                    <AnimatePresence>
                      {synonymRationaleOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-1.5 ml-4 text-gray-700 text-sm font-inter">
                              <li>• Fast and familiar to learners</li>
                              <li>• Shown in research to be a reliable and efficient way to assess vocabulary knowledge in a short amount of time</li>
                              <li>• Allows control over difficulty using known psycholinguistic properties (e.g., word frequency, word length)</li>
                              <li>• Probes learners&apos; semantic knowledge without requiring production or complex reading skills</li>
                              <li>• Ideal for a lightweight assessment experience under 2 minutes</li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h5 className="text-lg font-bold mb-3 text-gray-900 font-inter">Word-in-Context</h5>
                    <p className="font-inter text-gray-700 mb-4 text-sm">Players read a sentence with a blank and select the word that best fits from three options.</p>

                    <button
                      onClick={() => setContextRationaleOpen(!contextRationaleOpen)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-600 transition-colors font-inter"
                    >
                      {contextRationaleOpen ? 'Hide Rationale' : 'Show Rationale'}
                    </button>

                    <AnimatePresence>
                      {contextRationaleOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-1.5 ml-4 text-gray-700 text-sm font-inter">
                              <li>• Adds ecological validity by assessing vocabulary in natural usage</li>
                              <li>• Captures recognition of words in context even if synonyms are less familiar</li>
                              <li>• Complements synonym matching by adding contextual understanding</li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Distractor Design Framework */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Distractor Design Framework</h3>
                <p className="text-base leading-relaxed mb-3 font-inter">
                  To ensure clear, fair assessment items, each multiple-choice question follows a research-based three-option structure designed to minimize confusion while accurately measuring vocabulary knowledge.
                </p>

                <div className="mb-4">
                  <p className="font-semibold mb-4 font-inter text-gray-900">Standard Distractor Pattern - Each question includes:</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {/* Correct Answer Card */}
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-bold text-gray-900 mb-2 font-inter">Correct Answer</h4>
                      <p className="text-gray-900 text-sm font-inter">A clear synonym or contextually appropriate word</p>
                    </div>

                    {/* Distractor 1 Card */}
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-bold text-gray-900 mb-2 font-inter">Distractor 1</h4>
                      <p className="text-gray-900 text-sm font-inter">An antonym or contrasting concept</p>
                    </div>

                    {/* Distractor 2 Card */}
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-bold text-gray-900 mb-2 font-inter">Distractor 2</h4>
                      <p className="text-gray-900 text-sm font-inter">A &quot;near-miss&quot; option—thematically related but semantically distinct</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2 font-inter">Special Cases:</p>
                  <p className="mb-4 font-inter">When target words lack clear antonyms, we use contextually contrasting or commonly confused terms. This maintains the framework&apos;s consistency while ensuring all distractors serve their diagnostic purpose.</p>

                  <p className="font-semibold mb-2 font-inter">Distractor Effectiveness Validation:</p>
                  <p className="mb-2 font-inter">Based on research by Gierl et al. (2017), we recommend using this model to evaluate distractor effectiveness:</p>
                  <ul className="space-y-1.5 ml-4">
                    <li className="font-inter">• Distractors selected <strong>less than 5%</strong> indicate they&apos;re too implausible and should be replaced</li>
                    <li className="font-inter">• Distractors selected <strong>more than 25%</strong> suggest they&apos;re too attractive or ambiguous</li>
                    <li className="font-inter">• Ideal distractors fall within the <strong>5%-25%</strong> selection range, indicating they&apos;re plausible but distinguishable from correct answers</li>
                  </ul>
                </div>
              </div>

              {/* Word Selection */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Word Selection</h3>
                <p className="text-base leading-relaxed mb-2 text-gray-700 font-inter">
                  Words are selected and organized by Lexile levels, aligning with Word Tag&apos;s vocabulary structure. This ensures consistency between the assessment and the game&apos;s content progression.
                </p>
                <p className="text-base leading-relaxed text-gray-700 font-inter mb-3">
                  The current prototype and conceptual design were developed for <strong>Grade 3 learners</strong> as the initial focus. The framework can be extended to additional grade levels in future iterations.
                </p>

                {/* Difficulty Visualization */}
                <div className="mb-3 bg-white rounded-lg p-4">
                  <p className="font-semibold mb-4 text-gray-900 font-inter">Grade-Based Difficulty Bands:</p>
                  <div className="flex justify-center items-center space-x-8">
                    {/* Easy */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-green-700 font-bold text-sm font-inter">Easy</span>
                      </div>
                      <p className="text-sm text-gray-700 font-inter">300–500L</p>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Medium */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-[#F56839] font-bold text-sm font-inter">Med</span>
                      </div>
                      <p className="text-sm text-gray-700 font-inter">600–800L</p>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Hard */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-[#A46FE3] font-bold text-sm font-inter">Hard</span>
                      </div>
                      <p className="text-sm text-gray-700 font-inter">900–1100L</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold mb-4 font-inter text-gray-900">Question Distribution</p>
                  <p className="mb-4 font-inter text-gray-700">The diagnostic includes a carefully balanced mix of items across difficulty levels:</p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-semibold font-inter text-gray-900 mb-2">Synonym Questions (67 total):</p>
                      <ul className="space-y-1 ml-4 font-inter text-gray-700">
                        <li>• 15 easy-level words</li>
                        <li>• 30 medium-level words</li>
                        <li>• 22 hard-level words</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-semibold font-inter text-gray-900 mb-2">Word-in-Context Questions (22 total):</p>
                      <ul className="space-y-1 ml-4 font-inter text-gray-700">
                        <li>• 6 easy-level passages</li>
                        <li>• 9 medium-level passages</li>
                        <li>• 6 hard-level passages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptive Logic */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Adaptive Logic</h3>
                <p className="text-base leading-relaxed mb-2 font-inter">
                  The onboarding diagnostic adjusts question difficulty dynamically based on the learner&apos;s responses:
                </p>

                <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                  <li>• <strong>Correct answer:</strong> The next item becomes slightly more difficult.</li>
                  <li>• <strong>Incorrect answer:</strong> The next item becomes slightly easier.</li>
                </ul>

                <p className="text-base leading-relaxed mb-2 font-inter">
                  This approach allows the diagnostic to quickly converge on an accurate estimate of the learner&apos;s vocabulary level within a short session.
                </p>

                <div className="p-4 rounded-lg mb-3 bg-gray-50">
                  <p className="font-semibold mb-2 font-inter">Item Response Theory (IRT)</p>
                  <p className="font-inter">
                    The adaptive sequence is powered by Item Response Theory (IRT), a widely used model in educational assessment that estimates learner ability based on both item difficulty and item characteristics.
                  </p>
                </div>

                <p className="text-base leading-relaxed mb-2 font-inter">
                  Each word is tagged with properties such as <strong>Lexile level, word frequency, word length, and age of acquisition</strong>. These attributes enable the adaptive model to make statistically grounded, pedagogically meaningful adjustments in real time.
                </p>

                <p className="text-base leading-relaxed font-inter">
                  The full diagnostic session runs for approximately <strong>138 seconds (2 minutes 18 seconds)</strong>, including transition animations, ensuring players have about 2 minutes of active response time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Game Specifications */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Section Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">
                Game Specifications
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Structure */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Structure</h3>
                <ul className="space-y-1.5 ml-4 font-inter">
                  <li>• Questions alternate in a repeating pattern: 5 synonym → 1 word-in-context</li>
                  <li>• Average: 18+ questions completed in 2 minutes</li>
                </ul>
              </div>

              {/* Timing */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Timing</h3>
                <ul className="space-y-1.5 ml-4 font-inter">
                  <li>• Players have 5 seconds per question.</li>
                  <li>• Faster answers preserve unused time, allowing more questions to be answered.</li>
                  <li>• No answer within 5 seconds counts as a miss, and the next question begins automatically.</li>
                </ul>
              </div>

              {/* Mechanics */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Mechanics</h3>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <ul className="space-y-1.5 ml-4 font-inter">
                    <li>• The player character, Roxy, runs along a 3-lane track.</li>
                    <li>• For each question:</li>
                    <li className="ml-6">• Target word or context sentence appears at the top.</li>
                    <li className="ml-6">• After 1 second, three options appear (one per lane).</li>
                    <li className="ml-6">• To answer, players tap the word they want to choose. Roxy immediately switches to that lane.</li>
                  </ul>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/diagnostic/figure1.png"
                      alt="Gameplay Mechanics - 3-lane track with Roxy character and answer options"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Feedback</h3>
                <p className="text-base leading-relaxed mb-4 text-gray-900 font-inter">
                  Immediate visual and audio feedback helps players stay engaged and understand their progress. There are three feedback states: Correct, Incorrect, and Missed.
                </p>

                {/* Correct Feedback */}
                <div className="mb-6">
                  <h4 className="text-base font-bold text-gray-900 mb-3 font-inter">Correct Feedback</h4>

                  <div className="mb-4">
                    <p className="mb-3 text-gray-700 font-inter">Shared elements:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• Brick&apos;s face icon with a green checkmark</li>
                        <li>• Selected word turns green</li>
                      </ul>
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• Green vignette glow around the screen</li>
                        <li>• Uplifting cheer or celebration sound</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure2.png"
                        alt="Correct feedback - Synonym matching"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure3.png"
                        alt="Correct feedback - Word-in-context"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-gray-700 font-inter">Behavior by question type:</p>
                    <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                      <li>• Synonym matching: The chosen word rises beneath the prompt.</li>
                      <li>• Word-in-context: The chosen word rises and fills the blank correctly.</li>
                    </ul>
                  </div>
                </div>

                {/* Incorrect Feedback */}
                <div className="mb-6">
                  <h4 className="text-base font-bold text-gray-900 mb-3 font-inter">Incorrect Feedback</h4>

                  <div className="mb-4">
                    <p className="mb-3 text-gray-700 font-inter">Shared elements:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• Brick&apos;s face icon with a red crossmark</li>
                        <li>• Selected word turns red</li>
                      </ul>
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• Red vignette glow around the screen</li>
                        <li>• Sympathetic &quot;aww&quot; sound</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure4.png"
                        alt="Incorrect feedback - Synonym matching"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure5.png"
                        alt="Incorrect feedback - Word-in-context"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-gray-700 font-inter">Behavior by question type:</p>
                    <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                      <li>• Synonym matching: The chosen word rises beneath the prompt but is marked incorrect.</li>
                      <li>• Word-in-context: The chosen word rises but fails to fill the blank.</li>
                    </ul>
                  </div>
                </div>

                {/* Missed Feedback */}
                <div className="mb-6">
                  <h4 className="text-base font-bold text-gray-900 mb-3 font-inter">Missed Feedback</h4>

                  <div className="mb-3">
                    <p className="mb-2 text-gray-700 font-inter">If the timer runs out before a response:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• All options slide past the player and disappear</li>
                        <li>• The unselected word hits the player character, causing Roxy to stumble</li>
                        <li>• Brick&apos;s face icon with a red crossmark</li>
                      </ul>
                      <ul className="space-y-1.5 ml-4 text-gray-700 font-inter">
                        <li>• Red vignette glow around the screen</li>
                        <li>• Sympathetic &quot;aww&quot; sound</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure6.png"
                        alt="Missed feedback - Synonym matching"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure7.png"
                        alt="Missed feedback - Word-in-context"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Flow */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">Game Flow</h2>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Character Spotlight: Brick & Roxy */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Character Spotlight: Brick & Roxy</h3>
                <p className="text-base leading-relaxed mb-3 font-inter">
                  To ensure a consistent tone across the Word Tag experience, the onboarding diagnostic features two established characters: Brick and Roxy. These characters guide players into the diagnostic and appear throughout the gameplay experience.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Brick</h4>
                    <p className="text-gray-700 mb-4 font-inter">
                      A sporty and enthusiastic hippo who thrives on competition and physical activity. Brick brings energy and confidence to fast-paced moments, balanced by a sincere, trusting, and lighthearted personality.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure8.png"
                        alt="Brick character spotlight"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Roxy</h4>
                    <p className="text-gray-700 mb-4 font-inter">
                      A bold and curious fox with a zest for life. She jumps into new situations without hesitation and balances courage with creativity and determination, maintaining a thoughtful, compassionate streak.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/diagnostic/figure9.png"
                        alt="Roxy character spotlight"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Entry (First Login) */}
              <div>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Entry (First Login)</h3>
                    <ul className="space-y-1.5 ml-4 font-inter">
                      <li>• When new users log into Word Tag for the first time, during onboarding, the diagnostic launches automatically.</li>
                      <li>• Brick welcomes players with an enthusiastic greeting and guides them into the diagnostic experience.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg overflow-hidden w-full md:w-1/2 flex-shrink-0">
                    <Image
                      src="/diagnostic/figure10.png"
                      alt="First login welcome screen with Brick"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Game Tutorial */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Game Tutorial</h3>
                <p className="text-base leading-relaxed mb-2 font-inter">
                  After the welcome screen, players click &quot;Let&apos;s go&quot; to enter the Game Tutorial interface where Brick introduces:
                </p>

                <div className="grid md:grid-cols-3 gap-3 mb-4">
                  <div className="font-inter">
                    <span className="text-[#A46FE3] text-xl font-bold">•</span> <span className="text-gray-900">How to answer synonym-matching questions</span>
                  </div>
                  <div className="font-inter">
                    <span className="text-[#A46FE3] text-xl font-bold">•</span> <span className="text-gray-900">How to answer word-in-context questions</span>
                  </div>
                  <div className="font-inter">
                    <span className="text-[#A46FE3] text-xl font-bold">•</span> <span className="text-gray-900">Interface elements like the timer progress bar</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-2 font-inter">
                  The tutorial ends with a clear prompt to begin.
                </p>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/diagnostic/figure11.png"
                      alt="Tutorial - Synonym matching"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/diagnostic/figure12.png"
                      alt="Tutorial - Word-in-context"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/diagnostic/figure13.png"
                      alt="Tutorial - Timer interface"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Countdown */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Countdown</h3>
                <p className="text-base leading-relaxed font-inter">
                  A 3-second countdown signals the start of the session.
                </p>
              </div>

              {/* Gameplay */}
              <div>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Gameplay</h3>
                    <ul className="space-y-1.5 ml-4 font-inter">
                      <li>• Questions follow a repeating pattern of 5 synonym questions followed by 1 word-in-context question.</li>
                      <li>• Players tap a word to select their answer; Roxy moves to that lane automatically.</li>
                      <li>• Immediate feedback is provided after each response.</li>
                      <li>• Each question allows up to 5 seconds, with unused time rolling over to allow more total questions within the 2-minute limit.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg overflow-hidden w-full md:w-1/2 flex-shrink-0">
                    <Image
                      src="/diagnostic/figure14.png"
                      alt="Active gameplay session"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Completion & Rewards */}
              <div>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Completion & Rewards</h3>
                    <p className="text-base leading-relaxed mb-2 font-inter">
                      At the end of the session, a summary screen displays:
                    </p>
                    <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                      <li>• Total questions answered correctly</li>
                      <li>• Notification of earned rewards</li>
                    </ul>
                    <p className="text-base leading-relaxed font-inter">
                      Players return to the plaza where rewards become available.
                    </p>
                  </div>

                  <div className="rounded-lg overflow-hidden w-full md:w-1/2 flex-shrink-0">
                    <Image
                      src="/diagnostic/figure15.png"
                      alt="Completion and rewards screen"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testing & Iteration */}

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">
                User Testing & Iteration
              </h2>
            </div>

            {/* Right Column - Intro Text */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-base leading-relaxed font-inter text-gray-700">
                To validate and refine the diagnostic design, we conducted two rounds of user testing with child participants, focusing on gameplay flow and pacing, Cognitive Load, Feedback Effectiveness, Engagement & Motivation, Timing Appropriateness, and Reward Clarity.
              </p>
            </div>

            {/* ✅ User Testing Image (独占一行，占满整宽度) */}
            <div className="md:col-span-3 rounded-lg overflow-hidden">
              <Image
                src="/user-testing.png"
                alt="User testing sessions overview"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Prototype Scope */}
            <div className="md:col-span-2 md:col-start-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">
                  Prototype Scope
                </h3>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  All testing was conducted using a standalone HTML prototype that represented a minimum viable version of the diagnostic experience. This prototype simulated the core interaction flow, game mechanics, and feedback system without integrating into the full Word Tag game. This allowed the team to evaluate the assessment in a controlled environment.
                </p>
                <p className="text-base leading-relaxed font-inter text-gray-700">
                  For more details, see the prototype site:{' '}
                  <a
                    href="https://lexplorehq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    lexplorehq.com
                  </a>
                </p>
              </div>

              {/* Round 1 Testing */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Round 1 Testing</h3>
                <ul className="space-y-1.5 mb-3 font-inter text-gray-700">
                  <li>• Questions completed: 14-25 per participant</li>
                  <li>• Average response time: 2-5 seconds, with noticeable hesitation on confusing items</li>
                </ul>

                <p className="mb-2 font-inter text-gray-700">Key observations:</p>
                <ul className="space-y-1.5 mb-4 font-inter text-gray-700 ml-4">
                  <li>• Distractors caused hesitation and confusion</li>
                  <li>• Some participants spent too long on single questions</li>
                  <li>• Time pressure reduced motivation after mistakes</li>
                </ul>

                <p className="mb-2 font-inter text-gray-700">Design updates implemented after Round 1:</p>
                <ul className="space-y-1.5 font-inter text-gray-700 ml-4">
                  <li>1. Distractor Redesign: Adopted the research-based framework (synonym, antonym, near-miss) to reduce confusion</li>
                  <li>2. Time Management: Introduced 5-second soft limits per question with rollover time for quick responses</li>
                  <li>3. Enhanced Feedback: Improved visual cues for clearer positive/negative reinforcement</li>
                </ul>
              </div>

              {/* Round 2 Testing */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Round 2 Testing</h3>
                <ul className="space-y-1.5 mb-3 font-inter text-gray-700">
                  <li>• Questions completed: 25-39 per participant (significant improvement)</li>
                  <li>• Average response time: Consistent 2-4 seconds, indicating better flow</li>
                </ul>

                <p className="mb-2 font-inter text-gray-700">Key observations:</p>
                <ul className="space-y-1.5 mb-4 font-inter text-gray-700 ml-4">
                  <li>• Improved pacing and consistency</li>
                  <li>• Increased familiarity with the question formats over time</li>
                  <li>• Stronger engagement and interest in replaying the diagnostic</li>
                </ul>

                <p className="mb-2 font-inter text-gray-700">Refinements identified for future consideration:</p>
                <ul className="space-y-1.5 mb-3 font-inter text-gray-700 ml-4">
                  <li>• Further adjust audio feedback to reduce repetition</li>
                  <li>• Increase feedback visibility across devices</li>
                  <li>• Explore device-specific optimizations for mobile gameplay (phones and tablets) during future pilot tests</li>
                </ul>

                <p className="text-base leading-relaxed font-inter text-gray-700 ml-4">
                  For the detailed user testing result report, see the <em>Diagnostic User Testing Comparison Report</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Team Collaboration */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Left Column - Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">Team Collaboration</h2>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-2">
              <p className="text-base leading-relaxed font-inter text-gray-700">
                Our team maintained regular communication and structured planning sessions to ensure alignment, track progress, and iterate on design decisions collaboratively. Regular meetings with team members, faculty advisors, and clients ensured continuous feedback and alignment throughout the design process.
              </p>
            </div>
          </div>

          {/* Team Collaboration Image - Full Width */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/team-meeting.png"
              alt="Team collaboration including meetings, Trello project management, and weekly planning"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Word Fair Content Component
function WordFairContent() {
  return (
    <div className="font-inter">
      {/* Project Overview */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Section Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">Overview</h2>
            </div>

            {/* Right Column - All Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Introduction */}
              <div>
                <p className="text-base leading-relaxed font-inter text-gray-700">
                  Word Fair is a game-based assessment experience for Word Tag, a vocabulary learning game by Mrs. Wordsmith. Unlike the onboarding diagnostic, which estimates a learner&apos;s starting level, Word Fair measures vocabulary growth over time and gives teachers actionable progress data.
                </p>
              </div>

              {/* The Problem */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">The Problem</h3>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  Word Tag currently operates in two modes:
                </p>
                <ul className="space-y-1.5 ml-4 mb-3">
                  <li className="font-inter text-gray-700">• Home mode: Learners subscribe and play independently.</li>
                  <li className="font-inter text-gray-700">• School mode: Teachers assign specific wordlists through a dashboard, and students practice those words through gameplay.</li>
                </ul>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  While the onboarding diagnostic gives a quick snapshot of a learner&apos;s starting level, there is no validated system to measure vocabulary growth or retention over time in either mode.
                </p>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  As a result:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li className="font-inter text-gray-700">• There is no lightweight, in-game way to periodically check progress.</li>
                  <li className="font-inter text-gray-700">• Teachers cannot see whether instruction is effective or which words need reinforcement.</li>
                  <li className="font-inter text-gray-700">• Students&apos; progress over time is not visible without external assessments.</li>
                </ul>
              </div>

              {/* The Opportunity */}
              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">The Opportunity</h3>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  Word Fair presents an opportunity to transform vocabulary progress tracking into an engaging, low-pressure game experience. Designed to run twice per wordlist, once before and once after. Word Fair turns vocabulary assessment into a fun, carnival-style event where learners rotate through six mini-games, each targeting a specific vocabulary skill.
                </p>

                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  This playful format benefits both students and teachers. Students get to demonstrate what they&apos;ve learned in a motivating, reward-driven setting. Teachers gain actionable data without needing to create or administer extra tests. Progress is tracked automatically, aligned with instructional goals, and tied directly to gameplay.
                </p>

                <p className="text-base leading-relaxed font-inter text-gray-700">
                  In addition to supporting classroom instruction, Word Fair also offers meaningful benefits for subscription-based learners at home, allowing them to track their own progress and celebrate learning milestones through engaging gameplay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools & Process */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">Design Tools & Process</h2>

          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/Figma Design & Miro Brainstorm2.png"
              alt="Figma Design & Miro Brainstorm"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Word Fair Design */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Sticky Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">
                Word Fair Design
              </h2>
            </div>

            {/* Right Column - All Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-base leading-relaxed font-inter text-gray-700">
                We are exploring a future assessment day model, a richer, event-based assessment experience that temporarily replaces regular Word Tag gameplay for one session (approx. 20 minutes).
              </p>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-space-grotesk">Word Fair Flow</h3>
                <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                  This section outlines the full game flow of the assessment experience, from entry to gameplay actions and completion logic. For detailed design, please refer to the <em>Word Fair Mockup & Prototype</em> and <em>Mini Games Mockup & Prototype</em>.
                </p>

                {/* Triggering Word Fair */}
                <div className="mb-3">
                  <h4 className="text-base font-bold text-gray-800 mb-2 font-inter">Triggering Word Fair (Prior day)</h4>
                  <ul className="space-y-1.5 ml-4 mb-3 font-inter text-gray-700">
                    <li>• Assessment Day is automatically triggered twice for each assignment or wordlist provided through the Word Tag dashboard: once as a pre-test before the assignment begins, and once as a post-test after it ends.</li>
                    <li>• When an Word Fair is scheduled for the next play session, Word Tag will build anticipation by ending the current session with a fun in-game message (Figure 1 & 2)</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure1.png"
                        alt="Well Done completion message"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 1</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure2.png"
                        alt="Surprise Word Fair announcement"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 2</p>
                    </div>
                  </div>
                </div>

                {/* Entering Word Fair */}
                <div className="mb-3">
                  <h4 className="text-base font-bold text-gray-800 mb-2 font-inter">Entering the Word Fair (Day-of)</h4>

                  <h5 className="text-sm font-bold text-[#F56839] mb-2 font-inter">Arrival in the Word Tag Plaza</h5>
                  <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                    <li>• On Word Fair Day, players start in the regular Word Tag plaza. They spot a decorated "Word Fair" booth with Plato standing in front. Here, players are introduced to the concept of tickets: rewards they can earn by playing games at the fair, which can later be used to unlock special items.</li>
                    <li>• When the player confirms ("Let's go!"), they pass through the booth's portal and are transported into the Word Fair grounds (Figure 3).</li>
                  </ul>

                  <div className="mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/wordfair/figure3.png"
                      alt="Arrival in Word Tag Plaza"
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">Figure 3</p>
                  </div>

                  <h5 className="text-sm font-bold text-[#F56839] mb-2 font-inter">Exploring the Grounds</h5>
                  <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                    <li>• Once inside, players see a vibrant fairground dotted with game booths.</li>
                    <li>• Players can wander freely between booths in any order. As they approach a booth, they can interact with it to see what it's about before deciding to join. (Figure 4)</li>
                  </ul>

                  <div className="mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/wordfair/figure4.png"
                      alt="Exploring the fairground"
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">Figure 4</p>
                  </div>
                </div>

                {/* Mini-Game Circuit */}
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-[#F56839] mb-2 font-inter">Mini-Game Circuit</h4>
                  <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                    <li>• Each booth hosts one mini-game (e.g. Eating Contest, Pop the Balloon, Dunk Tank, Whack a Mole, Shooting, Higher Striker).</li>
                    <li>• Players may play each game <strong>once only</strong>. After completing a booth, the stall "closes" and a summary panel appears, showing tickets won and inviting them to move on.</li>
                  </ul>

                  <div className="mb-3">
                    <p className="font-semibold mb-2 font-inter text-[#F56839]">Round Summary</p>
                    <p className="ml-4 mb-2 font-inter">"Nice work! You earned <strong>48 tickets</strong> in this game. Let's head to the next booth!" (Figure 5)</p>
                    <p className="ml-4 mb-3 font-inter text-gray-700">Final Booth Summary (Figure 6)</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure5.png"
                        alt="Round summary"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 5</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure6.png"
                        alt="Final booth summary"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 6</p>
                    </div>
                  </div>
                </div>

                {/* Prize Redemption */}
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-[#F56839] mb-2 font-inter">Prize Redemption</h4>
                  <ul className="space-y-1.5 ml-4 mb-3 font-inter">
                    <li>• At the end of the session, players visit the <strong>Prize Booth</strong>. (Figure 7)</li>
                    <li>• They use their tickets to redeem <strong>exclusive carnival-themed items</strong>, such as:</li>
                    <li className="ml-6">○ Hats, glasses, accessories</li>
                    <li className="ml-6">○ Themed outfits like a hoodie that says "King of Words"</li>
                    <li className="ml-6">○ Limited-time emoji stickers or profile flair</li>
                    <li>• Before wrapping up, players see a final reminder that <strong>tickets are Word Fair only</strong>. A prompt appears informing players that any unused tickets will expire once they leave the event. (Figure 8)</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure7.png"
                        alt="Prize redemption"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 7</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure8.png"
                        alt="Ticket expiry reminder"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 8</p>
                    </div>
                  </div>
                </div>

                {/* Wrap-Up & Transition */}
                <div className="mb-3">
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div>
                      <h4 className="text-sm font-bold text-[#F56839] mb-2 font-inter">Wrap-Up & Transition</h4>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• After spending their tickets, players get a final message:</li>
                        <li className="ml-4">"Well done! You showed off your word power. Rest up—new words await tomorrow! See you next time!"</li>
                        <li>• Tapping "All right!" returns the player to the regular Word Tag map for the next session. (Figure 9)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/figure9.png"
                        alt="Final wrap-up message"
                        width={1200}
                        height={800}
                        quality={100}
                        priority
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Figure 9</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Game Specifications */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Left Column - Section Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">Mini-Game Specifications</h2>
            </div>

            {/* Right Column - Description */}
            <div className="md:col-span-2">
              <p className="text-base leading-relaxed font-inter text-gray-700">
                Each game is designed to assess a different aspect of vocabulary knowledge in an engaging and accessible way.
              </p>
            </div>
          </div>

          {/* Eating Contest - Synonym */}
          <div className="mb-20">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Eating Contest - Synonym</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/eating-intro.png"
                    alt="Eating Contest - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4" style={{ marginTop: '0' }}>
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Across several fast-paced rounds, Plato the platypus lines up three pies, each labeled with a different word. A target word appears above the table, and Roxy the fox picks the pie whose label is a true synonym. No selection earns 0 tickets. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: Roxy gleefully eats the pie while a "+5 tickets" badge floats up. Speech bubbles pop up: "Served hot and correct!" "Now that's a flavor match!"</li>
                        <li>• Sound: Fun munching or "yummy" chime.</li>
                        <li>• Outcome: +5 tickets, then the next round begins.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: Plato flings the pie right into Roxy's face with a splat, as he taunts: "Back of the line, rookie!" "Try again, pie-brain!"</li>
                        <li>• Sound: Pie-smash smack.</li>
                        <li>• Outcome: 0 tickets, then the next round begins.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/eating-correct.png"
                        alt="Eating Contest - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/eating-incorrect.png"
                        alt="Eating Contest - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Synonym selection tasks reinforce learners' ability to map precise meanings across related words, a skill first introduced in the onboarding diagnostic. By re-engaging learners with a familiar format, this task is designed to support deeper semantic understanding, strengthen vocabulary networks, and encourage flexible word use in varied real-world contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pop the Balloon - WIC */}
          <div className="mb-20">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Pop the Balloon - WIC</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/balloon-intro.png"
                    alt="Pop the Balloon - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4" style={{ marginTop: '0' }}>
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Across several rounds, learners read a sentence with a blank and then throw a single dart at one of three floating balloons—each labeled with a different word—to complete the sentence. No other on-screen areas respond to the dart. If no dart lands in a balloon, the round ends with 0 tickets. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The chosen balloon pops in a satisfying burst, and a "+5 ticket" badge floats upward.</li>
                        <li>• Sound: A crisp pop effect.</li>
                        <li>• Outcome: +5 tickets added, then the next round begins.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The tapped balloon gently deflates.</li>
                        <li>• Sound: A soft deflate hiss.</li>
                        <li>• Outcome: 0 tickets, then the next round begins.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/balloon-correct.png"
                        alt="Pop the Balloon - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/balloon-incorrect.png"
                        alt="Pop the Balloon - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Word-in-Context items powerfully reveal not just if learners know a word, but how well they can use contextual clues to infer meaning, making them a sensitive measure of deep vocabulary knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dunk Tank - Definition Matching */}
          <div className="mb-20">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Dunk Tank - Definition Matching</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/dunk-intro.png"
                    alt="Dunk Tank - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4" style={{ marginTop: '0' }}>
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Over several rounds, learners read a definition or phrase and toss a single ball at one of three labeled targets that matches the definition. Only hits on the word-targets register; misses or off-target throws end the round with 0 tickets. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The ball hits the target and the bogart is knocked off, dropping straight into the water with a terrified look. A "+5 tickets" badge bubbles up.</li>
                        <li>• Sound: A solid splash followed by cheerful chimes.</li>
                        <li>• Outcome: +5 tickets, then the next round begins.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The bogart remains on the tank, arms folded, with speech bubbles taunting ("You'll never dunk me!" "Is that the best you've got?").</li>
                        <li>• Sound: A teasing laugh.</li>
                        <li>• Outcome: 0 tickets, then the next round begins.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/dunk-correct.png"
                        alt="Dunk Tank - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/dunk-incorrect.png"
                        alt="Dunk Tank - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    This game uses definition matching questions to strengthen learners' ability to recognize and recall word meanings. By asking learners to connect a definition or description to the correct word, the activity encourages deeper vocabulary understanding and reinforces semantic knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shooting - Picture Matching */}
          <div className="mb-20">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Shooting - Picture Matching</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/shooting-intro.png"
                    alt="Shooting - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4" style={{ marginTop: '0' }}>
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Over several rounds, a word prompt appears at the top of the screen with three picture-boards below. Players fire one shot at the board whose image best matches the word. Only hits on those picture-boards register; shots elsewhere or misses earn 0 tickets. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The chosen board falls away and a "+5 tickets" badge floats up.</li>
                        <li>• Sound: A cheerful ding.</li>
                        <li>• Outcome: +5 tickets, then the next round begins.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The shot ricochets off the board, which stays in place.</li>
                        <li>• Sound: A soft bounce.</li>
                        <li>• Outcome: 0 tickets, then the next round begins.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/shooting-correct.png"
                        alt="Shooting - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/shooting-incorrect.png"
                        alt="Shooting - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Matching words to images reinforces learners' ability to link vocabulary form with meaning across modalities, strengthening concept recognition and recall.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Whack a Mole - Odd One's Out */}
          <div className="mb-12">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Whack a Mole - Odd One&apos;s Out</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/mole-intro.png"
                    alt="Whack a Mole - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4">
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Over several rounds, three moles pop up and down on the screen, each holding a different word. Exactly one of the three is semantically unrelated to the others. Players have one chance per round to tap the odd-one-out: only the word-bearing moles are clickable. If no selection is made within 5 seconds, a "Time's up" screen appears and the round ends with 0 tickets awarded. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The tapped mole is whacked and drops out of view, while a "+5 ticket" badge floats upward.</li>
                        <li>• Sound: A satisfying whack effect followed by a sparkle chime.</li>
                        <li>• Outcome: +5 tickets added to the player's total, then the next round begins.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect or Time's Up</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: The mole stays visible and lets out a playful laugh.</li>
                        <li>• Sound: A brief giggle.</li>
                        <li>• Outcome: 0 tickets, then the next round begins.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/mole-correct.png"
                        alt="Whack a Mole - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/mole-incorrect.png"
                        alt="Whack a Mole - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Semantic reasoning tasks like Odd-One-Out help assess how vocabulary is organized, not just recognized. This supports conceptual development, helping learners build deep, connected word networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Higher Striker - Real Word vs. Pseudoword */}
          <div className="mb-12">
            {/* Left-Right Layout for Game Details */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Game Title and Intro Image */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-[#F56839] font-space-grotesk mb-3">Higher Striker – Real Word vs. Pseudoword</h3>
                <div className="rounded-lg overflow-hidden max-w-xs">
                  <Image
                    src="/wordfair/striker-intro.png"
                    alt="Higher Striker - Intro"
                    width={400}
                    height={267}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">Intro</p>
                </div>
              </div>

              {/* Right Column - Game Details */}
              <div className="md:col-span-2 space-y-4">
                {/* How It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#F56839] flex-shrink-0"></div>
                    <h4 className="text-base font-bold text-gray-900 font-inter">How It Works</h4>
                  </div>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Over several rounds, a word appears above the high-striker tower. The player taps YES (it's a real word) or NO (it's a fake word). After the choice, Brick lifts his hammer and swings at the yellow button at the base of the tower. On a correct answer, Brick hits the button and the player earns 5 tickets. On an incorrect answer or a miss, Brick doesn't hit the button and the player earns 0 tickets. (The total number of rounds may vary depending on the number of available items in the word list.)
                  </p>
                </div>

                {/* Feedback & Progression */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Feedback & Progression</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <p className="font-semibold mb-2 font-inter">Correct</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: Brick's hammer smashes the yellow button cleanly. All three yellow lights climb to the top of the tower as fireworks burst overhead. A "+5 tickets" badge floats up.</li>
                        <li>• Sound: A cheerful ding.</li>
                        <li>• Outcome: +5 ticket.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2 font-inter">Incorrect</p>
                      <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                        <li>• Visual: Brick swings and misses the button, triggering one of several humorous outcomes. He might drop the hammer on his foot, or another part of his body, make an exaggerated "oops" face, or hop and wince with a painful expression as the bottom light flashes red.</li>
                        <li>• Sound: Soft fail (A soft thud and a comical groan).</li>
                        <li>• Outcome: 0 ticket.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Feedback Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/striker-correct.png"
                        alt="Higher Striker - Correct feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Correct answer feedback</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/wordfair/striker-incorrect.png"
                        alt="Higher Striker - Incorrect feedback"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">Incorrect answer feedback</p>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-inter">Why It Matters</h4>
                  <p className="text-base leading-relaxed mb-2 font-inter text-gray-700">
                    Real/pseudoword decision tasks are better suited for ESL learners because they focus on word form recognition and decoding, which are foundational skills for second language acquisition. For native speakers, these tasks often suffer from a ceiling effect, as they can easily distinguish real words from pseud.
                  </p>
                  <p className="text-base leading-relaxed font-inter text-gray-700">
                    Therefore, we recommend prioritizing the first five question types for classroom-native learners while reserving this High Striker mechanic for regular app users or when the player's demographics indicates an ESL background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testing */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Sticky Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 font-space-grotesk sticky top-8">
                User Testing
              </h2>
            </div>

            {/* Right Column - All Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-base leading-relaxed font-inter text-gray-700">
                To evaluate the clarity, engagement, and usability of Word Fair's game mechanics, we conducted a Zoom-based user Interview with four native English-speaking children (ages 7–13). In each session, the facilitator presented six prototype mini-games, and participants were invited to interpret the gameplay, express their understanding, and share their reactions and preferences.
              </p>

              <p className="text-base leading-relaxed font-inter text-gray-700">
                (See the full details in the <em>Word Fair Game Mechanics User Interview Report</em>)
              </p>

              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Key Insights</h3>
                <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                  <li>• Most game mechanics were intuitive and perceived as fun.</li>
                  <li>• "Pop the Balloon" and "Higher Striker" were the most frequently named favorites.</li>
                  <li>• Visual and audio feedback were occasionally unclear, especially in "Eating Contest" and "Whack-a-Mole".</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#F56839] mb-3 font-space-grotesk">Priority Improvements Identified</h3>
                <ul className="space-y-1.5 ml-4 font-inter text-gray-700">
                  <li>• Clarify animations and feedback visuals in Eating Contest and Pop the Balloon.</li>
                  <li>• Improve feedback for ticket earning and accumulation across all mini-games.</li>
                  <li>• Ensure clickable areas are intuitive in Whack-a-Mole.</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed font-inter text-gray-700">
                This round of testing provided early validation of the Word Fair gameplay structure. While the sample size was limited, the study yielded preliminary formative insights to guide refinement in future design iterations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}