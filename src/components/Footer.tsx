'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1321] border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Section - Introduction (Half width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-left"
          >
            <h3 className="text-lg font-semibold text-white font-georgia mb-4">Hi, I'm Yan</h3>
            <motion.p
              className="text-gray-300 leading-relaxed font-georgia"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              I enjoy crafting products that feel clear, natural, and meaningful, tools people want to return to every day.
            </motion.p>
          </motion.div>

          {/* Right Section - Navigation and Connect (Half width, two columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 text-left"
            >
              <h3 className="text-sm font-semibold text-white tracking-wider font-georgia">Navigate</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-georgia">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-georgia">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="/YanWang_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors font-georgia"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Connect Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-left"
            >
              <h3 className="text-sm font-semibold text-white tracking-wider font-georgia">Connect</h3>
              <div className="space-y-4">
                <div className="space-y-3">
                  <a href="mailto:nmgwhmly@gmail.com" className="text-gray-400 hover:text-white transition-colors block text-sm font-georgia">
                    nmgwhmly@gmail.com
                  </a>
                  <a href="mailto:yanwangnmgwh@gmail.com" className="text-gray-400 hover:text-white transition-colors block text-sm font-georgia">
                    yanwangnmgwh@gmail.com
                  </a>

                  {/* YanSpace Logo moved here */}
                  <div className="flex items-center space-x-3 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Image
                        src="/YanSpace.png"
                        alt="YanSpace Logo"
                        width={32}
                        height={32}
                        className="shadow-lg"
                        style={{
                          boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.3)'
                        }}
                      />
                    </motion.div>
                    <span className="text-white font-medium font-georgia">YanSpace</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yan-wang-nmg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="mailto:nmgwhmly@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400 font-georgia">
            © {currentYear} Yan Wang. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}