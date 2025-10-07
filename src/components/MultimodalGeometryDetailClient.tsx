'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface MultimodalGeometryDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function MultimodalGeometryDetailClient({ project, relatedProjects }: MultimodalGeometryDetailClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0e1321] text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl">
              {project.description}
            </p>

            {/* Role and Skills & Tools */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl">
              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-3">Role</h3>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((role, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-3">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12">
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

      {/* Abstract Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Abstract</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We study whether vision–language models can truly reason about geometry rather than merely label diagrams. On a MathVerse subset of multiple-choice problems, eight baselines—ranging from text-only LLMs to state-of-the-art VLMs—still struggle with fine-grained spatial relations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We introduce an iterative pipeline that alternates planning questions, VQA fact extraction, and belief-state reasoning. Without additional training, the full GPT-4o variant doubles baseline description quality and raises accuracy to 40%, while an open-weights Qwen version reaches 34%.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Results suggest that targeted visual querying, not larger language models alone, is the critical driver of geometric reasoning performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction & Problem Definition */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction & Problem Definition</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Multimodal technologies have demonstrated remarkable potential in tackling complex real-world tasks, leveraging their powerful capability to integrate visual and textual information. Our team investigated whether rapidly evolving vision-language models (VLMs) could yield breakthrough results when applied to geometric mathematical problems.
              </p>
              <p>
                Unlike typical text-based reasoning problems, geometry requires precise perception and reasoning about detailed structural and spatial relationships within images—such as points, lines, surfaces, geometric shape combinations, segment lengths, angle measurements, parallel or perpendicular relationships, shapes' containment and partitioning, overall symmetry, and spatial layouts.
              </p>
              <p>
                Our investigation revealed that even state-of-the-art models like GPT-4V and LLaVA-7B exhibit significant limitations in specific geometric image reasoning tasks, particularly in handling precise spatial details. Current datasets commonly provide geometric images, question texts, choices, and answers, but lack detailed, explicit, and structured geometric image descriptions.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Hypotheses</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Caption Benefit Hypothesis</h4>
                  <p className="text-gray-700">
                    Providing detailed and explicit image descriptions can significantly enhance model accuracy on geometric problems compared to using only raw images or text.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Task-Focused Caption Hypothesis</h4>
                  <p className="text-gray-700">
                    Descriptions specifically tailored to focus on visual features directly related to geometric problem-solving will more effectively improve model reasoning capabilities compared to general image descriptions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Proposed Model</h2>

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our proposed model extends the classic perception-reasoning split into an iterative three-component loop: <strong>Planner → VQA → Belief-state reasoning</strong>. The system can actively request missing geometric facts before committing to a final answer.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pipeline Components</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Planner LM</h4>
                        <p className="text-gray-700 text-sm">Generates follow-up queries based on the question and previous Q/A log</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">VQA Model</h4>
                        <p className="text-gray-700 text-sm">Answers queries about the diagram, extracting visual facts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Belief-state Builder</h4>
                        <p className="text-gray-700 text-sm">Maintains a structured transcript of all Q/A pairs for reasoning</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Reasoner LM</h4>
                        <p className="text-gray-700 text-sm">Produces final answer with chain-of-thought reasoning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Model Configurations Tested</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Pipeline</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Planner</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">VQA</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Reasoner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">P-1</td>
                        <td className="px-4 py-3">Mathstral-7B-v0.1</td>
                        <td className="px-4 py-3">InternLM-XC2-VL-7B</td>
                        <td className="px-4 py-3">Mathstral-7B-v0.1</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">P-2</td>
                        <td className="px-4 py-3">Qwen-Chat-7B</td>
                        <td className="px-4 py-3">Qwen-VL-Chat</td>
                        <td className="px-4 py-3">Qwen-Chat-7B</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">P-3</td>
                        <td className="px-4 py-3">GPT-3.5-Turbo</td>
                        <td className="px-4 py-3">GPT-4o-VQA</td>
                        <td className="px-4 py-3">GPT-3.5-Turbo</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-4 py-3 font-medium">P-4</td>
                        <td className="px-4 py-3">GPT-4o (text)</td>
                        <td className="px-4 py-3">GPT-4o (vision)</td>
                        <td className="px-4 py-3">GPT-4o (text)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Results</h2>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Findings</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                      40%
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">GPT-4o Pipeline Accuracy</h4>
                      <p className="text-gray-600 text-sm mt-1">Full GPT-4o pipeline achieved 40% accuracy with 4.00 CoT reasoning score and 2.86 description score</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                      34%
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Open-Weights Performance</h4>
                      <p className="text-gray-600 text-sm mt-1">Qwen→Qwen pipeline reached 34% accuracy, strongest open-weights alternative</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                      2×
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Description Quality Improvement</h4>
                      <p className="text-gray-600 text-sm mt-1">Iterative pipeline doubled baseline description quality scores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Baseline Comparison</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">GPT-4o (text-only)</span>
                    <span className="font-semibold text-gray-900">58%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Qwen2.5-VL</span>
                    <span className="font-semibold text-gray-900">52%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">GPT-4V</span>
                    <span className="font-semibold text-gray-900">44%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">GPT-3.5-turbo</span>
                    <span className="font-semibold text-gray-900">22%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Proposed Models</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b bg-blue-50 -mx-3 px-3 py-2">
                    <span className="text-gray-700 font-medium">GPT-4o Pipeline</span>
                    <span className="font-semibold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Qwen Pipeline</span>
                    <span className="font-semibold text-gray-900">34%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">GPT-3.5 + GPT-4o VQA</span>
                    <span className="font-semibold text-gray-900">16%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mathstral Pipeline</span>
                    <span className="font-semibold text-gray-900">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis & Limitations */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Analysis & Limitations</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Targeted visual querying, not larger language models alone, is the critical driver of geometric reasoning performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">The iterative pipeline successfully reduces uncertainty by actively requesting missing information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Chain-of-thought coherence scores correlate strongly with final accuracy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Identified Limitations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Meaningful Queries, Poor VQA Answers</h4>
                    <p className="text-gray-700 text-sm">The planner generates relevant questions, but VQA modules often provide incorrect responses, especially for fine-grained spatial cues.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hallucinated Geometric Relationships</h4>
                    <p className="text-gray-700 text-sm">VQA models frequently conflate inscribed with central angles, mistake perpendicular distances for radii, and misidentify baselines.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Contradiction Resolution</h4>
                    <p className="text-gray-700 text-sm">The system lacks mechanisms to detect or resolve inconsistent facts, allowing contradictions to accumulate.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dataset Gaps</h4>
                    <p className="text-gray-700 text-sm">Ground-truth annotations often omit implicit geometric constraints, limiting model training effectiveness.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Work */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Future Work</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Memory-Aware Retrieval</h3>
                <p className="text-gray-700 text-sm">Build a structured memory module to store Q-A pairs, enabling retrieval, updates, and contradiction resolution before reasoning.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Adaptive Query Stopping</h3>
                <p className="text-gray-700 text-sm">Monitor VQA uncertainty to halt question generation when marginal information gain is low, reducing inference costs.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">VQA Fine-tuning</h3>
                <p className="text-gray-700 text-sm">Fine-tune VQA models on re-annotated datasets with explicit tags for angles, lengths, and spatial relationships.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Prompt Refinement Loop</h3>
                <p className="text-gray-700 text-sm">Use LLMs to rewrite queries for clarity and geometric specificity before VQA processing.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
