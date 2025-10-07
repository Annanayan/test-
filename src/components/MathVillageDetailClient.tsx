'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useState } from 'react';

interface MathVillageDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  techDetails: string[];
  demoImage?: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, techDetails, demoImage, delay = 0 }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>

        {demoImage && (
          <div className="mb-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-2">{icon}</div>
                <p className="text-sm">Demo Preview Coming Soon</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <span>Technical Implementation</span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 p-4 bg-gray-50 rounded-lg"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Technical Implementation:</h4>
              <ul className="space-y-1">
                {techDetails.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureTechDetailsProps {
  techDetails: string[];
}

function FeatureTechDetails({ techDetails }: FeatureTechDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full mt-4">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center bg-[#3885D3] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>Technical Implementation</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-4 bg-white/30 rounded-lg text-left backdrop-blur-sm border border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)]"
        >
          <ul className="space-y-2">
            {techDetails.map((detail, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700 font-georgia">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

interface TechStackCardProps {
  category: string;
  technologies: { name: string; description: string; version?: string; icon?: React.ReactNode }[];
  delay?: number;
}

function TechStackCard({ category, technologies, delay = 0 }: TechStackCardProps) {
  const isFrontend = category.toLowerCase().includes('frontend');
  const isBackend = category.toLowerCase().includes('backend');
  const isDevTools = category.toLowerCase().includes('development tools') || category.toLowerCase().includes('deployment');
  const hoverBorderColor = isFrontend ? 'hover:border-[#3984D3] hover:shadow-[0_0_20px_rgba(57,132,211,0.5)]' : isBackend ? 'hover:border-[#FCB9FF] hover:shadow-[0_0_20px_rgba(252,185,255,0.5)]' : isDevTools ? 'hover:border-[#3984D3] hover:shadow-[0_0_20px_rgba(57,132,211,0.5)]' : 'hover:border-gray-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        scale: {
          duration: 0.3
        }
      }}
      className={`bg-white/10 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200/50 p-4 transition-all duration-300 ${hoverBorderColor}`}
    >
      <h3 className="text-lg font-bold text-white mb-4">{category}</h3>

      <div className="space-y-3">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
            {tech.icon && (
              <div className="flex-shrink-0 mt-0.5">
                {tech.icon}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-white">{tech.name}</h4>
                {tech.version && (
                  <span className="px-2 py-0.5 bg-white/20 text-gray-200 text-xs rounded-full">
                    v{tech.version}
                  </span>
                )}
              </div>
              <p className="text-gray-200 text-sm mt-1 leading-relaxed">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function MathVillageDetailClient({ project, relatedProjects }: MathVillageDetailClientProps) {
  const sections = [
    'Overview',
    'Problem Analysis',
    'Learning Science',
    'Core Features',
    'Architecture',
    'Tech Stack',
    'Deployment',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreFeatures = [
    {
      title: 'Home Page (Dashboard)',
      description: 'Real-time learning progress tracking and performance visualization',
      image: '/dashboard-preview.png',
      bullets: [
        'Displays daily streaks and motivational notes.',
        'Shows AI-generated progress reports and personalized insights.',
        'Keeps learners engaged and visually informed of progress.',
        'Includes gamified elements: unlockable skins, badges, and custom themes.'
      ],
      tags: [
        'UDL',
        'Guided Discovery',
        'Chunking',
        'Gamification'
      ],
      techDetails: [
        'Recharts data visualization library',
        'Real-time progress tracking with SQLite',
        'Performance metrics calculation algorithms',
        'Responsive chart components with React'
      ]
    },
    {
      title: 'Daily Review',
      description: 'Systematic review of learned concepts and error correction',
      image: '/review-preview.png',
      bullets: [
        'Generates review tasks based on each student\'s mistake history.',
        'Applies spaced retrieval principles to strengthen long-term memory.',
        'Focuses only on incorrect questions to reduce unnecessary repetition.',
        'AI-powered reminders ensure timely and efficient review.'
      ],
      tags: [
        'Spaced Retrieval',
        'Mastery Learning',
        'Guided Discovery',
        'Chunking'
      ],
      techDetails: [
        'Spaced repetition algorithm',
        'Error pattern analysis system',
        'Knowledge graph connections',
        'Performance improvement tracking'
      ]
    },
    {
      title: 'Daily Practice',
      description: 'Personalized math exercises with adaptive difficulty',
      image: '/practice-preview.png',
      bullets: [
        'Map-based interface: each topic appears as a colorful house with dots representing subtopics.',
        'Short, step-by-step practice sessions built with Voiceflow.',
        'Students earn points to unlock new levels.',
        'Designed for 15–20 minute microlearning to build daily habits.'
      ],
      tags: [
        'Scaffolding',
        'Chunking',
        'Immediate Feedback',
        'Multimodal Learning',
        'Cognitive Load Management',
        'UDL',
        'Guided Discovery'
      ],
      techDetails: [
        'Adaptive difficulty algorithm implementation',
        'Real-time answer validation system',
        'Progress tracking integration',
        'Topic-based exercise categorization'
      ]
    },
    {
      title: 'Math Stories',
      description: 'Learn mathematics through engaging storytelling',
      image: '/stories-preview.png',
      bullets: [
        'Animated, narrative-driven explanations of math concepts.',
        'Sparks curiosity and supports conceptual understanding.',
        'Leverages visuals and storytelling to enhance context-based learning.',
        'Content drafted by LLMs and refined by the content team.'
      ],
      tags: [
        'UDL',
        'Guided Discovery',
        'Multimodal Learning',
        'Cognitive Load Management'
      ],
      techDetails: [
        'Interactive story components with React',
        'Context-aware problem generation',
        'Engagement tracking analytics',
        'Narrative-based learning pathways'
      ]
    },
    {
      title: 'AI Assistant',
      description: '24/7 mathematical problem-solving with LaTeX rendering',
      image: '/ai-assistant-preview.png',
      bullets: [
        'A prompt-engineered, math-focused AI assistant.',
        'Offers clear, step-by-step explanations to students\' math questions.',
        'Functions like a patient, built-in tutor—no need to leave the platform.'
      ],
      tags: [
        'Self-Explanation',
        'UDL',
        'Help-Seeking Encouragement',
        'Mastery Learning',
        'Multimodal Learning',
        'Cognitive Load Management',
        'Immediate Feedback',
        'Chunking',
        'Scaffolding'
      ],
      techDetails: [
        'OpenAI GPT-5 integration for math tutoring',
        'KaTeX mathematical formula rendering',
        'Structured response parsing system',
        'Context-aware conversation handling'
      ]
    },
    {
      title: 'My Collection',
      description: 'Personal space for saving notes, reflections, and favorite content',
      image: '/collection-preview.png',
      bullets: [
        'Students can save favorite stories and posts.',
        'Write reflection notes to build metacognitive habits.',
        'Enables personalized review and recommendations.',
        'Reduces need to switch to external note-taking tools.'
      ],
      tags: [
        'Self-Explanation',
        'UDL',
        'Personalized Learning'
      ],
      techDetails: [
        'Personal content management system',
        'Note-taking with rich text editor',
        'Content bookmarking and tagging',
        'Reflection prompts and journaling'
      ]
    },
    {
      title: 'Community Plaza',
      description: 'Social learning space for sharing, discussions, and peer interactions',
      image: '/plaza-preview.png',
      bullets: [
        'A moderated space for posting, commenting, discussing math, and making friends through math.',
        'Fosters a sense of belonging and encourages consistent engagement.',
        'Promotes peer-to-peer support and knowledge sharing.'
      ],
      tags: [
        'Belonging',
        'Social Learning',
        'UDL',
        'Help-Seeking Encouragement'
      ],
      techDetails: [
        'Real-time messaging and discussions',
        'Content sharing and collaboration',
        'Peer support and mentoring system',
        'Community moderation tools'
      ]
    }
  ];

  const techStack = {
    frontend: {
      category: 'Frontend Development',
      technologies: [
        {
          name: 'React',
          version: '18.2.0',
          description: 'Component-based UI library for building interactive user interfaces',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9.11 4.71c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72z" fill="#61dafb"/>
            </svg>
          )
        },
        {
          name: 'TypeScript',
          version: '5.4.5',
          description: 'Strongly typed programming language that builds on JavaScript',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="3" fill="#3178c6"/>
              <path d="M13.5 16.8V18h4.5v-1.2h-1.5V8.4h1.5V7.2h-4.5v1.2h1.5v8.4h-1.5zM6 16.8V18h6v-1.2h-3.6v-2.4h2.4v-1.2H8.4V10.8h3.6V9.6H6v7.2z" fill="white"/>
            </svg>
          )
        },
        {
          name: 'Vite',
          version: '5.2.0',
          description: 'Next generation frontend build tool for lightning fast development',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M14.5 2L23.5 8.5 20 22 4 22 0.5 8.5 9.5 2z" fill="url(#vite-gradient)"/>
              <defs>
                <linearGradient id="vite-gradient" x1="12" y1="2" x2="12" y2="22">
                  <stop offset="0%" stopColor="#41d1ff"/>
                  <stop offset="100%" stopColor="#bd34fe"/>
                </linearGradient>
              </defs>
            </svg>
          )
        },
        {
          name: 'Tailwind CSS',
          version: '3.4.3',
          description: 'Utility-first CSS framework for rapid and responsive UI development',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06b6d4"/>
            </svg>
          )
        },
        {
          name: 'KaTeX',
          version: '0.16.22',
          description: 'Fast and high-quality mathematical formula rendering library',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="serif" fontStyle="italic">∫</text>
            </svg>
          )
        },
        {
          name: 'Recharts',
          version: '2.12.7',
          description: 'Composable and declarative charting library built on React components',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M3 17V21H7V17H3M10 7V21H14V7H10M17 3V21H21V3H17Z" fill="#8884d8"/>
            </svg>
          )
        },
        {
          name: 'Axios',
          version: '1.7.2',
          description: 'Promise-based HTTP client for browser and Node.js',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M17.5 4.5L15 2 9 8l-3-3-4.5 4.5L9 17l12-12z" fill="#5a29e4"/>
            </svg>
          )
        }
      ]
    },
    backend: {
      category: 'Backend Development',
      technologies: [
        {
          name: 'Node.js',
          version: '20.x',
          description: 'JavaScript runtime built on Chrome V8 engine for scalable server applications',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0l-1.89-1.12c-.06-.03-.12-.04-.18-.01-.49.27-.59.31-1.05.47-.12.04-.29.1.07.28l2.46 1.45c.24.14.5.2.78.2.27 0 .54-.06.78-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2" fill="#689f63"/>
            </svg>
          )
        },
        {
          name: 'Express.js',
          version: '5.1.0',
          description: 'Fast, minimalist web framework for building robust Node.js APIs',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="#ffffff"/>
            </svg>
          )
        },
        {
          name: 'SQLite',
          version: '9.6.0',
          description: 'Self-contained, serverless, zero-configuration SQL database engine',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M21.678 14.642c-1.513-1.583-2.98-3.077-4.545-4.455.517-.65 1.07-1.347 1.659-2.088 1.253-1.577 2.534-3.491 2.926-4.776.196-.642.288-1.842.175-2.484-.082-.467-.334-.838-.717-1.057-.383-.219-.802-.286-1.195-.195-.483.112-1.024.463-1.567 1.017-.543.553-.993 1.165-1.333 1.674-1.24 1.857-2.246 3.808-3.134 5.64-.817-.573-1.652-1.126-2.506-1.656-.855-.53-1.731-1.038-2.624-1.519-.893-.48-1.804-.934-2.729-1.357-.925-.423-1.865-.814-2.812-1.169-1.004-.376-1.864-.576-2.621-.612-.593-.028-1.149.062-1.656.268-.507.206-.965.527-1.358.955-.393.427-.709.936-.941 1.514-.232.578-.38 1.222-.44 1.913-.03.344-.031.695-.005 1.047.054.704.194 1.405.418 2.082.224.677.534 1.33.921 1.943.387.613.851 1.186 1.379 1.703 1.057 1.035 2.288 1.824 3.562 2.465 1.274.641 2.591 1.134 3.894 1.546 1.303.412 2.593.742 3.835 1.044 1.242.302 2.437.576 3.555.85 1.118.274 2.159.549 3.098.837.939.288 1.776.59 2.486.917.71.327 1.294.679 1.736 1.065.442.386.743.804.895 1.265.152.461.156.963.014 1.51-.142.547-.433 1.137-.866 1.774-.433.637-1.008 1.323-1.717 2.061-.709.738-1.552 1.528-2.519 2.373l.707.707c1.022-.892 1.909-1.713 2.654-2.463.745-.75 1.348-1.429 1.805-2.032.457-.603.769-1.129.935-1.576.166-.447.187-.816.063-1.107-.124-.291-.396-.504-.816-.638-.42-.134-.963-.19-1.628-.168-.665.022-1.452.12-2.361.295-.909.175-1.94.427-3.091.755-1.151.328-2.423.734-3.815 1.217-1.392.483-2.905 1.043-4.538 1.68-1.633.637-3.386 1.352-5.258 2.144-1.872.792-3.863 1.661-5.973 2.608l.383.924c2.11-.947 4.1-1.816 5.972-2.608 1.872-.792 3.625-1.507 5.258-2.144 1.633-.637 3.146-1.197 4.538-1.68 1.392-.483 2.664-.889 3.815-1.217 1.151-.328 2.182-.58 3.091-.755.909-.175 1.696-.273 2.361-.295.665-.022 1.208.034 1.628.168.42.134.692.347.816.638.124.291.103.66-.063 1.107-.166.447-.478.973-.935 1.576-.457.603-1.06 1.282-1.805 2.032-.745.75-1.632 1.571-2.654 2.463l.707.707c.967-.845 1.81-1.635 2.519-2.373.709-.738 1.284-1.424 1.717-2.061.433-.637.724-1.227.866-1.774.142-.547.138-1.049-.014-1.51-.152-.461-.453-.879-.895-1.265-.442-.386-1.026-.738-1.736-1.065-.71-.327-1.547-.632-2.486-.917-.939-.288-1.98-.563-3.098-.837-1.118-.274-2.313-.548-3.555-.85-1.242-.302-2.532-.632-3.835-1.044-1.303-.412-2.62-.905-3.894-1.546-1.274-.641-2.505-1.43-3.562-2.465-.528-.517-.992-1.09-1.379-1.703-.387-.613-.697-1.266-.921-1.943-.224-.677-.364-1.378-.418-2.082-.026-.352-.025-.703.005-1.047.06-.691.208-1.335.44-1.913.232-.578.548-1.087.941-1.514.393-.428.851-.749 1.358-.955.507-.206 1.063-.296 1.656-.268.757.036 1.617.236 2.621.612.947.355 1.887.746 2.812 1.169.925.423 1.836.877 2.729 1.357.893.481 1.769.989 2.624 1.519.854.53 1.689 1.083 2.506 1.656-1.753 3.628-3.533 7.246-5.338 10.854l.924.383c1.805-3.608 3.585-7.226 5.338-10.854.888-1.832 1.894-3.783 3.134-5.64.34-.509.79-1.121 1.333-1.674.543-.554 1.084-.905 1.567-1.017.393-.091.812-.024 1.195.195.383.219.635.59.717 1.057.113.642.021 1.842-.175 2.484-.392 1.285-1.673 3.199-2.926 4.776-.589.741-1.142 1.438-1.659 2.088 1.565 1.378 3.032 2.872 4.545 4.455l.707-.707z" fill="#003b57"/>
            </svg>
          )
        },
        {
          name: 'OpenAI API',
          version: '5.22.0',
          description: 'AI-powered natural language processing for intelligent tutoring',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10a37f"/>
            </svg>
          )
        },
        {
          name: 'JWT',
          version: '9.0.2',
          description: 'JSON Web Tokens for secure authentication and authorization',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 3v7h-1l3 3 3-3h-1V5h-4zm4 7h-1v7h-6v-7h-1l4-3 4 3z" fill="#d63aff"/>
            </svg>
          )
        },
        {
          name: 'bcryptjs',
          version: '3.0.2',
          description: 'Password hashing library for secure user authentication',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3zm0 10c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2c0-.552-.448-1-1-1z" fill="#4a5568"/>
            </svg>
          )
        }
      ]
    },
    devtools: {
      category: 'Development Tools & Deployment',
      technologies: [
        {
          name: 'Vercel',
          description: 'Frontend deployment platform with global CDN and automatic deployments',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 1L24 22H0L12 1z" fill="#000"/>
            </svg>
          )
        },
        {
          name: 'Render',
          description: 'Backend hosting platform for Node.js with auto-deploy from GitHub',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="12" width="8" height="8" fill="#000" rx="0"/>
              <path d="M14 16 Q14 10 18 10" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="18" cy="10" r="4" fill="#000"/>
            </svg>
          )
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#0e1321] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            {/* Animated 3D Comic Earth - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block flex-shrink-0"
            >
              <motion.img
                src="/3D comic earth.png"
                alt="3D Comic Earth"
                className="w-48 h-48 object-contain drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
                Math Village – Comprehensive Project Overview
              </h1>

              <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 font-inter">
                This document systematically presents the overall background, goals, user research, learning science foundations, product features, and technical architecture of the Math Village project, providing readers with a clear and professional overview of the initiative.
                The product is currently under continuous development, and the document will be updated periodically — stay tuned for future updates.
              </p>

              {/* Role and Skills & Tools */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto lg:mx-0">
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-3 font-inter text-center lg:text-left">Role</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.role.map((role, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-inter"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-3 font-inter text-center lg:text-left">Skills & Tools</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://math-village-student.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-[#3885D3] hover:text-white transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href="/docs/math-village/Product-Technical-Specification.md"
                  download="Math-Village-Product-Technical-Specification.md"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-[#3885D3] hover:border-[#3885D3] transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Specification
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents Navigation */}
      <nav className="sticky top-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 justify-center items-center overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase().replace(' ', '-'))}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-white hover:bg-[#3885D3] rounded-md transition-colors whitespace-nowrap flex-shrink-0"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Product Overview */}
        <motion.section
          initial={{ opacity: 1, y: 0 }}
          id="overview"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Project Overview
          </h2>

          {/* Introduction Paragraph */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-inter">
              Math Village is a mathematics learning platform designed for students aged 10–15. The goal is to provide a
              lightweight yet effective daily learning experience and to boost motivation and persistence through a strong
              sense of community. Grounded in learning science and educational technology, Math Village maps math topics onto
              a world map. Students explore different regions of the map to complete daily practice sessions and review tasks.
              Animated math stories spark curiosity, while community interactions and personal notes help students feel
              connected and retain what they learn. The project aims to:
            </p>
          </div>

          {/* Four Goals Grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0e1321] text-white font-bold text-lg flex items-center justify-center font-space-grotesk">
                1
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-base font-space-grotesk">
                  Deliver a short but efficient daily learning routine
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  Math Village is designed around a 15–20‑minute daily session, featuring bite‑sized practice, spaced review,
                  and engaging story content to help students build consistent study habits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0e1321] text-white font-bold text-lg flex items-center justify-center font-space-grotesk">
                2
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-base font-space-grotesk">
                  Serve both high‑achieving and struggling learners
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  The platform provides ongoing challenges for stronger students, while offering simple tasks with immediate
                  feedback for those who need more support. Community activities and rewards motivate students across levels.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0e1321] text-white font-bold text-lg flex items-center justify-center font-space-grotesk">
                3
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-base font-space-grotesk">
                  Build a sense of belonging
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  In the Plaza students can post, comment, like, and collect stories or community content, creating social
                  engagement and increasing platform stickiness.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0e1321] text-white font-bold text-lg flex items-center justify-center font-space-grotesk">
                4
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-base font-space-grotesk">
                  Integrate AI tutoring
                </h4>
                <p className="text-gray-600 leading-relaxed font-inter">
                  An AI math assistant is built in, so students can ask questions and get step‑by‑step answers without
                  leaving the platform.
                </p>
              </div>
            </div>
          </div>

        </motion.section>
      </div>

      {/* Problem Analysis & User Research */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="problem-analysis"
        className="pt-12 pb-20 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 font-space-grotesk">
            Problem Analysis & User Research
          </h2>

          {/* User Pain Points */}
          <div className="mb-12 flex gap-8 items-center">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/user boy.png"
                alt="User Boy"
                className="w-64 h-64 object-contain rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Pain Points</h3>
              <p className="text-gray-600 mb-8 text-base">
                Based on interviews, competitor research, and classroom feedback, common challenges include:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Low motivation</h4>
                      <p className="text-gray-600 text-sm">Students perceive math as boring and difficult.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Content overload & lack of completion</h4>
                      <p className="text-gray-600 text-sm">Existing sites overwhelm students with unfocused material.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Weak habit formation mechanisms</h4>
                      <p className="text-gray-600 text-sm">Few platforms offer daily check-ins or spaced review.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Isolation</h4>
                      <p className="text-gray-600 text-sm">Math learning often happens alone, with little peer support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learner Personas */}
          <div className="flex gap-8 items-center">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/user girl.png"
                alt="User Girl"
                className="w-64 h-64 object-contain rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learner Personas</h3>
              <p className="text-gray-600 mb-8 text-base">
                Age 10–15 (middle school) students with diverse learning needs and motivations.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
              {/* High Achievers */}
              <div>
                <div className="flex items-start mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                  <h4 className="font-semibold text-gray-900">High Achievers</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm ml-6">
                  <li>Daily practice to stay sharp</li>
                  <li>Challenging content</li>
                  <li>Motivational streaks or rewards</li>
                </ul>
              </div>

              {/* Struggling Learners */}
              <div>
                <div className="flex items-start mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                  <h4 className="font-semibold text-gray-900">Struggling Learners</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm ml-6">
                  <li>Short, focused tasks with immediate feedback</li>
                  <li>Community and story content to build interest</li>
                </ul>
              </div>

              {/* All Learners */}
              <div>
                <div className="flex items-start mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1 shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                  <h4 className="font-semibold text-gray-900">All Learners</h4>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm ml-6">
                  <li>Social interaction and peer support</li>
                  <li>Fun and engaging learning experience</li>
                  <li>Sense of completion rather than endless grind</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Science Foundation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="learning-science"
          className="mb-20 mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Learning Science Foundation
          </h2>

          <div className="flex items-start gap-4 mb-8">
            <p className="text-base text-gray-700 flex-1 font-inter">
              Each learning science principle is thoughtfully integrated into Math Village's user experience, ensuring that the platform not only engages students but also maximizes learning effectiveness through evidence-based educational strategies.
            </p>
            <motion.div
              className="flex-shrink-0 bg-[#3885D3] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Research-Based Design
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Guided Discovery */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Guided Discovery</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">A learning approach that uses structured tasks, cues, and feedback to guide exploration and pattern-finding, allowing understanding to emerge naturally without giving direct answers.</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Daily Practice:</strong> Map-based, step-by-step prompts guide learners to discover rules and patterns.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Math Stories:</strong> Concepts are embedded in narratives and revealed through context and guided inference.
                  </p>
                </div>
              </div>
            </div>

            {/* Spaced Retrieval */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Spaced Retrieval</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Strengthens long-term memory by revisiting key concepts at spaced intervals.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Daily Review:</strong> Automatically generates personalized review plans based on errors, using spaced repetition to reinforce retention.
                  </p>
                </div>
              </div>
            </div>

            {/* Self-Explanation */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Self-Explanation</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Deepens understanding by prompting learners to explain their reasoning and make meaningful connections.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>My Collection:</strong> A space for learners to take notes, restate concepts, and reflect.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>AI Assistant:</strong> Encourages learners to verbalize their thinking during Q&A, promoting self-explanation.
                  </p>
                </div>
              </div>
            </div>

            {/* Cognitive Load Management */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Cognitive Load Management</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Reduces unnecessary mental effort through thoughtful design, pacing, and content organization.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Daily Practice:</strong> Short, focused exercises (10–15 min) broken into steps to avoid overload.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Interactive UI:</strong> Clean layouts and clear navigation minimize cognitive distractions.
                  </p>
                </div>
              </div>
            </div>

            {/* Belonging & Social Learning */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Belonging & Social Learning</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Fosters a sense of acceptance, support, and value. Emphasizes learning through observation, collaboration, and interaction.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>My Collection:</strong> A personal space to jot down thoughts and build a sense of safety and belonging.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Community Plaza:</strong> Learners can make friends, interact, and learn by observing others' posts.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Leaderboard:</strong> Social competition and interaction boost engagement and motivation.
                  </p>
                </div>
              </div>
            </div>

            {/* Multimodal Learning */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Multimodal Learning</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Integrates multiple modalities—visual, auditory, textual, and verbal—to enhance comprehension and memory through different sensory channels.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Math Story:</strong> Combines animation and narrative for rich multimodal presentation.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Daily Practice:</strong> Webflow-based learning integrates text, audio, video, and illustrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Immediate Explanatory Feedback */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Immediate Explanatory Feedback</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Timely feedback that explains why a response is right or wrong, reinforcing accurate understanding and correcting misconceptions.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Daily Practice:</strong> Immediate feedback after each question—highlighting key reasoning when correct, and giving hints or examples when incorrect.
                  </p>
                </div>
              </div>
            </div>

            {/* Chunking & Scaffolding */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Chunking & Scaffolding</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Breaks learning into manageable steps and provides structured support that gradually fades.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Curriculum Map:</strong> Organizes content by topic, subtopic, and concept to guide learning progressively.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Daily Practice:</strong> Tasks are broken down into clear, bite-sized steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Mastery Learning */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Mastery Learning</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Learners must master each concept before moving on to the next.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter mb-2">
                    <strong>Progress Bar & Achievements:</strong> Tracks mastery and unlocks new content once proficiency is reached.
                  </p>
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Daily Streak:</strong> Encourages consistent practice and review to build lasting mastery.
                  </p>
                </div>
              </div>
            </div>

            {/* Targeted Intervention */}
            <div className="group perspective">
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <h3 className="text-base font-bold text-gray-900 text-center font-space-grotesk mb-2">Targeted Intervention</h3>
                  <p className="text-xs text-gray-700 text-center leading-tight font-inter">Identifies specific gaps in understanding and provides personalized support to address them.</p>
                </div>
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400 flex flex-col items-start justify-start p-4 overflow-y-auto">
                  <p className="text-xs text-gray-700 leading-tight font-inter">
                    <strong>Teacher Dashboard:</strong> Displays each student's mastery by concept, highlighting weak areas to support targeted teaching.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </motion.section>
      </div>

      {/* Core Features - Full Width Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="core-features"
        className="mb-20 mt-16 w-full relative"
      >
        {/* Floating Comic Earth - Centered, positioned lower */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <motion.img
            src="/3D comic earth.png"
            alt="Comic Earth"
            className="w-32 h-32 object-contain drop-shadow-2xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-georgia text-left">
            Core Features
          </h2>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-32">
            {coreFeatures.map((feature, index) => {
              const isDark = index % 2 === 1;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className={`${isDark ? 'bg-[#FEE3FF]' : 'bg-[#C5E2FF]'} w-full py-1 transition-all duration-300 shadow-[0_0_30px_rgba(30,64,175,0.5)]`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col md:flex-row min-h-[520px] rounded-3xl overflow-hidden shadow-sm">
                        {/* Feature Video - Left Side with iPad-style Frame */}
                        <div className={`relative h-[520px] md:h-auto md:w-[60%] flex items-center justify-center px-6 py-8 ${isDark ? 'bg-[#FEE3FF]' : 'bg-[#C5E2FF]'}`}>
                        {/* Outer Device Frame */}
                        <div className="relative mx-auto transform group-hover:scale-[1.01] transition-transform duration-700 ease-out w-full h-[85%] max-w-2xl">
                          {/* Dynamic Multi-layer Shadow */}
                          <div className={`absolute inset-0 ${
                            isDark
                              ? 'bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-cyan-400/30 blur-3xl translate-y-6 scale-90'
                              : 'bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-pink-500/15 blur-2xl translate-y-4 scale-95'
                          } rounded-[2.5rem] ${isDark ? 'animate-pulse' : 'animate-pulse'}`}></div>
                          <div className={`absolute inset-0 ${
                            isDark
                              ? 'bg-black/60 blur-2xl translate-y-8 scale-92'
                              : 'bg-black/25 blur-xl translate-y-5 scale-96'
                          } rounded-[2.5rem]`}></div>
                          {isDark && (
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-300/20 to-purple-300/15 blur-xl translate-y-3 scale-98 rounded-[2.5rem]"></div>
                          )}

                          {/* Device Frame - iPad Style (Spectrum Research Library style) */}
                          <div className="relative w-full h-full p-3 bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gradient-to-r from-blue-800 via-slate-700 to-blue-900 rounded-[2.5rem] p-4 transform hover:scale-[1.02] transition-transform duration-500">
                            {/* Ultra-thin Screen Bezel */}
                            <div className="w-full h-full p-0.5 bg-black rounded-[2rem]">
                              {/* Screen Content */}
                              <div className="relative w-full h-full rounded-[1.75rem] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                                {(() => {
                                  const videoMap: Record<string, string> = {
                                    'Home Page (Dashboard)': '/video/Home page-learner dashboard.mp4',
                                    'Daily Practice': '/video/Daily practice.mp4',
                                    'Daily Review': '/video/Daily review.mp4',
                                    'AI Assistant': '/video/AI Assistant.mp4',
                                    'Math Stories': '/video/math stories.mp4',
                                    'My Collection': '/video/My collection.mp4',
                                    'Community Plaza': '/video/Community plaza.mp4'
                                  };

                                  const videoSrc = videoMap[feature.title];

                                  if (videoSrc) {
                                    return (
                                      <>
                                        <video
                                          className="w-full h-full object-cover"
                                          autoPlay
                                          loop
                                          muted
                                          playsInline
                                          preload="auto"
                                        >
                                          <source src={videoSrc} type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                        {/* Screen Reflection Effect */}
                                        <div className="absolute inset-0 screen-reflection pointer-events-none"></div>
                                        {/* Screen Glass Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none"></div>
                                      </>
                                    );
                                  } else {
                                    return (
                                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <div className="text-center">
                                          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                          </svg>
                                          <p className="text-xs font-medium font-georgia">{feature.title}</p>
                                        </div>
                                      </div>
                                    );
                                  }
                                })()}

                                {/* iPad Camera/Sensor Bar */}
                                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full border border-gray-600/50"></div>

                                {/* Status Indicator */}
                                <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm shadow-green-400/30"></div>
                              </div>
                            </div>
                          </div>

                          {/* Floating RGB Elements (Outside iPad) */}
                          <div className="absolute -top-3 -right-3 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full animate-bounce delay-100 shadow-sm shadow-cyan-400/30"></div>
                          <div className="absolute -top-1 -right-8 w-1 h-1 bg-gradient-to-br from-purple-400/40 to-pink-500/40 rounded-full animate-ping delay-200"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-300 shadow-md shadow-green-400/50"></div>
                          <div className="absolute -bottom-4 -right-1 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse delay-400"></div>
                          <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-ping delay-500"></div>
                        </div>
                      </div>

                      {/* Content - Right Side */}
                      <div className="p-6 md:p-8 md:w-[40%] flex flex-col justify-center items-start text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-georgia">
                          {feature.title}
                        </h3>

                        {/* Only show description if no bullets are present */}
                        {!('bullets' in feature && feature.bullets) && (
                          <p className="text-gray-700 mb-4 leading-snug font-georgia">
                            {feature.description}
                          </p>
                        )}

                        {/* Bullets - if present */}
                        {'bullets' in feature && feature.bullets && (
                          <ul className="list-disc list-outside ml-5 space-y-2 mb-8 text-gray-700 text-sm font-georgia">
                            {feature.bullets.map((bullet: string, idx: number) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {/* Tags - if present */}
                        {'tags' in feature && feature.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {feature.tags.map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-white/80 text-gray-700 text-xs rounded font-georgia"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Technical Implementation - Collapsible */}
                        <FeatureTechDetails techDetails={feature.techDetails} />
                      </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* System Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="architecture"
          className="py-4"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-space-grotesk">
            System Architecture
          </h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend-Backend Separation + Microservices Architecture</h3>

            {/* Architecture Diagram - Compact Version */}
            <div className="space-y-3">
              {/* Frontend Layer */}
              <div className="border-2 border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#3984D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-bold text-gray-900">Frontend Applications</h4>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-200 rounded-lg p-2 text-center hover:border-blue-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#3984D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">Student Web App</div>
                    <div className="text-xs text-gray-500 mt-1">Learning Interface</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#3984D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">Teacher Web App</div>
                    <div className="text-xs text-gray-500 mt-1">Analytics Dashboard</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#3984D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">Admin Panel</div>
                    <div className="text-xs text-gray-500 mt-1">System Management</div>
                  </div>
                </div>
              </div>

              {/* Connection Arrow */}
              <div className="flex justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Backend Layer */}
              <div className="border-2 border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <h4 className="font-bold text-gray-900">Backend Service</h4>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 hover:border-green-400 transition-colors">
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">RESTful API Service</div>
                      <div className="text-sm text-gray-600">Express.js + TypeScript</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Arrow */}
              <div className="flex justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Data Layer */}
              <div className="border-2 border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FCB9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <h4 className="font-bold text-gray-900">Data & External Services</h4>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-200 rounded-lg p-2 text-center hover:border-purple-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#FCB9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">SQLite Database</div>
                    <div className="text-xs text-gray-500 mt-1">User & Learning Data</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-purple-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#FCB9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">OpenAI API</div>
                    <div className="text-xs text-gray-500 mt-1">AI Chat Service</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-purple-400 transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2 text-[#FCB9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <div className="font-semibold text-sm text-gray-900">File Storage</div>
                    <div className="text-xs text-gray-500 mt-1">Static Assets</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Modern microservices architecture</strong> with clear separation of concerns, enabling scalable development,
                independent deployment of components, and efficient maintenance of the educational platform.
              </p>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Technology Stack - Full Width with Dark Background */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="tech-stack"
        className="py-20 bg-[#0e1321] w-full"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 font-space-grotesk">
            Technology Stack Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <TechStackCard
              category={techStack.frontend.category}
              technologies={techStack.frontend.technologies}
              delay={0}
            />
            <TechStackCard
              category={techStack.backend.category}
              technologies={techStack.backend.technologies}
              delay={0.1}
            />
          </div>
          <TechStackCard
            category={techStack.devtools.category}
            technologies={techStack.devtools.technologies}
            delay={0.2}
          />
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Deployment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="deployment"
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Deployment Architecture
          </h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {/* Infrastructure Components */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3984D3] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L24 22H0L12 1z" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Vercel</h3>
                    <p className="text-xs text-gray-500">Frontend Hosting</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Auto-deploy from GitHub with global CDN distribution</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#FCB9FF] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="12" width="8" height="8" fill="#000" rx="0"/>
                      <path d="M14 16 Q14 10 18 10" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <circle cx="18" cy="10" r="4" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Render</h3>
                    <p className="text-xs text-gray-500">Backend Hosting</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Scalable Node.js hosting with automatic deployment</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3984D3] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900">SQLite</h3>
                    <p className="text-xs text-gray-500">Database</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Persistent file-based storage on Render server</p>
              </div>
            </div>

            {/* Deployment Workflow */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                CI/CD Deployment Pipeline
              </h3>
              <div className="flex items-center gap-3 justify-between">
                <div className="flex-1 text-center">
                  <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <svg className="w-8 h-8 mx-auto mb-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium text-gray-900">Local Dev</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex-1 text-center">
                  <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <svg className="w-8 h-8 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <p className="text-xs font-medium text-gray-900">GitHub Push</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex-1 text-center">
                  <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <svg className="w-8 h-8 mx-auto mb-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xs font-medium text-gray-900">Auto Deploy</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">Zero-downtime deployment with automatic builds and environment variable management</p>
            </div>
          </div>
        </motion.section>

        {/* Download Full Documentation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <div className="inline-block bg-[#0e1321] rounded-2xl p-8 border border-[#3984D3] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <motion.img
              src="/3D comic earth.png"
              alt="Comic Earth"
              className="w-16 h-16 mx-auto mb-4 object-contain drop-shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="text-xl font-bold text-white mb-2 font-space-grotesk">
              Complete Technical Documentation
            </h2>
            <p className="text-sm text-gray-300 mb-6 max-w-2xl mx-auto font-inter">
              Download the full Product Requirements Document (PRD) with detailed architecture diagrams,
              API specifications, and technical implementation details. Best viewed in VSCode or other markdown editors.
            </p>
            <a
              href="/docs/math-village/Product-Technical-Specification.md"
              download="Math-Village-Product-Technical-Specification.md"
              className="inline-flex items-center gap-2 text-[#3984D3] hover:text-[#5a9ae5] transition-colors font-medium border-b border-transparent hover:border-[#3984D3] pb-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Technical Specification
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}