'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { useState } from 'react';

interface BigIdeasDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

const keyThemes = [
  {
    id: 'T1',
    title: 'Feedback',
    whyMatters: 'Reinforces learning, corrects misconceptions, and supports engagement.',
    strategies: 'Timely and frequent feedback, Process-oriented, not just outcomes, Personalized to learner needs',
    connection: 'Big Idea 4, 6, 7'
  },
  {
    id: 'T2',
    title: 'Personalization',
    whyMatters: 'Enhances engagement, inclusivity, and learning outcomes by addressing diversity.',
    strategies: 'Culturally relevant materials, Flexible learning paths, Learner choice',
    connection: 'Big Idea 1, 3, 8'
  },
  {
    id: 'T3',
    title: 'Scaffolding',
    whyMatters: 'Reduces cognitive load, fosters independence, and aids in understanding complex tasks.',
    strategies: 'Step-by-step guidance, Gradual release of responsibility, Support within ZPD',
    connection: 'Big Idea 2, 5, 6'
  },
  {
    id: 'T4',
    title: 'Metacognition',
    whyMatters: 'Encourages self-regulated learning, improves problem-solving, and supports lifelong learning.',
    strategies: 'Reflection exercises; Think-aloud protocols; Self-assessment tools',
    connection: 'Big Idea 7, 8'
  },
  {
    id: 'T5',
    title: 'Knowledge Transfer',
    whyMatters: 'Ensures learners can apply skills flexibly and adapt to varied situations.',
    strategies: 'Contextual variation; Principle-based learning; Interleaved practice',
    connection: 'Big Idea 3, 6, 7'
  },
  {
    id: 'T6',
    title: 'Backward Design',
    whyMatters: 'Aligns goals, assessments, and instruction to ensure coherence.',
    strategies: 'Start with learning outcomes; Design assessments to measure outcomes; Build activities to support goals',
    connection: 'Big Idea 2, 4'
  }
];

const bigIdeas = [
  {
    id: 1,
    title: 'How Can We Enhance Inclusivity for Students from Diverse Backgrounds in Curriculum Design?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tagline: 'Creating accessible and effective learning for all',
    description: 'Design learning experiences that are accessible and effective for diverse learners with varied backgrounds, abilities, and learning needs through culturally responsive pedagogy and universal design principles.',
    concepts: [
      {
        title: 'Culturally Relevant Materials',
        description: 'Incorporate diverse perspectives, examples, and contexts that reflect learners\' cultural backgrounds and lived experiences.',
        strategies: [
          'Use examples and case studies from diverse cultural contexts',
          'Include voices and contributions from underrepresented groups',
          'Connect learning to students\' communities and real-world contexts',
          'Provide multiple cultural lenses for examining content'
        ]
      },
      {
        title: 'Differentiated Instruction',
        description: 'Adapt teaching methods to meet diverse learning needs through flexible approaches and multiple pathways.',
        strategies: [
          'Provide multiple means of representation (visual, auditory, kinesthetic)',
          'Offer varied engagement options and choice in learning activities',
          'Enable multiple means of expression and demonstration',
          'Adjust pacing and complexity based on individual readiness'
        ]
      },
      {
        title: 'Assistive Technology Integration',
        description: 'Leverage technology to remove barriers and provide equitable access to learning opportunities.',
        strategies: [
          'Screen readers and text-to-speech for accessibility',
          'Captioning and transcripts for multimedia content',
          'Adaptive learning platforms that personalize content',
          'Assistive input devices for diverse physical abilities'
        ]
      },
      {
        title: 'Authentic & Inclusive Assessment',
        description: 'Design assessments that authentically measure learning while accommodating diverse demonstration modes.',
        strategies: [
          'Offer multiple formats for demonstrating mastery',
          'Reduce cultural and linguistic bias in assessments',
          'Provide accommodations without compromising rigor',
          'Include authentic, real-world assessment contexts'
        ]
      }
    ],
    keySources: [
      'Ladson-Billings, G. (1995). Toward a theory of culturally relevant pedagogy',
      'CAST (2018). Universal Design for Learning Guidelines',
      'Gay, G. (2010). Culturally Responsive Teaching: Theory, Research, and Practice'
    ]
  },
  {
    id: 2,
    title: 'How Can We Design to Ensure Alignment of Goals, Assessments, and Instruction?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tagline: 'Ensuring coherence across all learning components',
    description: 'Ensure learning objectives, instructional activities, and assessments are coherently aligned through backward design and systematic planning to support meaningful learning outcomes.',
    concepts: [
      {
        title: 'Clear & Measurable Learning Goals',
        description: 'Define specific, observable learning objectives that guide all instructional decisions.',
        strategies: [
          'Use Bloom\'s taxonomy to specify cognitive levels',
          'Write SMART objectives (Specific, Measurable, Achievable, Relevant, Time-bound)',
          'Communicate objectives clearly to learners at course and lesson levels',
          'Align objectives with program and institutional outcomes'
        ]
      },
      {
        title: 'Formative Assessment Integration',
        description: 'Embed ongoing assessments that provide feedback to guide learning and instruction.',
        strategies: [
          'Use frequent low-stakes quizzes and checks for understanding',
          'Implement peer and self-assessment opportunities',
          'Provide immediate feedback on formative work',
          'Adjust instruction based on assessment data'
        ]
      },
      {
        title: 'Strategic Scaffolding',
        description: 'Provide structured support that gradually releases responsibility to learners.',
        strategies: [
          'Begin with worked examples and modeling',
          'Provide guided practice with decreasing support',
          'Offer job aids, templates, and procedural guides',
          'Fade scaffolds as competence increases'
        ]
      },
      {
        title: 'Metacognitive Development',
        description: 'Explicitly teach thinking strategies and self-monitoring skills.',
        strategies: [
          'Model expert thinking processes aloud',
          'Teach learning strategies explicitly (note-taking, summarizing)',
          'Prompt reflection on learning processes and outcomes',
          'Encourage planning, monitoring, and evaluation of learning'
        ]
      },
      {
        title: 'Varied Practice Opportunities',
        description: 'Design practice that builds fluency while promoting transfer.',
        strategies: [
          'Provide massed practice for initial skill development',
          'Implement spaced practice for long-term retention',
          'Include varied contexts to promote transfer',
          'Interleave related skills and concepts'
        ]
      },
      {
        title: 'Inclusive Instruction',
        description: 'Ensure all learners can access and engage with aligned learning components.',
        strategies: [
          'Provide multiple entry points for diverse readiness levels',
          'Offer choice in learning paths and demonstration modes',
          'Remove barriers while maintaining academic rigor',
          'Connect to learners\' prior knowledge and experiences'
        ]
      }
    ],
    keySources: [
      'Wiggins, G., & McTighe, J. (2005). Understanding by Design',
      'Anderson, L. W., & Krathwohl, D. R. (2001). A Taxonomy for Learning, Teaching, and Assessing',
      'Hattie, J. (2012). Visible Learning for Teachers'
    ]
  },
  {
    id: 3,
    title: 'How Can We Design Study Environments and Structures to Enhance Learning Outcomes?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tagline: 'Fostering supportive spaces for engagement and growth',
    description: 'Foster supportive, engaging, and well-structured learning spaces that promote active participation, collaboration, and psychological safety through intentional environmental design.',
    concepts: [
      {
        title: 'Sense of Belongingness',
        description: 'Create environments where all learners feel valued, included, and psychologically safe.',
        strategies: [
          'Establish clear norms for respectful interaction',
          'Build community through icebreakers and team-building',
          'Acknowledge and validate diverse perspectives',
          'Respond to microaggressions and bias incidents',
          'Create opportunities for peer connection and support'
        ]
      },
      {
        title: 'Adaptable Learning Spaces',
        description: 'Design flexible physical and digital environments that support varied learning activities.',
        strategies: [
          'Arrange seating to support collaboration and discussion',
          'Provide quiet zones for focused individual work',
          'Ensure accessibility for diverse physical abilities',
          'Create digital spaces with intuitive navigation',
          'Adapt environments based on learning activity needs'
        ]
      },
      {
        title: 'Teaching Methods Alignment',
        description: 'Match instructional approaches to learning objectives using frameworks like ICAP.',
        strategies: [
          'Passive: Lectures with clear organization and signaling',
          'Active: Interactive activities requiring physical/cognitive engagement',
          'Constructive: Activities generating new ideas or products',
          'Interactive: Collaborative dialogue and co-construction of knowledge',
          'Select methods based on desired learning outcomes'
        ]
      }
    ],
    keySources: [
      'Chi, M. T. H., & Wylie, R. (2014). The ICAP Framework',
      'Walton, G. M., & Cohen, G. L. (2011). A brief social-belonging intervention',
      'Ambrose, S. A., et al. (2010). How Learning Works'
    ]
  },
  {
    id: 4,
    title: 'How Can We Design Effective Assessments to Improve Learning and Teaching?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tagline: 'Measuring learning authentically and meaningfully',
    description: 'Implement varied assessment strategies that provide comprehensive feedback on learning progress, inform instructional decisions, and authentically measure meaningful outcomes.',
    concepts: [
      {
        title: 'Alignment with Learning Objectives',
        description: 'Ensure assessments directly measure stated learning goals at appropriate cognitive levels.',
        strategies: [
          'Match assessment tasks to Bloom\'s taxonomy levels in objectives',
          'Use backward design to plan assessments before instruction',
          'Create rubrics that operationalize learning objectives',
          'Verify content validity through expert review'
        ]
      },
      {
        title: 'Metacognitive Assessment Strategies',
        description: 'Incorporate self-assessment and reflection to develop metacognitive awareness.',
        strategies: [
          'Use self-assessment checklists and rubrics',
          'Prompt reflective journaling on learning processes',
          'Facilitate peer feedback and evaluation',
          'Include process portfolios documenting learning journey'
        ]
      },
      {
        title: 'Diverse Assessment Formats',
        description: 'Employ multiple assessment types to capture different aspects of learning.',
        strategies: [
          'Combine formative and summative assessments',
          'Include authentic performance tasks and projects',
          'Use selected-response for foundational knowledge',
          'Incorporate presentations, portfolios, and demonstrations',
          'Provide options to accommodate diverse strengths'
        ]
      }
    ],
    keySources: [
      'Wiggins, G. (1998). Educative Assessment',
      'Stiggins, R. J. (2005). Student-Involved Assessment FOR Learning',
      'Pellegrino, J. W., et al. (2001). Knowing What Students Know'
    ]
  },
  {
    id: 5,
    title: 'How Can We Use Worked Examples to Break Down Complex Problems?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tagline: 'Scaffolding complex skill development efficiently',
    description: 'Leverage carefully designed examples and models to reduce cognitive load and scaffold complex skill development through explicit demonstration of expert thinking.',
    concepts: [
      {
        title: 'Cognitive Load Management',
        description: 'Use worked examples to reduce extraneous load while focusing on essential learning.',
        strategies: [
          'Present complete solutions before problem-solving practice',
          'Use split-attention principle: integrate text and diagrams',
          'Apply modality effect: combine visual and auditory information',
          'Fade worked examples as expertise develops (completion problems)',
          'Avoid redundancy by not duplicating identical information'
        ]
      },
      {
        title: 'Promoting Conceptual Understanding',
        description: 'Design examples that reveal underlying principles and expert reasoning.',
        strategies: [
          'Make thinking visible through think-aloud demonstrations',
          'Highlight key decision points and reasoning processes',
          'Include both correct and incorrect examples with explanations',
          'Use multiple representations (symbolic, visual, verbal)',
          'Connect procedures to conceptual foundations'
        ]
      }
    ],
    caseStudy: {
      title: 'Khan Academy: Worked Examples at Scale',
      description: 'Khan Academy effectively uses video-based worked examples to teach mathematics and science concepts to millions of learners worldwide.',
      features: [
        'Step-by-step problem demonstrations with clear narration',
        'Progressive complexity from basic to advanced problems',
        'Integration with practice exercises for immediate application',
        'Learner control over pacing (pause, rewind, replay)',
        'Personalized recommendations based on performance'
      ],
      impact: 'Research shows students using Khan Academy worked examples demonstrate significant learning gains, particularly in mathematics, with effects strongest for struggling learners who benefit from explicit scaffolding.'
    },
    keySources: [
      'Sweller, J., et al. (2011). Cognitive Load Theory',
      'Atkinson, R. K., et al. (2000). Learning from examples: Instructional principles',
      'Renkl, A. (2014). Toward an instructionally oriented theory of example-based learning'
    ]
  },
  {
    id: 6,
    title: 'How Can We Accelerate Learning Through Targeted Practice and Timely Feedback?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    tagline: 'Building mastery through strategic practice and guidance',
    description: 'Provide targeted, timely feedback and well-designed practice opportunities that help learners understand their progress, build fluency, and achieve mastery.',
    concepts: [
      {
        title: 'Characteristics of Effective Practice',
        description: 'Design practice that builds toward meaningful goals with appropriate challenge and support.',
        strategies: [
          'Goal-directed: Aligned with clear learning objectives',
          'Targeted: Focused on specific skills or knowledge components',
          'Appropriately challenging: Within zone of proximal development',
          'Sufficient quantity: Adequate repetitions for skill development',
          'Spaced over time: Distributed practice for retention',
          'Varied contexts: Promotes transfer and flexibility'
        ]
      },
      {
        title: 'Strategic Feedback Approaches',
        description: 'Deliver feedback that guides improvement and develops self-regulation.',
        strategies: [
          'Focus on task, process, and self-regulation (not personal attributes)',
          'Provide specific, actionable guidance for improvement',
          'Deliver feedback while performance is still fresh',
          'Balance positive reinforcement with constructive critique',
          'Encourage self-assessment and peer feedback',
          'Model how to use feedback for improvement'
        ]
      }
    ],
    keySources: [
      'Hattie, J., & Timperley, H. (2007). The Power of Feedback',
      'Ericsson, K. A. (2008). Deliberate Practice and Acquisition of Expert Performance',
      'Roediger, H. L., & Butler, A. C. (2011). The critical role of retrieval practice'
    ]
  },
  {
    id: 7,
    title: 'How Can We Facilitate the Transfer of Knowledge and Skills in Learning Experiences?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    tagline: 'Enabling flexible application across contexts',
    description: 'Design learning experiences that enable learners to apply knowledge and skills flexibly across varied contexts through deliberate transfer-oriented instruction.',
    concepts: [
      {
        title: 'Task Decomposition & Zone of Proximal Development',
        description: 'Break complex skills into manageable components at appropriate difficulty levels.',
        strategies: [
          'Analyze tasks to identify sub-skills and prerequisite knowledge',
          'Sequence instruction from simple to complex',
          'Provide scaffolding within learners\' ZPD',
          'Gradually increase complexity as competence develops',
          'Use task analysis to identify potential learning barriers'
        ]
      },
      {
        title: 'Metacognitive Strategy Instruction',
        description: 'Explicitly teach thinking strategies that support transfer.',
        strategies: [
          'Model expert problem-solving processes',
          'Teach self-questioning and monitoring strategies',
          'Prompt reflection on when and why to use strategies',
          'Encourage planning before task engagement',
          'Facilitate evaluation of strategy effectiveness'
        ]
      },
      {
        title: 'Culturally Responsive Transfer Support',
        description: 'Connect learning to diverse contexts and cultural frameworks.',
        strategies: [
          'Use examples from multiple cultural perspectives',
          'Acknowledge different ways of knowing and problem-solving',
          'Connect learning to community and real-world contexts',
          'Validate diverse approaches to applying knowledge'
        ]
      },
      {
        title: 'Varied Practice Contexts',
        description: 'Provide practice in diverse situations to promote flexible application.',
        strategies: [
          'Present problems in multiple contexts and formats',
          'Vary surface features while maintaining deep structure',
          'Include near and far transfer opportunities',
          'Prompt comparison across different examples',
          'Encourage abstraction of underlying principles'
        ]
      },
      {
        title: 'Effective Feedback for Transfer',
        description: 'Give feedback that promotes understanding of underlying principles.',
        strategies: [
          'Highlight connections between concepts',
          'Prompt thinking about when/why strategies apply',
          'Encourage reflection on similarities across contexts',
          'Focus on deep structure rather than surface features'
        ]
      },
      {
        title: 'Self-Regulated Learning for Transfer',
        description: 'Develop learners\' capacity to monitor and adapt their learning.',
        strategies: [
          'Teach goal-setting and planning skills',
          'Promote self-monitoring of comprehension',
          'Encourage evaluation of strategy effectiveness',
          'Foster adaptive strategy selection',
          'Build learner autonomy and confidence'
        ]
      }
    ],
    keySources: [
      'Vygotsky, L. S. (1978). Mind in Society',
      'Bransford, J. D., & Schwartz, D. L. (1999). Rethinking transfer',
      'Perkins, D. N., & Salomon, G. (1992). Transfer of learning'
    ]
  },
  {
    id: 8,
    title: 'How Can We Foster Self-Regulated Learning in Students?',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    tagline: 'Developing lifelong learning capabilities',
    description: 'Support learners in developing metacognitive skills and strategies for independent, lifelong learning through explicit instruction and supportive environments.',
    concepts: [
      {
        title: 'Metacognitive Skills Development',
        description: 'Teach explicit strategies for planning, monitoring, and evaluating learning.',
        strategies: [
          'Model metacognitive thinking through think-alouds',
          'Teach specific learning strategies (SQ3R, concept mapping)',
          'Prompt self-questioning during learning',
          'Use learning logs and reflective journals',
          'Facilitate strategy comparison and selection',
          'Provide checklists for self-monitoring'
        ]
      },
      {
        title: 'Growth Mindset Cultivation',
        description: 'Foster beliefs that intelligence and abilities can be developed through effort.',
        strategies: [
          'Praise effort, strategies, and progress (not innate ability)',
          'Frame mistakes as learning opportunities',
          'Share examples of struggle leading to growth',
          'Teach about brain plasticity and learning',
          'Emphasize "not yet" rather than "can\'t"',
          'Model own learning and growth experiences'
        ]
      },
      {
        title: 'Supportive Learning Environments',
        description: 'Create contexts that encourage autonomy and risk-taking.',
        strategies: [
          'Establish psychological safety for making mistakes',
          'Provide low-stakes practice opportunities',
          'Encourage help-seeking as a positive strategy',
          'Build community and peer support systems',
          'Balance structure with learner choice',
          'Respond to struggles with encouragement and guidance'
        ]
      },
      {
        title: 'Learner Autonomy & Ownership',
        description: 'Gradually transfer control of learning to students.',
        strategies: [
          'Provide choice in topics, methods, or products',
          'Involve learners in goal-setting and planning',
          'Teach time management and organization skills',
          'Encourage self-assessment and reflection',
          'Foster intrinsic motivation through relevance and autonomy',
          'Support development of personal learning goals'
        ]
      }
    ],
    keySources: [
      'Zimmerman, B. J. (2002). Becoming a Self-Regulated Learner',
      'Dweck, C. S. (2006). Mindset: The New Psychology of Success',
      'Pintrich, P. R. (2004). A Conceptual Framework for Assessing Motivation and Self-Regulated Learning'
    ]
  }
];

const regulations = {
  dos: [
    'Design with learner diversity in mind from the start',
    'Align all learning components systematically',
    'Provide varied, timely feedback to guide learning',
    'Create psychologically safe learning environments',
    'Use multiple assessment formats to capture learning',
    'Model expert thinking and problem-solving explicitly',
    'Design practice that promotes transfer across contexts',
    'Teach metacognitive strategies explicitly',
    'Foster growth mindset and learner autonomy',
    'Connect learning to real-world and cultural contexts'
  ],
  donts: [
    'Assume one-size-fits-all approaches work for all learners',
    'Create misalignment between goals, instruction, and assessment',
    'Provide feedback too late or too vague to be actionable',
    'Ignore the importance of belongingness and psychological safety',
    'Rely on single assessment types or formats',
    'Skip worked examples and jump straight to problem-solving',
    'Practice only in narrow contexts without variation',
    'Leave learning strategies implicit and unexamined',
    'Focus only on performance without developing self-regulation',
    'Ignore cultural responsiveness and inclusive design'
  ]
};

export default function BigIdeasDetailClient({ project }: BigIdeasDetailClientProps) {
  const [expandedIdeas, setExpandedIdeas] = useState<Set<number>>(new Set());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 border-b border-gray-200" style={{ backgroundColor: '#0e1321' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full tracking-wide uppercase" style={{ backgroundColor: '#63B5FE' }}>
                {project.year}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
              {project.title}
            </h1>

            <div className="w-24 h-px bg-white mb-6" />

            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>

            {/* Role and Skills */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Role</h3>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((role, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => {
                  const colors = ['#63B5FE', '#8BD5AD', '#EEA291'];
                  const bgColor = colors[idx % colors.length];
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: bgColor }}
                    >
                      {link.label}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            )}

            {/* Team Credit */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-300">Best Time Manager Team</p>
            </div>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#63B5FE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Overview
            </h2>
            <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                In this synthesis, we explore foundational principles for designing effective and inclusive learning experiences. To deepen our inquiry and provide clarity, we framed each Big Idea as a guiding question. This approach encourages reflective engagement and highlights actionable strategies for improving student outcomes.
              </p>
              <p>
                By asking "How can we...?" across critical educational challenges, we invite exploration of alignment between learning goals, assessments, and instructional activities, the role of inclusivity, and techniques for enhancing engagement, mastery, and knowledge transfer. These questions serve as the foundation for cohesive curriculum design and inspire innovative applications in diverse learning contexts.
              </p>
            </div>

            {/* Diagram Image */}
            <div className="mt-8 flex justify-center">
              <img
                src="/bigideas/diagram.png"
                alt="Big Ideas Framework Diagram"
                className="max-w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Additional Image */}
            <div className="mt-4 flex justify-center">
              <img
                src="/bigideas/pic1.png"
                alt="Big Ideas Additional Visual"
                className="max-w-xl w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Big Ideas-Driven Five-Phase Education Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Big Ideas-Driven Five-Phase Education Design
            </h2>
            <p className="text-center text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              This framework shows how the 8 Big Ideas integrate across the five phases of instructional design: Understanding learner in context, Targeting explicit goals, Implicating assessment towards goals, Designing instruction to reach goals, and Conducting evaluation research to provide evidence.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead>
                  <tr style={{ backgroundColor: '#63B5FE' }}>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Understanding learner in context</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Targeting explicit goals</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Implicating assessment towards goals</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Designing instruction to reach goals</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Conducting evaluation research to provide evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">1 How Can We Enhance Inclusivity for Students from Diverse Backgrounds in Curriculum Design?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2 How Can We Design to Ensure Alignment of Goals, Assessments, and Instruction?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2 How Can We Design to Ensure Alignment of Goals, Assessments, and Instruction?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2 How Can We Design to Ensure Alignment of Goals, Assessments, and Instruction?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">7 How Can We Facilitate the Transfer of Knowledge and Skills in Learning Experiences?</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">3 How Can We Design Study Environments and Structures to Enhance Learning Outcomes?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">7 How Can We Facilitate the Transfer of Knowledge and Skills in Learning Experiences?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">4 How Can We Design Effective Assessments to Improve Learning and Teaching?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">5 How Can We Use Worked Examples to Break Down Complex Problems?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2 How Can We Design to Ensure Alignment of Goals, Assessments, and Instruction?</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">8 How Can We Foster Self-Regulated Learning in Students?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">8 How Can We Foster Self-Regulated Learning in Students?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">6 How Can We Accelerate Learning Through Targeted Practice and Timely Feedback?</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">8 How Can We Foster Self-Regulated Learning in Students?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Themes and Their Connection to 8 Big Ideas
            </h2>
            <p className="text-center text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              These six interconnected themes represent the core ideas that emerge across all eight Big Ideas, demonstrating why they matter, key strategies, and their connections to specific Big Ideas.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead>
                  <tr style={{ backgroundColor: '#8BD5AD' }}>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Key Theme</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Why It Matters</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Strategies</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">Connection to Big Ideas</th>
                  </tr>
                </thead>
                <tbody>
                  {keyThemes.map((theme, index) => (
                    <tr key={theme.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900">{theme.id}: {theme.title}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{theme.whyMatters}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{theme.strategies}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{theme.connection}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8 Big Ideas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-10 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              8 Big Ideas
            </h2>
            <p className="text-center text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              Each Big Idea encompasses multiple learning theories and evidence-based principles, providing a comprehensive framework for instructional design.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {bigIdeas.map((idea, index) => {
              const colors = ['#63B5FE', '#8BD5AD', '#EEA291'];
              const iconColor = colors[index % colors.length];
              return (
                <motion.div
                  key={idea.id}
                  id={`big-idea-${idea.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => {
                      const newExpanded = new Set(expandedIdeas);
                      if (newExpanded.has(idea.id)) {
                        newExpanded.delete(idea.id);
                      } else {
                        newExpanded.add(idea.id);
                      }
                      setExpandedIdeas(newExpanded);
                    }}
                    className="w-full px-6 py-5 flex items-start gap-4 hover:bg-gray-50 transition-colors text-left group"
                  >
                    <div className="flex-shrink-0" style={{ color: iconColor }}>{idea.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-base font-light text-gray-400">0{idea.id}</span>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{idea.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">{idea.tagline}</p>
                    <p className="text-base text-gray-700 leading-relaxed">{idea.description}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 flex-shrink-0 ml-4">
                    <div className="px-4 py-2 bg-[#63B5FE] text-white rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                      <span className="text-sm font-medium">{expandedIdeas.has(idea.id) ? 'Collapse' : 'Expand'}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${expandedIdeas.has(idea.id) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  </button>

                  {/* Expandable Content */}
                  {expandedIdeas.has(idea.id) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {/* Core Concepts */}
                    <div className="mt-6">
                      <h4 className="text-base font-bold text-gray-900 mb-4">Core Concepts & Strategies</h4>
                      <div className="space-y-5">
                        {idea.concepts.map((concept, idx) => {
                          const colors = ['#63B5FE', '#8BD5AD', '#EEA291'];
                          const borderColor = colors[idx % colors.length];
                          return (
                            <div key={idx} className="bg-gray-50 p-5 rounded-lg border-l-4" style={{ borderLeftColor: borderColor }}>
                              <h5 className="text-sm font-bold text-gray-900 mb-2">{concept.title}</h5>
                              <p className="text-sm text-gray-700 mb-3">{concept.description}</p>
                              <ul className="space-y-1.5">
                                {concept.strategies.map((strategy, sIdx) => (
                                  <li key={sIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="mt-0.5" style={{ color: borderColor }}>•</span>
                                    <span>{strategy}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Case Study (if exists) */}
                    {'caseStudy' in idea && idea.caseStudy && (
                      <div className="mt-6 bg-[#63B5FE]/10 border border-[#63B5FE]/30 p-5 rounded-lg">
                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" style={{ color: '#63B5FE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Case Study: {idea.caseStudy.title}
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">{idea.caseStudy.description}</p>
                        <ul className="space-y-1.5 mb-3">
                          {idea.caseStudy.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="mt-0.5" style={{ color: '#63B5FE' }}>✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-700 italic">{idea.caseStudy.impact}</p>
                      </div>
                    )}

                    {/* Key Sources */}
                    <div className="mt-6 pt-5 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <span>📚</span>
                        Key Sources
                      </h4>
                      <ul className="space-y-1">
                        {idea.keySources.map((source, sIdx) => (
                          <li key={sIdx} className="text-sm text-gray-600">• {source}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Collapse Button */}
                    <div className="mt-6 pt-5 border-t border-gray-200 flex justify-center">
                      <button
                        onClick={() => {
                          const newExpanded = new Set(expandedIdeas);
                          newExpanded.delete(idea.id);
                          setExpandedIdeas(newExpanded);

                          // Scroll back to the top of this Big Idea
                          setTimeout(() => {
                            const element = document.getElementById(`big-idea-${idea.id}`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }, 100);
                        }}
                        className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="text-sm font-medium">Collapse</span>
                      </button>
                    </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulations - Dos and Don'ts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Design Regulations
            </h2>
            <p className="text-center text-base text-gray-600 mb-8">
              Practical guidelines synthesized from the 8 learning principles to guide effective instructional design.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Dos */}
              <div className="bg-[#8BD5AD]/10 border border-[#8BD5AD]/30 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#8BD5AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Do This
                </h3>
                <ul className="space-y-2">
                  {regulations.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#8BD5AD' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-[#EEA291]/10 border border-[#EEA291]/30 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#EEA291' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Avoid This
                </h3>
                <ul className="space-y-2">
                  {regulations.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#EEA291' }}>✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Impact & Applications</h2>
            <p className="text-base text-gray-700 leading-relaxed">{project.impact}</p>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}
