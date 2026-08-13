import { Project, SkillItem, ExperienceItem, CapabilityItem, ProcessStep, ServiceItem } from '../types';

export const personalInfo = {
  name: "Muneeb Khalid",
  avatar: "/muneeb.jpg",
  primaryTitle: "Full-Stack Developer",
  secondaryTitle: "Building scalable web applications, SaaS platforms & digital products.",
  bio: "I design and develop modern web applications, SaaS platforms, analytics systems, and mobile experiences — from system architecture and APIs to polished user interfaces and production cloud deployment.",
  github: "https://github.com/SYEDMUNEEEB",
  linkedin: "https://www.linkedin.com/in/muneebkhalid05/",
  email: "syedmuneebkhalid5@gmail.com",
  status: "AVAILABLE FOR SELECTED PROJECTS",
  stats: [
    { label: "Real-World Products", value: "4+" },
    { label: "Full-Stack Mastery", value: "Frontend + Backend" },
    { label: "Core Stack", value: "MERN & Next.js" },
    { label: "Cloud & Systems", value: "Production Deployment" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "talkingbat",
    title: "TalkingBat",
    category: "Sports Analytics / SaaS",
    shortDescription: "A high-performance cricket analytics and video performance platform enabling coaches, teams, and players to dissect match data through spatial visual insights.",
    description: "TalkingBat is a comprehensive cricket analytics and performance platform engineered to help players, coaches, teams, and cricket organizations analyze match and player performance through detailed ball-by-ball data and interactive spatial visualization engines.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MySQL", "MongoDB", "Tailwind CSS"],
    features: [
      "Cricket Analytics Dashboards with live data filtering",
      "Ball-by-ball telemetry processing and spatial mapping",
      "Interactive Pitch Map, Wagon Wheel & Beehive visualizations",
      "Catch Map, Scoring Zones & pitch zone heatmaps",
      "Player performance profiling & historical trends",
      "Video workflow integration with tagged timestamps",
      "Custom REST API architecture for instant data aggregation"
    ],
    architecture: [
      "Ball-by-Ball Match Feeds & Video Timestamps",
      "Node.js Express Processing Service",
      "Dual Data Store: MySQL (Structured Matches) + MongoDB (Spatial Telemetry)",
      "Analytics Engine & Spatial Renderer",
      "Next.js Interactive Dashboard UI"
    ],
    impact: "Transformed complex raw match telemetry into interactive spatial graphics, reducing coach match preparation time by over 60% and enabling real-time player tactical reviews.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/SYEDMUNEEEB",
    demoUrl: "https://talkingbat.com",
    featured: true,
    caseStudy: {
      challenge: "Sports analysts and cricket coaches were overloaded with raw spreadsheet data and disconnected match videos. They needed an instant, interactive visual engine that could render pitch impact locations, wagon wheels, and ball trajectory beehives without frame lag or heavy server overhead.",
      solution: "Engineered a dual-database architecture using MySQL for relational match metadata and MongoDB for high-frequency spatial telemetry. Built custom HTML5/SVG canvas visualization algorithms in React to render hundreds of ball coordinates dynamically with interactive filtering.",
      architectureDetails: {
        frontend: "Next.js 14, React, TypeScript, Tailwind CSS, Custom D3/SVG Canvas Spatial Engines",
        backend: "Node.js, Express.js microservice layer with optimized aggregation pipelines",
        database: "MySQL for structured teams/players/matches + MongoDB for spatial ball events",
        infrastructure: "Vercel + DigitalOcean Droplet with PM2 and Nginx reverse proxy"
      },
      keyFeatures: [
        "Spatial Pitch Map: Exact ball pitch coordinates color-coded by line, length, and bowler pace",
        "Wagon Wheel Engine: 360-degree shot trajectory mapping categorized by runs and match phases",
        "Beehive Visualization: Batter crease height and stump trajectory analysis",
        "Video Sync: Timestamped video playback linked directly to specific ball events"
      ],
      technicalChallenges: [
        {
          problem: "Rendering 1,000+ ball coordinate points on interactive canvas elements created UI stutter during rapid filtering.",
          resolution: "Implemented viewport spatial batching and memoized vector calculations, bringing frame rates up to a locked 60 FPS on desktop and mobile."
        },
        {
          problem: "Combining structured match outcomes with high-density unstructured spatial coordinates.",
          resolution: "Designed an efficient indexing strategy in MongoDB joined with MySQL foreign keys via a light middleware cache layer."
        }
      ],
      outcomes: [
        "Delivered a production-ready sports analytics SaaS utilized by elite coaches and players",
        "Achieved sub-100ms response times across complex multi-filter analytics queries",
        "Unified video timestamp syncing with pitch coordinate datasets"
      ]
    }
  },
  {
    id: "myislamicspouse",
    title: "MyIslamicSpouse",
    category: "Social / Matrimonial",
    shortDescription: "A privacy-focused, full-stack Islamic matrimonial platform designed for secure profile discovery, compatibility matching, and family-friendly social interaction.",
    description: "MyIslamicSpouse is a secure, full-stack social and matrimonial networking platform crafted to help users discover compatible life partners, build detailed profiles, and connect through a respectful, privacy-guarding environment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    features: [
      "Secure JWT-based Authentication & Profile Verification",
      "Multi-criteria Spouse Discovery & Filtering algorithm",
      "Privacy First: Guarded profile visibility & photo consent permissions",
      "Mutual Connection & Interest Workflows",
      "In-App Messaging with moderation & privacy controls",
      "Role-Based Admin Management & Flagging Queue"
    ],
    architecture: [
      "Client Web Application (React SPA)",
      "Express RESTful API Gateway with Authentication Guard",
      "MongoDB Database with Schema Validation & Indexes",
      "Privacy & Notification Relay Service"
    ],
    impact: "Established a trusted, privacy-respecting platform environment with high user engagement and streamlined compatibility search.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/SYEDMUNEEEB",
    featured: true,
    caseStudy: {
      challenge: "Creating a social discovery platform where personal privacy, religious guidelines, and security take absolute precedence over open public data sharing.",
      solution: "Developed fine-grained privacy authorization middle-wares where profile sections (photos, family background, bio) require explicit connection approvals before unveiling.",
      architectureDetails: {
        frontend: "React SPA, Modern Component Architecture, Tailwind CSS, Context API",
        backend: "Node.js, Express REST API, JWT Auth, Bcrypt, Express Validator",
        database: "MongoDB with Mongoose schemas and compound index optimization",
        infrastructure: "Vercel + Cloud Hosted MongoDB Atlas"
      },
      keyFeatures: [
        "Smart Search Matrix: Filter profiles by background, values, lifestyle, and location",
        "Guard Mode: Granular photo blurring and selective access controls",
        "Connection Request Flow: Structured express-interest and guardian liaison options"
      ],
      technicalChallenges: [
        {
          problem: "Efficient multi-attribute filtering across thousands of user profile documents.",
          resolution: "Created compound database indexes on key demographic and preference fields, ensuring fast pagination and query performance."
        }
      ],
      outcomes: [
        "Built a robust, end-to-end matrimonial application handling high concurrency",
        "Zero security vulnerabilities reported across authentication and messaging routes"
      ]
    }
  },
  {
    id: "medicsi",
    title: "Medicsi",
    category: "Healthcare / Management",
    shortDescription: "A full-scale hospital operational system streamlining doctor schedules, appointment booking, patient records, and multi-department healthcare workflows.",
    description: "Medicsi is a modern healthcare management platform designed to automate hospital operations, doctor scheduling, patient consultations, role-based workflows, and administrative records management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    features: [
      "Doctor Directory, Specialty Rosters & Working Hour Schedules",
      "Multi-Step Patient Appointment Booking & Instant Confirmation",
      "Patient Consultation History & Digital Health Notes",
      "Role-Based Access Control (Admin, Doctor, Patient, Reception Desk)",
      "Real-Time Queue Management & Department Status",
      "Comprehensive Admin Operational Dashboard & Metrics"
    ],
    architecture: [
      "Role-Authenticated React Web Console",
      "Express Middleware with Permission Guards",
      "MongoDB Healthcare Relational Data Models",
      "Notification & Scheduling Handler"
    ],
    impact: "Eliminated double-booking errors, reduced patient wait times, and digitized medical record handling for administrative ease.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/SYEDMUNEEEB",
    featured: true,
    caseStudy: {
      challenge: "Legacy hospital booking processes suffered from fragmented paper schedules, conflicting doctor availability, and poor patient communication.",
      solution: "Architected a central scheduling engine that dynamically locks available time slots, verifies doctor shifts, and provides instant status updates to both staff and patients.",
      architectureDetails: {
        frontend: "React.js, Tailwind CSS, Lucide Icons, Custom Schedule Grid",
        backend: "Node.js, Express.js, Service-Controller-Repository Pattern",
        database: "MongoDB with transactional consistency for appointment slot locks",
        infrastructure: "Cloud Container Engine with Automated Health Monitoring"
      },
      keyFeatures: [
        "Conflict-Free Booking Engine: Prevents overlapping slot selection in real time",
        "Role Dashboards: Customized views for Doctors, Reception, and System Administrators",
        "Patient Health Log: Centralized digital record keeping with privacy access logging"
      ],
      technicalChallenges: [
        {
          problem: "Preventing race conditions when multiple patients attempted to book the exact same doctor slot simultaneously.",
          resolution: "Implemented atomic MongoDB findAndModify slot reservation locks expiring automatically if payment/confirmation wasn't completed within 5 minutes."
        }
      ],
      outcomes: [
        "Digitized administrative operations across medical departments",
        "Achieved 100% schedule accuracy with automated slot validation"
      ]
    }
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", experienceLevel: "Advanced / Core", usedIn: "TalkingBat, MyIslamicSpouse, Medicsi", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Code" },
  { name: "Next.js", category: "Frontend", experienceLevel: "Advanced / Core", usedIn: "TalkingBat & High-Performance Web Apps", relatedProjectIds: ["talkingbat"], icon: "Globe" },
  { name: "TypeScript", category: "Frontend", experienceLevel: "Advanced", usedIn: "All Production Applications & APIs", relatedProjectIds: ["talkingbat"], icon: "FileCode" },
  { name: "JavaScript (ES6+)", category: "Frontend", experienceLevel: "Expert", usedIn: "Full-Stack Development Lifecycle", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Zap" },
  { name: "Tailwind CSS", category: "Frontend", experienceLevel: "Expert", usedIn: "Modern UI Component Design & Design Systems", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Palette" },
  { name: "Material UI", category: "Frontend", experienceLevel: "Proficient", usedIn: "Enterprise Dashboards & Admin Panels", relatedProjectIds: ["medicsi"], icon: "Layout" },

  // Backend
  { name: "Node.js", category: "Backend", experienceLevel: "Advanced / Core", usedIn: "Microservices, REST APIs, Analytics Backend", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Server" },
  { name: "Express.js", category: "Backend", experienceLevel: "Expert", usedIn: "Routing, Middleware, Auth & API Gateway", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Cpu" },
  { name: "FastAPI", category: "Backend", experienceLevel: "Proficient", usedIn: "High-Performance Python Microservices & AI Integration", relatedProjectIds: [], icon: "Terminal" },
  { name: "REST APIs", category: "Backend", experienceLevel: "Expert", usedIn: "System Integration, OpenAPI, Webhooks", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Network" },

  // Database
  { name: "MongoDB", category: "Backend", experienceLevel: "Advanced", usedIn: "Unstructured Data, Telemetry, User Documents", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "Database" },
  { name: "MySQL", category: "Backend", experienceLevel: "Advanced", usedIn: "Relational Match Tables, Financial & User Data", relatedProjectIds: ["talkingbat"], icon: "HardDrive" },
  { name: "SQLite", category: "Backend", experienceLevel: "Proficient", usedIn: "Embedded Systems & Local Storage", relatedProjectIds: [], icon: "Layers" },

  // Mobile
  { name: "React Native", category: "Mobile", experienceLevel: "Proficient", usedIn: "Cross-Platform Mobile Application Builds", relatedProjectIds: [], icon: "Smartphone" },
  { name: "Expo", category: "Mobile", experienceLevel: "Proficient", usedIn: "Rapid Mobile Prototyping & iOS/Android Builds", relatedProjectIds: [], icon: "Box" },

  // Infrastructure
  { name: "DigitalOcean", category: "Infrastructure", experienceLevel: "Proficient", usedIn: "Droplet Deployment & Cloud Hosting", relatedProjectIds: ["talkingbat"], icon: "Cloud" },
  { name: "Vercel", category: "Infrastructure", experienceLevel: "Expert", usedIn: "Next.js & Frontend Edge Deployment", relatedProjectIds: ["talkingbat", "myislamicspouse"], icon: "ExternalLink" },
  { name: "Firebase", category: "Infrastructure", experienceLevel: "Proficient", usedIn: "Auth, Realtime DB, Cloud Storage", relatedProjectIds: [], icon: "Flame" },
  { name: "GitHub Actions", category: "Infrastructure", experienceLevel: "Proficient", usedIn: "CI/CD Pipelines & Automated Testing", relatedProjectIds: ["talkingbat"], icon: "CheckCircle2" },
  { name: "PM2 & Nginx", category: "Infrastructure", experienceLevel: "Proficient", usedIn: "Process Management & Reverse Proxy Config", relatedProjectIds: ["talkingbat"], icon: "Shield" },

  // Other
  { name: "Git & GitHub", category: "Other", experienceLevel: "Expert", usedIn: "Version Control, Branching, PR Workflows", relatedProjectIds: ["talkingbat", "myislamicspouse", "medicsi"], icon: "GitBranch" },
  { name: "Socket.io", category: "Other", experienceLevel: "Proficient", usedIn: "Real-Time Chat & Live Score Feeds", relatedProjectIds: [], icon: "Radio" },
  { name: "WebRTC", category: "Other", experienceLevel: "Working Knowledge", usedIn: "Real-time audio/video streaming concepts", relatedProjectIds: [], icon: "Video" },
  { name: "AI APIs", category: "Other", experienceLevel: "Advanced", usedIn: "LLM Integration, Automated Categorization, Gemini", relatedProjectIds: [], icon: "Sparkles" },
  { name: "Data Visualization", category: "Other", experienceLevel: "Advanced", usedIn: "Sports Pitch Maps, Charts & Performance Visuals", relatedProjectIds: ["talkingbat"], icon: "BarChart3" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer",
    company: "Freelance / Software Systems Engineer",
    period: "2023 — Present",
    location: "Remote",
    focusAreas: ["SaaS Architecture", "Sports Analytics", "Healthcare Systems", "Full-Stack Web & Mobile"],
    description: "Architecting and delivering production-ready web platforms, high-throughput backend APIs, and custom database solutions for specialized platforms including TalkingBat, MyIslamicSpouse, and Medicsi.",
    responsibilities: [
      "Engineered full-stack SaaS platforms handling analytics processing, user management, and automated workflows.",
      "Built custom interactive visualization modules (Pitch Maps, Wagon Wheels) in Next.js/React with sub-100ms response times.",
      "Designed secure REST APIs with Node.js/Express, JWT auth, input validation, and role-based permissions.",
      "Optimized multi-database architectures pairing MySQL for structured relational entities and MongoDB for flexible telemetry.",
      "Deployed applications to production servers utilizing Nginx reverse proxies, PM2 process management, and Vercel edge deployment."
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "TypeScript", "MySQL", "MongoDB", "Tailwind CSS", "DigitalOcean", "REST APIs"],
    majorAccomplishments: [
      "Delivered TalkingBat's core analytics suite, enabling real-time visual breakdown of ball-by-ball cricket data.",
      "Built Medicsi hospital management system, automating appointment locks and schedule workflows.",
      "Maintained 100% production uptime and robust security standards across all deployed web platforms."
    ]
  }
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "cap-1",
    title: "SaaS Applications",
    description: "Multi-tenant platforms, user dashboards, role management, subscription workflows, and complex state management.",
    iconName: "Layers",
    highlights: ["Role-Based Access Control", "Billing & Analytics Integrations", "Optimized Core Web Vitals"]
  },
  {
    id: "cap-2",
    title: "Full-Stack Web Apps",
    description: "Complete end-to-end web applications built with React/Next.js on the frontend and Node.js/Express on the backend.",
    iconName: "Globe",
    highlights: ["SSR & SPA Hybrids", "Clean Component Architecture", "SEO & OpenGraph Optimized"]
  },
  {
    id: "cap-3",
    title: "API & Backend Systems",
    description: "Scalable REST APIs, server architecture, JWT/OAuth authentication middleware, and database ORM integrations.",
    iconName: "Server",
    highlights: ["High-Throughput Routing", "Strict Schema Validation", "Microservices & Gateways"]
  },
  {
    id: "cap-4",
    title: "Analytics Platforms",
    description: "Data-heavy dashboards, interactive chart engines, custom spatial coordinate visualizers, and reporting tools.",
    iconName: "BarChart3",
    highlights: ["Interactive Canvas/SVG", "Ball-by-Ball Spatial Processing", "Real-time Metrics"]
  },
  {
    id: "cap-5",
    title: "Mobile Applications",
    description: "Cross-platform mobile apps using React Native and Expo for iOS and Android environments.",
    iconName: "Smartphone",
    highlights: ["Shared Codebases", "Native Feature Access", "Fluid Mobile UX"]
  },
  {
    id: "cap-6",
    title: "AI-Powered Applications",
    description: "Integrating Gemini and LLM APIs to create intelligent data processing, natural language interfaces, and automation.",
    iconName: "Sparkles",
    highlights: ["Automated Categorization", "AI Assistants & Agents", "Contextual Prompting"]
  },
  {
    id: "cap-7",
    title: "Real-Time Applications",
    description: "Live communication, Socket.io event buses, real-time status feeds, and collaborative state synchronization.",
    iconName: "Radio",
    highlights: ["Low-Latency WebSockets", "Live Notifications", "Concurrent State Updates"]
  },
  {
    id: "cap-8",
    title: "Custom Platforms",
    description: "Bespoke business software, hospital workflows, matrimonial portals, and tailored industry solutions.",
    iconName: "Cpu",
    highlights: ["Custom Business Logic", "Domain-Specific UX", "Tailored Workflows"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Deep dive into business objectives, user requirements, technical constraints, and product vision.",
    details: ["Identify target user personas", "Define core MVP scope vs secondary phases", "Assess data security and compliance requirements"]
  },
  {
    number: "02",
    title: "Architect",
    summary: "Design the technical foundation, database schemas, API routes, and cloud infrastructure.",
    details: ["Select relational vs document data stores", "Define RESTful API specs & security middleware", "Plan state management and data caching strategy"]
  },
  {
    number: "03",
    title: "Design",
    summary: "Craft responsive, modern UI/UX layouts that emphasize clarity, performance, and accessibility.",
    details: ["Design dark-mode first component systems", "Ensure mathematical typographic rhythm & touch targets", "Iterate on micro-interactions and feedback states"]
  },
  {
    number: "04",
    title: "Build",
    summary: "Clean, modular engineering across the complete frontend and backend codebase.",
    details: ["Strict TypeScript interfaces & type safety", "Modular React components and custom hooks", "Service-oriented backend logic and controller layers"]
  },
  {
    number: "05",
    title: "Test",
    summary: "Rigorously verify edge cases, security permissions, responsive layouts, and query efficiency.",
    details: ["Validate auth guards & permission checks", "Optimize heavy rendering & API response times", "Verify cross-device responsiveness & accessibility"]
  },
  {
    number: "06",
    title: "Deploy",
    summary: "Seamless production launch with cloud server configuration, process managers, and SSL security.",
    details: ["Configure Nginx reverse proxies & PM2", "Set up environment secrets & edge routing", "Perform launch health-check checks"]
  },
  {
    number: "07",
    title: "Improve",
    summary: "Monitor system metrics, gather feedback, refine features, and optimize for long-term scalability.",
    details: ["Analyze database query execution plans", "Implement requested feature updates", "Maintain system dependencies and security updates"]
  }
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Full-Stack Development",
    description: "Complete end-to-end software development — turning product concepts into robust, deployed web platforms.",
    deliverables: ["Full-Stack Next.js/React + Node.js application", "Production database setup (MongoDB/MySQL)", "Authentication & authorization system", "Responsive UI & Cloud deployment"],
    idealFor: "Startups, businesses, and founders needing a single developer to own the whole build."
  },
  {
    number: "02",
    title: "SaaS Development",
    description: "Building scalable Software-as-a-Service platforms engineered for multi-user tenancy, dashboards, and growth.",
    deliverables: ["Multi-tenant architecture", "User roles & permission hierarchies", "Admin management dashboard", "Analytics & reporting tools"],
    idealFor: "SaaS founders launching new products or rebuilding legacy tools."
  },
  {
    number: "03",
    title: "Web Application Development",
    description: "Custom web applications built specifically for complex business workflows, sports analytics, or social discovery.",
    deliverables: ["Custom frontend user interfaces", "Domain-specific feature engines", "High-performance rendering", "State management & persistent storage"],
    idealFor: "Companies needing tailored software that standard off-the-shelf platforms can't provide."
  },
  {
    number: "04",
    title: "Backend & API Development",
    description: "Designing clean, scalable RESTful APIs, microservices, secure authentication gates, and database structures.",
    deliverables: ["Node.js / Express or FastAPI services", "Optimized MongoDB / MySQL schemas", "JWT & OAuth authorization middleware", "API documentation"],
    idealFor: "Frontend teams needing a reliable backend engineer or apps scaling their backend."
  },
  {
    number: "05",
    title: "React / Next.js Development",
    description: "Fast, accessible, and beautifully interactive modern web applications with top-tier performance.",
    deliverables: ["TypeScript Next.js / React codebase", "Tailwind CSS design system", "Framer Motion micro-animations", "SEO & OpenGraph configuration"],
    idealFor: "Design teams or businesses seeking a pixel-perfect, highly responsive web application."
  },
  {
    number: "06",
    title: "React Native Development",
    description: "Cross-platform mobile applications for iOS and Android sharing logic with your web stack.",
    deliverables: ["React Native / Expo mobile project", "Native device integration (Camera, Push)", "Shared API & state layer", "App store ready builds"],
    idealFor: "Products requiring native mobile companion apps alongside web dashboards."
  },
  {
    number: "07",
    title: "AI Integration",
    description: "Integrating LLMs, Gemini APIs, automated document parsing, and AI assistants directly into existing applications.",
    deliverables: ["Gemini API server-side routes", "Structured JSON output parsing", "Context-aware chat widgets & bots", "Intelligent workflow automation"],
    idealFor: "Platforms looking to enhance user productivity with smart AI features."
  },
  {
    number: "08",
    title: "Performance & Optimization",
    description: "Diagnosing and resolving slow database queries, laggy frontend renders, and unoptimized API endpoints.",
    deliverables: ["Database index & query optimization", "React render profiling & code splitting", "Lighthouse & Core Web Vitals report", "Sub-100ms API latency target"],
    idealFor: "Existing applications facing performance bottlenecks or scaling pains."
  }
];

export const advantagesData = [
  {
    title: "Full-Stack Ownership",
    description: "Capable of handling everything from UI component design and state management to server routing, database schema design, and cloud deployment.",
    iconName: "ShieldCheck"
  },
  {
    title: "Product Thinking",
    description: "I focus on solving actual business and user problems, ensuring that software architecture serves the product goal rather than creating unnecessary complexity.",
    iconName: "Lightbulb"
  },
  {
    title: "Real-World Experience",
    description: "Proven track record building platforms across sports analytics (TalkingBat), healthcare systems (Medicsi), and social networking (MyIslamicSpouse).",
    iconName: "Award"
  },
  {
    title: "Scalable Architecture",
    description: "Systems are engineered with maintainability, type safety, modular design patterns, and future technical growth in mind.",
    iconName: "GitMerge"
  },
  {
    title: "Technical Flexibility",
    description: "Fluency across JavaScript, TypeScript, Node.js, Python/FastAPI, MySQL, MongoDB, React Native, and modern cloud deployment environments.",
    iconName: "Sparkles"
  }
];
