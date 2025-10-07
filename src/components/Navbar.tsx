'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar({ forceDarkText = false }: { forceDarkText?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/YanWang_resume.pdf', label: 'Resume', external: true, icon: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 border-b border-gray-100 backdrop-blur-sm'
          : isHovered
          ? 'bg-white/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className={`text-xl font-bold transition-colors font-nunito ${
                forceDarkText || isAboutPage ? 'text-gray-900' : (isScrolled || isHovered ? 'text-gray-900' : 'text-white')
              }`}
            >
              Yan Wang
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold transition-colors inline-flex items-center font-nunito ${
                      forceDarkText || isAboutPage ? 'text-gray-700 hover:text-gray-900' : (isScrolled || isHovered ? 'text-gray-700 hover:text-gray-900' : 'text-white')
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    {item.icon && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    )}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold transition-colors font-nunito ${
                      forceDarkText || isAboutPage ? 'text-gray-700 hover:text-gray-900' : (isScrolled || isHovered ? 'text-gray-700 hover:text-gray-900' : 'text-white')
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 hamburger-icon transition-colors ${
                forceDarkText || isAboutPage ? 'text-gray-700 hover:text-gray-900' : (isScrolled || isHovered ? 'text-gray-700 hover:text-gray-900' : 'text-white')
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-full h-0.5 bg-current block mb-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current block mb-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current block"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeInOut" }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3, ease: "easeInOut" }
            }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-nunito"
                  onClick={toggleMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center">
                    {item.label}
                    {item.icon && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    )}
                  </span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-nunito"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}