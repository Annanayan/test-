'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollIndicator from './ScrollIndicator';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "Placeholder testimonial content here. This is where client feedback will be displayed.",
    author: "Client Name 1",
    role: "Position Title",
    company: "Company Name"
  },
  {
    quote: "Another placeholder testimonial that showcases the format and layout of client feedback.",
    author: "Client Name 2",
    role: "Position Title",
    company: "Company Name"
  },
  {
    quote: "Third testimonial placeholder demonstrating the carousel functionality and testimonial structure.",
    author: "Client Name 3",
    role: "Position Title",
    company: "Company Name"
  }
];

export default function Gallery() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <section id="gallery" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-georgia">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-georgia">
              Feedback from clients and collaborators I&apos;ve worked with
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="text-center">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <blockquote className="text-base md:text-lg text-gray-700 mb-4 font-georgia">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col items-center">
                    <cite className="not-italic font-semibold text-gray-900 font-georgia">
                      {testimonials[currentTestimonial].author}
                    </cite>
                    <p className="text-gray-500 text-sm font-georgia">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Scroll Indicator - Outside gradient background */}
      <div className="py-4 bg-transparent">
        <ScrollIndicator targetId="other-projects" />
      </div>
    </>
  );
}