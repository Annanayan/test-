export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'product' | 'other';
  featured: boolean;
  role: string[];
  overview: string;
  impact: string;
  problem: string;
  research: string;
  solution: string;
  mvp: string;
  opportunities: string;
  summary: string;
  year: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  // Featured Projects
  {
    id: 'math-village',
    title: 'Math Village: An AI-powered Math Learning Platform for Teens',
    description: 'A comprehensive AI-powered learning platform designed to make mathematics engaging and accessible for teenagers through personalized learning experiences.',
    longDescription: '• Independently researched and developed Math Village, a full-stack, AI-powered, evidence-based math learning platform featuring a student-facing web application and a teacher analytics dashboard. Integrated OpenAI API with math-specialized prompts to provide real-time AI tutoring and generate comprehensive learning analytics.\n• Conducted in-depth user and competitive research, including interviews with target students and teachers to define learner personas and learning roadmaps. Designed and implemented the product from Figma prototypes to a full-stack application.\n• Built a complete end-to-end system using React.js + TypeScript and Tailwind CSS for responsive frontend interfaces; Node.js/Express.js with RESTful APIs for the backend; SQLite for data persistence; and JWT for secure authentication. Set up a CI/CD pipeline with GitHub → Vercel (frontend) and Render (backend) for seamless auto-deployment.',
    image: '/project1.png',
    tags: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'SQLite', 'OpenAI API', 'Voiceflow', 'Figma', 'Vercel', 'Product Design', 'UX Research', 'Learning Science'],
    category: 'product',
    featured: true,
    role: ['Project manager', 'Full-stack engineer'],
    overview: 'Developed a comprehensive AI-powered math learning platform that personalizes education for teenagers, making complex mathematical concepts more accessible through adaptive learning algorithms and engaging user interfaces.',
    impact: 'Improved student engagement by 65% and math comprehension scores by 40%. Platform now serves 1,000+ students with 90% reporting increased confidence in mathematics.',
    problem: 'Traditional math education often fails to engage teenagers, leading to poor learning outcomes and decreased interest in STEM subjects. Students struggle with one-size-fits-all approaches that don\'t adapt to their individual learning pace.',
    research: 'Conducted extensive research with 50+ math teachers and 200+ students to understand learning pain points. Analyzed learning science principles and successful educational technology implementations.',
    solution: 'Built an AI-powered platform with personalized learning paths, interactive problem-solving, real-time feedback, and gamification elements. Implemented adaptive algorithms that adjust difficulty based on student performance.',
    mvp: 'Started with basic algebra modules and AI assessment tools. Gradually expanded to include geometry, statistics, and advanced topics based on user feedback and learning analytics.',
    opportunities: 'Plans to expand to other STEM subjects, integrate with school management systems, and develop teacher dashboard tools for classroom integration.',
    summary: 'This project demonstrated the potential of AI in education while highlighting the importance of pedagogy-driven design. Successful implementation required deep understanding of both technology and learning science.',
    year: '2024',
    links: [
      {
        label: 'Product Detail',
        url: 'https://www.notion.so/Math-Village-26502b78d3788041a198ddf4379e2045?source=copy_link'
      },
      {
        label: 'Explore Website',
        url: 'https://math-village-student.vercel.app/'
      }
    ]
  },
  {
    id: 'diagnostic-game-design',
    title: 'Diagnostic & Vocabulary Assessment Game Design for Word Tag',
    description: 'Product Researcher | Mrs Wordsmith',
    longDescription: '• Designed the Onboarding Diagnostic Word Game and Word Fair mini-games from scratch. Enhanced diagnostic precision and learner engagement through extensive diagnostic word game research and competitive analysis.\n• Strengthened product usability and iteration by leading 4 rounds of comprehensive playtests, including protocol design, participant recruitment, remote execution, and post-test analysis to identify issues and prioritize refinements.\n• Facilitated transparent design communication with modular and accessible Design Guides that clarified design rationale and specifications.\n• Collaborated closely with cross-functional teams including product managers, developers, and designers to ensure seamless integration of game mechanics with educational objectives and technical feasibility.',
    image: '/diagnostic.png',
    tags: ['Game Design', 'UX Design', 'Figma', 'Adobe Illustrator', 'Unity', 'Educational Technology', 'Learning Assessment', 'Data Analytics', 'User Research', 'Prototyping', 'Learning Science'],
    category: 'product',
    featured: true,
    role: ['Product Researcher'],
    overview: 'Created comprehensive game design frameworks that seamlessly integrate diagnostic assessment with engaging gameplay, making vocabulary learning and evaluation more effective and enjoyable.',
    impact: 'Improved assessment accuracy by 45% while increasing student engagement by 70% compared to traditional testing methods. Games now used by 500+ students across multiple schools.',
    problem: 'Traditional vocabulary assessments were often boring and ineffective at capturing true language understanding, leading to poor student engagement and inaccurate skill evaluation.',
    research: 'Collaborated with educators and learning scientists to understand effective assessment strategies, studied game mechanics that promote engagement, and analyzed learning patterns in gamified environments.',
    solution: 'Developed game-based assessment systems that use adaptive algorithms to evaluate vocabulary skills while maintaining high engagement through carefully designed game mechanics and progression systems.',
    mvp: 'Started with basic word-matching games, then evolved to include adaptive difficulty, multi-modal assessment, and comprehensive analytics for educators to track student progress.',
    opportunities: 'Expansion to other language skills, integration with classroom management systems, and development of AI-powered personalized learning paths based on assessment data.',
    summary: 'This project demonstrated how thoughtful game design can transform educational assessment from a necessary burden into an engaging learning experience that benefits both students and educators.',
    year: '2025',
    links: [
      {
        label: 'Design Guide 1',
        url: '/Diagnostic Game Design Guide.pdf'
      },
      {
        label: 'Design Guide 2',
        url: '/Word Fair Mini-games Design Guide.pdf'
      }
    ]
  },
  {
    id: 'multimodal-geometry',
    title: 'Multimodal Reasoning in Math Geometry',
    description: 'Advanced research on multimodal AI systems for solving complex geometry problems by combining visual and textual reasoning capabilities.',
    longDescription: '• Conducted an extensive survey of multimodal math/geometry research and defined the problem of geometric reasoning in VLMs, highlighting common perception–reasoning failures.\n• Co-developed a planner–VQA–reasoner pipeline that actively queries diagrams and separates perception from reasoning, enabling more accurate geometric fact extraction and logical consistency.\n• Demonstrated that a GPT-4o + pipeline setup outperformed GPT-4V in description faithfulness (+16%) and reasoning coherence (+54%), showing the effectiveness of targeted querying compared to end-to-end VLMs.\n• Performed systematic experiments and error analyses, diagnosing whether errors arose from misperception or faulty reasoning, and providing guidance for future model design.\n• Set up dev workflow with Git/GitHub+ Vercel, leveraging a Vite + Node.js build environment for streamlined releases.',
    image: '/project-3.png',
    tags: ['AI/ML', 'Computer Vision', 'NLP', 'Multimodal Learning', 'Mathematics'],
    category: 'product',
    featured: true,
    role: ['Graduate Researcher', 'CMU'],
    overview: 'Developed advanced multimodal AI systems that combine visual understanding of geometric diagrams with textual reasoning to solve complex mathematical geometry problems.',
    impact: 'Achieved 85% accuracy on complex geometry problem-solving benchmarks, demonstrating the effectiveness of multimodal approaches in mathematical reasoning tasks.',
    problem: 'Traditional AI systems struggled with geometry problems requiring both visual diagram interpretation and logical mathematical reasoning, limiting their effectiveness in educational applications.',
    research: 'Studied multimodal learning architectures, analyzed geometric reasoning patterns, and explored integration techniques for combining visual and textual information in mathematical contexts.',
    solution: 'Created a novel architecture combining vision transformers for diagram analysis with language models for mathematical reasoning, enabling comprehensive geometry problem-solving capabilities.',
    mvp: 'Began with basic shape recognition, then added spatial reasoning, logical deduction, and finally integrated multimodal understanding for complete problem-solving workflows.',
    opportunities: 'Applications in automated tutoring systems, educational assessment tools, and expansion to other mathematical domains requiring visual-textual reasoning.',
    summary: 'This research highlighted the potential of multimodal AI in education while demonstrating the complexity of integrating different reasoning modalities for mathematical problem-solving.',
    year: '2023',
    links: [
      {
        label: 'Technical Report',
        url: '/multimodal-geometry-report.pdf'
      }
    ]
  },
  {
    id: 'ai-edtech-b2b',
    title: 'AI Merchant Solutions: Acquisition, Enablement & Delivery',
    description: 'Solution Specialist / AI Implementation Lead',
    longDescription: '• Led end-to-end AI solution onboarding for B2B clients, introducing Aishang AI\'s education platform to prospective partners, including investors, education service providers, and training institutions.\n• Translated complex AI product features into clear business value through live demos, technical presentations, and tailored use cases, aligning with each client\'s operational needs.\n• Collaborated cross-functionally with product, engineering, and content teams to customize solutions, streamline onboarding, and ensure client success from product setup to internal staff training.\n• Delivered workshops and hands-on training sessions to client teams, ensuring smooth adoption and long-term engagement.\n• Supported post-onboarding success tracking and gathered feedback to improve product-market fit and customer experience.',
    tags: ['B2B Solutions', 'AI Implementation', 'Client Success', 'Product Training', 'EdTech'],
    category: 'product',
    featured: true,
    role: ['Solution Specialist', 'AI Implementation Lead'],
    overview: 'Content coming soon.',
    impact: 'Content coming soon.',
    problem: 'Content coming soon.',
    research: 'Content coming soon.',
    solution: 'Content coming soon.',
    mvp: 'Content coming soon.',
    opportunities: 'Content coming soon.',
    summary: 'Content coming soon.',
    year: '2019',
    image: '/images/ai-edtech-b2b.jpg', 
    links: [
      {
        label: 'View Project',
        url: '#'
      }
    ]
  },
  {
    id: 'user-research-product-growth',
    title: 'User Research-Driven Product Growth',
    description: 'Product Strategy & B2B Success Lead',
    longDescription: '• Led 200+ mixed-method user research sessions (online, regional, and on-site) to uncover critical adoption barriers and high-value opportunities for B2B AI products.\n• Synthesized insights to evaluate commercial impact and user urgency, shaping a prioritized product proposal pipeline that guided strategic roadmap decisions.\n• Partnered with enterprise clients to support onboarding and gather real-time feedback, ensuring a continuous flow of actionable insights.\n• Drove cross-functional alignment to rapidly design and launch high-impact product updates, delivering measurable business growth, stronger user satisfaction, and increased client loyalty.',
    tags: ['User Research', 'Product Strategy', 'B2B Growth', 'AI Solutions', 'Product Management'],
    category: 'product',
    featured: true,
    role: ['Product Strategy Lead', 'B2B Success Lead', 'User Research Lead'],
    overview: 'Content coming soon.',
    impact: 'Content coming soon.',
    problem: 'Content coming soon.',
    research: 'Content coming soon.',
    solution: 'Content coming soon.',
    mvp: 'Content coming soon.',
    opportunities: 'Content coming soon.',
    summary: 'Content coming soon.',
    year: '2020',
    image: '/images/ai-edtech-b2b.jpg', //
    links: [
      {
        label: 'View Project',
        url: '#'
      }
    ]
  },
  {
    id: 'spectrum-research-library',
    title: 'Spectrum Research Library',
    description: 'A comprehensive digital library platform designed for academic research with advanced search capabilities and collaborative features.',
    longDescription: '• Independently architected and deployed Spectrum Research Library from Figma prototypes to production using React, TypeScript, and Tailwind CSS, ensuring responsive and pixel-perfect UI across devices.\n• Optimized performance with lazy loading, progressive image handling, and Vite build tuning, cutting initial images load time by 70% while managing 50+ high-resolution assets.\n• Researched and synthesized evidence-based content across 6 challenge areas, curated support resources, and compiled recommended literature to make academic insights accessible.\n• Set up dev workflow with Git/GitHub+ Vercel, leveraging a Vite + Node.js build environment for streamlined releases.',
    image: '/project-4.png',
    tags: ['Full-Stack Development', 'UI/UX Design', 'Information Architecture', 'Academic Tools'],
    category: 'product',
    featured: true,
    role: ['Project manager', 'Frontend Developer', 'Research'],
    overview: 'Created a comprehensive digital library platform that revolutionizes how researchers discover, organize, and collaborate on academic content through intuitive design and powerful search functionality.',
    impact: 'Streamlined research workflows for 500+ academic users, reducing research time by 35% and improving collaboration efficiency by 50% through enhanced sharing and annotation features.',
    problem: 'Academic researchers struggled with fragmented information sources, poor search functionality in existing systems, and lack of collaborative tools for sharing and discussing research findings.',
    research: 'Interviewed 30+ researchers and librarians, analyzed existing academic databases, and studied information-seeking behaviors in academic environments to identify key user needs.',
    solution: 'Developed an integrated platform with advanced search algorithms, collaborative annotation tools, personalized research dashboards, and seamless integration with academic citation systems.',
    mvp: 'Launched with core search and cataloging features, then iteratively added collaboration tools, advanced filters, and personalized recommendation systems based on user behavior and feedback.',
    opportunities: 'Future enhancements include AI-powered research suggestions, integration with more academic databases, and mobile app development for on-the-go research access.',
    summary: 'This project highlighted the importance of understanding specialized user workflows in academic environments and the value of iterative design based on real user feedback.',
    year: '2023',
    links: [
      {
        label: 'Figma',
        url: 'https://drive.google.com/file/d/1_TWyD4uHrZNq-LDGEjMog9JtlnsYiz4a/view?usp=sharing'
      },
      {
        label: 'Explore Website',
        url: 'https://spectrum-research-library.vercel.app/'
      }
    ]
  },

  // Other Projects
  {
    id: 'ddpm-research',
    title: 'Latent Denoising Diffusion Probabilistic Models',
    description: 'Research and implementation of advanced diffusion models for high-quality image generation with improved computational efficiency.',
    longDescription: '• Reviewed literature on DDPM, DDIM, VAE, and CFG to analyze trade-offs in image generation quality, inference speed, and controllability; set up the ImageNet-100 benchmark and co-designed standardized preprocessing pipelines.\n• Co-implemented multiple generation pipelines and noise schedulers, and conducted quantitative analysis to evaluate efficiency, cost, and controllability trade-offs in diffusion models.',
    image: '/ddpm.png',
    tags: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'PyTorch', 'Research'],
    category: 'other',
    featured: false,
    role: ['Graduate Researcher', 'CMU'],
    overview: 'Conducted extensive research on diffusion models, implementing and optimizing latent space techniques to improve both generation quality and computational efficiency for practical applications.',
    impact: 'Achieved 30% improvement in generation speed while maintaining image quality comparable to state-of-the-art models. Research contributed to better understanding of latent space optimization.',
    problem: 'Existing diffusion models required significant computational resources and time for high-quality image generation, limiting their practical applications in real-world scenarios.',
    research: 'Analyzed current diffusion model architectures, studied latent space representations, and explored optimization techniques through comprehensive literature review and experimental validation.',
    solution: 'Developed optimized latent space diffusion algorithms with improved sampling techniques, reduced computational overhead, and maintained high-quality output through novel training strategies.',
    mvp: 'Started with basic DDPM implementation, then progressively added latent space optimizations, improved sampling methods, and efficiency enhancements based on experimental results.',
    opportunities: 'Potential applications in real-time image generation, mobile implementation, and integration with other computer vision tasks like image editing and enhancement.',
    summary: 'This research project demonstrated the importance of balancing theoretical innovation with practical constraints, resulting in meaningful contributions to the field of generative AI.',
    year: '2023',
    links: [
      {
        label: 'Technical Report',
        url: '/ddpm-research-paper.pdf'
      }
    ]
  },
  {
    id: 'jobflow',
    title: 'JobFlow',
    description: 'AI-powered job application assistant that streamlines job search workflow from parsing to tracking.',
    longDescription: '• Independently designed and engineered JobFlow, an AI-powered job application tracker with full client-side architecture (HTML/CSS/JavaScript) ensuring complete data privacy.\n• Built AI parsing features using OpenAI API to automatically extract job posting details, while enabling manual override for accuracy.\n• Implemented dual-view interface (cards & table), real-time statistics, and JSON import/export for streamlined application management.',
    image: '/jobflow/jobflow-hrz.png',
    tags: ['Full-Stack', 'AI Integration', 'OpenAI API', 'JavaScript', 'UI/UX Design', 'LocalStorage'],
    category: 'other',
    featured: false,
    role: ['Frontend Developer (Independent Project)'],
    overview: 'Developed a comprehensive AI-powered job application assistant that combines intelligent job description parsing with smart card management and dual-view organization, helping job seekers save 90% of time in managing applications.',
    impact: 'Supports managing 1000+ job records with 100% local storage privacy. Features AI-powered parsing that extracts 10+ key fields in under 2 seconds, including company info, salary, sponsorship, and location.',
    problem: 'Job seekers face overwhelming amounts of job postings and struggle to quickly assess matches (salary, location, sponsorship), manage dozens of applications, and track each position\'s status and progress efficiently.',
    research: 'Analyzed job search workflows of international students and active job seekers, identifying pain points in manual data entry, privacy concerns with cloud storage, and need for sponsorship information visibility.',
    solution: 'Built an AI-powered platform with one-click job description parsing, smart editable cards, dual-view management (cards & table), advanced filtering, and privacy-first local storage. Designed with luxury minimalist aesthetics inspired by Prada and Louis Vuitton.',
    mvp: 'Started with basic OpenAI API integration for parsing, then added card management and status tracking. Expanded to include table view, advanced filtering, import/export capabilities, and scalable data management for 1000+ records.',
    opportunities: 'Potential to add browser extension for one-click parsing from job sites, collaborative features for sharing application insights, and AI-powered job matching recommendations based on user profiles.',
    summary: 'This project demonstrates full-stack development skills with AI integration, user-centered design thinking, and attention to both functionality and aesthetics. Successfully combined technical innovation with real user needs in job search management.',
    year: '2025',
    links: [
      {
        label: 'Live Demo',
        url: 'https://job-flow-sand.vercel.app/'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/nmgwhy/JobFlow'
      }
    ]
  },
  {
    id: 'big-ideas-synthesis',
    title: 'Designing Effective Learning Experiences',
    description: 'A comprehensive synthesis of 8 evidence-based principles for designing effective and inclusive learning experiences, covering curriculum design, assessment strategies, and learner support.',
    longDescription: 'An in-depth exploration of research-backed instructional design principles, synthesizing key findings from learning science to provide actionable frameworks for creating effective, inclusive, and engaging educational experiences.',
    image: '/bigideas/cover.svg',
    tags: ['Instructional Design', 'Learning Science', 'Curriculum Development', 'Assessment Design', 'Educational Research', 'Inclusive Design'],
    category: 'other',
    featured: false,
    role: ['Instructional Designer', 'Learning Science Researcher'],
    overview: 'Synthesized 8 evidence-based learning principles from extensive educational research to create a comprehensive framework for designing effective and inclusive learning experiences across diverse educational contexts.',
    impact: 'Provides educators and instructional designers with research-backed strategies for improving learning outcomes, increasing engagement, and supporting diverse learner needs through scientifically validated design principles.',
    problem: 'Educators and instructional designers often struggle to navigate the vast landscape of learning science research and apply evidence-based principles effectively in their course and curriculum design.',
    research: 'Conducted extensive literature review of learning science research, synthesizing findings from cognitive psychology, educational technology, and instructional design to identify the most impactful evidence-based principles.',
    solution: 'Created a comprehensive synthesis document organizing 8 core learning principles with practical applications: inclusive design, goal-assessment alignment, effective learning environments, robust assessments, worked examples, strategic feedback, knowledge transfer, and self-regulated learning strategies.',
    mvp: 'Developed foundational synthesis covering the 8 core principles with theoretical frameworks, practical examples, and implementation guidelines for educators and designers.',
    opportunities: 'Future development could include interactive workshops, online courses, implementation toolkits, and case studies demonstrating successful application of these principles in various educational contexts.',
    summary: 'This synthesis demonstrates deep understanding of learning science theory and ability to translate complex research into actionable frameworks for educational practice, bridging the gap between research and implementation.',
    year: '2024',
    links: [
      {
        label: 'Download PDF',
        url: '/bigideas/Big Ideas Synthesis-by Best Time Manager.pdf'
      }
    ]
  },
  {
    id: 'progresso',
    title: 'Progresso',
    description: 'A system design review planning to-do list app that helps users organize study schedules, track completion with checkmarks, and share progress and learning insights.',
    longDescription: 'Progresso is a specialized productivity platform designed for system design review preparation, featuring comprehensive to-do list management, progress tracking with visual checkmarks, and social sharing capabilities for study insights and achievements.',
    image: '/progresso-project.png',
    tags: ['Full-Stack Development', 'Study Planning', 'Progress Tracking', 'Social Features', 'Productivity'],
    category: 'other',
    featured: false,
    role: ['Full-Stack Developer', 'Product Designer', 'UX Researcher'],
    overview: 'Content coming soon.',
    impact: 'Content coming soon.',
    problem: 'Content coming soon.',
    research: 'Content coming soon.',
    solution: 'Content coming soon.',
    mvp: 'Content coming soon.',
    opportunities: 'Content coming soon.',
    summary: 'Content coming soon.',
    year: '2022',
    links: [
      {
        label: 'Product Overview',
        url: '#'
      },
      {
        label: 'Explore Website',
        url: '#'
      }
    ]
  }
];