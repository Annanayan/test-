'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface DDPMDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function DDPMDetailClient({ project, relatedProjects }: DDPMDetailClientProps) {
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
                    className="inline-flex items-center px-5 py-2.5 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
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

      {/* Abstract */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Abstract</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Diffusion models have emerged as a robust class of generative models, excelling in tasks like image synthesis, video generation, and text-to-image transformations. This project implements and evaluates Denoising Diffusion Probabilistic Models (DDPM) and Denoising Diffusion Implicit Models (DDIM), focusing on their ability to generate high-quality images.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Key components include the U-Net architecture for noise prediction, a DDPM noise scheduler for forward and reverse diffusion processes, and enhancements like Variational Autoencoders (VAE) for latent space mapping and Classifier-Free Guidance (CFG) for conditional image generation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The project evaluates model performance using Frechet Inception Distance (FID) and Inception Score (IS), analyzing both the fidelity and diversity of generated samples. Initial results indicate that DDPM effectively models noise-injection and denoising processes, while DDIM significantly accelerates inference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction & Motivation */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction & Motivation</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Diffusion models are a powerful class of generative models that have gained attention for their ability to generate high-quality and diverse data. These models function by progressively adding random noise to input data and then training a neural network to reverse the noise process step by step.
              </p>
              <p>
                The framework has seen widespread application in domains such as image synthesis, text-to-image generation, medical imaging, 3D object generation for gaming and VR, and many other fields.
              </p>
              <p>
                This study addresses the challenge of understanding and optimizing diffusion models for generative tasks, particularly image synthesis. The motivation stems from the growing demand for generative models that can efficiently produce high-quality outputs across a range of applications.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Input Datasets</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>CIFAR-10:</strong> 60,000 images (32×32) across 10 classes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>ImageNet-100:</strong> 131,689 images (128×128) across 100 classes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Applications</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Image synthesis and generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Text-to-image transformations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Medical imaging enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>3D object generation for gaming/VR</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Architecture */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Model Architecture & Methods</h2>

            <div className="space-y-8">
              {/* DDPM */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Denoising Diffusion Probabilistic Models (DDPM)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    The DDPM model serves as the foundational approach, modeling the gradual noise injection and removal processes using a U-Net architecture. The forward process gradually corrupts data by adding Gaussian noise across multiple time steps, while the reverse process learns to denoise step-by-step.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Progressive noise addition following a Markov chain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>U-Net architecture for noise prediction with skip connections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Time embedding for conditioning on diffusion step</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Trained with 1000 time steps, 1000 inference steps initially</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DDIM */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Denoising Diffusion Implicit Models (DDIM)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    DDIM introduces a deterministic, non-Markovian approach to accelerate sampling, achieving faster generation without compromising quality. This significantly reduces inference time from 1000 to 200 steps.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>80% reduction in sampling steps (1000 → 200)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Deterministic reverse process eliminates randomness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Maintains image quality comparable to DDPM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Significantly faster inference for practical applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VAE */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Variational Autoencoder (VAE) Integration</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    VAE integration compresses high-dimensional input data into a structured latent space, significantly reducing computational overhead while preserving essential features.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Encoder-decoder architecture reduces data dimensionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Gaussian-distributed latent space for efficient training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Enables faster and more scalable high-resolution generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Particularly effective for large-scale image synthesis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CFG */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Classifier-Free Guidance (CFG)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    CFG enhances conditional image generation by integrating conditional and unconditional training within a single model, eliminating the need for external classifiers.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Implementation:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Interpolates between conditional and unconditional score functions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Guidance scales tested from 3 to 6 for optimal balance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Provides flexible control over generation process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Improves sample quality and generation accuracy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experimental Results */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Experimental Results</h2>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Model</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">FID Score</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Inception Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DDPM (CIFAR)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">519</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1.2757, 1.0749</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DDPM (ImageNet)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">340</td>
                      <td className="px-6 py-4 text-sm text-gray-700">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DDIM (CIFAR)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">556</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1.4757, 1.0449</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DDIM (ImageNet)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">335</td>
                      <td className="px-6 py-4 text-sm text-gray-700">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">VAE</td>
                      <td className="px-6 py-4 text-sm text-gray-700">332</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1.357, 1.72</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DDPM + CFG</td>
                      <td className="px-6 py-4 text-sm text-gray-700">290</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1.33, 1.021</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">DDPM + VAE + CFG</td>
                      <td className="px-6 py-4 text-sm font-bold text-green-600">248.5</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">1.0849, 1.0610</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">248.5</div>
                <div className="text-sm text-gray-600">Best FID Score</div>
                <div className="text-xs text-gray-500 mt-1">DDPM + VAE + CFG</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Inference Speed-up</div>
                <div className="text-xs text-gray-500 mt-1">DDIM vs DDPM</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200</div>
                <div className="text-sm text-gray-600">Inference Steps</div>
                <div className="text-xs text-gray-500 mt-1">Reduced from 1000</div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Findings</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>DDPM + VAE + CFG achieved the best overall performance with FID score of 248.5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>DDIM successfully reduced inference time by 80% while maintaining comparable quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>VAE integration significantly reduced computational overhead for high-resolution images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>CFG provided flexible control and improved conditional generation accuracy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Future Work */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Challenges & Future Work</h2>

            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Initial Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Image Quality:</span>
                      <span className="text-gray-700 ml-2">Initial experiments produced blurry images, requiring parameter optimization and longer training</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Computational Cost:</span>
                      <span className="text-gray-700 ml-2">High computational requirements limited experimentation speed and scale</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">VAE Scaling:</span>
                      <span className="text-gray-700 ml-2">Encountered scaling issues during VAE experiments that required careful tuning</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Future Directions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Noise Scheduling</h4>
                    <p className="text-sm text-gray-700">Further exploration of cosine, sigmoid, and adaptive scheduling strategies for optimal performance</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Learned Variance</h4>
                    <p className="text-sm text-gray-700">Implementing learnable variance in Gaussian transitions for more flexible modeling</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Architecture Enhancements</h4>
                    <p className="text-sm text-gray-700">Exploring Diffusion Transformers (DiT) and larger U-Net architectures</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Extended Applications</h4>
                    <p className="text-sm text-gray-700">Applying to video generation, 3D synthesis, and medical imaging tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                This project successfully implemented and evaluated DDPM and DDIM, demonstrating their effectiveness in high-quality image generation. Our experiments revealed that combining DDPM with VAE and CFG achieves the best results, with FID score of 248.5.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The scaled linear noise schedule proved most effective for VAE configurations. DDIM achieved an impressive 80% reduction in inference time while maintaining quality, making it practical for real-world applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This study deepens understanding of diffusion model mechanisms and lays a foundation for further innovations in image synthesis, text-to-image generation, medical imaging, and other generative AI applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
