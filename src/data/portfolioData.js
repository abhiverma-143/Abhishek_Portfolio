// ============================================================
// portfolioData.js — Centralized configuration for Abhishek Verma's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abhishek Verma",
  firstName: "Abhishek",
  brandName: "Abhishek Verma",
  title: "Frontend & Freelance Web Developer",
  location: "Bhopal, Madhya Pradesh, India",
  phone: "+91 8435083121",
  emails: {
    primary: "abhishekverma89213@gmail.com",
    secondary: "abhishekverma89213@gmail.com",
  },
  summary:
    "B.Tech Computer Science graduate (May 2026) from Bhopal specializing in React/TypeScript, WordPress/WooCommerce, and AI integrations. Freelance web developer building fast, modern websites for real clients — from local businesses to B2B tech companies.",
  resumeUrl: "/Abhishek_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/abhiverma-143",
  linkedin: "https://linkedin.com/in/abhiverma143",
  instagram: "https://www.instagram.com/abhishek_verma_____121",
};

export const heroContent = {
  greeting: "Hi, I'm Abhishek Verma",
  titleHighlight: "Frontend & Freelance Web Developer",
  subtitle:
    "I build fast, modern websites using React, TypeScript, and WordPress — for startups, local businesses, and real clients.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:abhishekverma89213@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Abhishek,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Abhishek_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abhishek Verma</span>, a freelance web developer based in Bhopal, India. I build clean, fast, and modern websites for real clients — from engineering firms to e-commerce stores — using React, TypeScript, and WordPress.`,
  techStack: ["React + TypeScript", "WordPress/WooCommerce", "Vite + Tailwind CSS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world websites",
  description:
    "I follow a focused, client-first approach to deliver fast, professional web experiences that actually work.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the client's business, goals, and target audience to lay a solid foundation before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Clean layouts, strong branding, and mobile-first design — crafted directly in WordPress or React without wasting time on Figma.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building performant frontends with React/TypeScript/Vite or WordPress/WooCommerce — with animations, SEO, and AI integrations built-in.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "Deploy on Vercel/Hostinger, configure domains, add analytics, share a live link, and iterate fast based on client feedback.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Vite", level: 88 },
        { name: "Framer Motion", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Bootstrap", level: 82 },
      ],
    },
    {
      title: "CMS & E-Commerce",
      skills: [
        { name: "WordPress", level: 88 },
        { name: "WooCommerce", level: 85 },
        { name: "ZipWP", level: 78 },
        { name: "Elementor", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Supabase", level: 80 },
        { name: "Node.js", level: 72 },
        { name: "REST APIs", level: 85 },
        { name: "Java (Spring Boot)", level: 65 },
      ],
    },
    {
      title: "Deployment & DevOps",
      skills: [
        { name: "Vercel", level: 90 },
        { name: "Cloudflare Workers", level: 78 },
        { name: "Git & GitHub", level: 88 },
        { name: "Hostinger", level: 82 },
      ],
    },
    {
      title: "AI & Integrations",
      skills: [
        { name: "Gemini API", level: 80 },
        { name: "Anthropic Claude API", level: 78 },
        { name: "Web3Forms", level: 85 },
        { name: "Vercel Analytics", level: 82 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Freelance Impact",
  heading: "Real Clients. Real Results.",
  description:
    "Every project I build solves a real business problem — from putting local businesses online to redesigning legacy B2B portals.",
  categories: [
    {
      title: "Client Websites",
      description:
        "Built and deployed production websites for real clients including IVEYS Innovations and XtraNet Technologies.",
      stats: "3+ Live Clients",
      icon: "🌐",
    },
    {
      title: "E-Commerce Stores",
      description:
        "Multi-category WooCommerce stores with COD, Razorpay, and mobile-first design for Tier-2 Indian market.",
      stats: "VogueNest & more",
      icon: "🛒",
    },
    {
      title: "AI Integrations",
      description:
        "Embedded AI chatbots powered by Gemini API via Cloudflare Workers into production websites.",
      stats: "Live on IVEYS site",
      icon: "🤖",
    },
    {
      title: "SEO & Performance",
      description:
        "WebP image optimization (98% size reduction), structured data, sitemaps, and Google Search Console indexing.",
      stats: "Indexed & Optimized",
      icon: "⚡",
    },
  ],
};

export const leadershipList = [
  {
    title: "Frontend Developer Intern — IVEYS Innovations Pvt. Ltd.",
    description:
      "Built the complete company website from scratch using React/TypeScript/Vite. Deployed on Vercel with a Hostinger domain. Added AI chatbot, SEO, analytics, image protection, and brochure download.",
    role: "Frontend Developer",
    badge: "Internship",
  },
  {
    title: "B.Tech Computer Science — Patel College of Science & Technology",
    description:
      "Graduated May 2026 from Bhopal with a degree in Computer Science. Built multiple real-world projects alongside academics.",
    role: "Graduate",
    badge: "Education",
  },
];

export const internshipsList = [
  {
    organization: "IVEYS Innovations Private Limited, Bhopal",
    role: "Frontend Developer Intern",
    duration: "2026 (Internship Period)",
    skills: ["React", "TypeScript", "Vite", "SEO", "AI Integration", "Deployment"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Vercel", "Gemini API"],
  }
];

export const softSkillsList = [
  {
    name: "Client Communication",
    icon: "💬",
    desc: "Clear communication with real clients — from requirement gathering to live site delivery and feedback iterations.",
  },
  {
    name: "Fast Delivery",
    icon: "⚡",
    desc: "Shipping complete, working deliverables fast — no endless back-and-forth, no half-done work.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Debugging API issues, fixing LCP performance, resolving Supabase RLS errors — I figure it out.",
  },
  {
    name: "Self-Learning",
    icon: "📚",
    desc: "Picked up Cloudflare Workers, Framer Motion, Web3Forms, and WooCommerce independently for real client needs.",
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Pixel-perfect UI, proper SEO meta tags, structured data, sitemap — nothing left half-done.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Switching between React/TypeScript for startups and WordPress/WooCommerce for local business clients.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Designing with Tailwind CSS, Framer Motion animations, and cohesive brand identities for each client.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing multiple freelance clients, Upwork proposals, and personal projects simultaneously.",
  },
];

export const projects = [
  {
    id: "iveys",
    number: "01",
    badge: "🚀 Live Client Project",
    title: "IVEYS Innovations Website",
    description:
      "Complete company website for IVEYS Innovations Pvt. Ltd. — an engineering firm in Bhopal (CAD/CAM/CAE, industrial automation). Built with React/TypeScript/Vite. Features hero carousel, animated counters, services section, team page, contact form (Web3Forms), AI chatbot widget (Cloudflare Worker + Gemini API), image protection, Vercel Analytics, full SEO with structured data, sitemap, and robots.txt. Live and indexed on Google Search Console.",
    techTags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Gemini API", "Cloudflare Workers", "Vercel"],
    links: {
      github: null,
      demo: "https://iveysinnovations.com",
    },
    isFlagship: true,
  },
  {
    id: "evendri",
    number: "02",
    badge: "🌿 Live Client Project",
    title: "Evendri Makhana — E-Commerce Site",
    description:
      "Premium organic makhana brand website with full e-commerce functionality. Cart system, UPI/PhonePe & card payment integration, product pages, and a clean modern UI. Built for a Bhopal-based health snack startup. Live and deployed on Vercel.",
    techTags: ["HTML", "CSS", "JavaScript", "Razorpay", "Vercel"],
    links: {
      github: null,
      demo: "https://evendri-makhana-puce.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "aegis",
    number: "03",
    badge: "🏢 Live Client Project",
    title: "Aegis Group Website",
    description:
      "Professional corporate website for Aegis Group. Clean, modern design with a focus on brand authority and business credibility. Deployed live on Vercel.",
    techTags: ["React", "JavaScript", "CSS", "Vercel"],
    links: {
      github: null,
      demo: "https://aegis-group.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "gupshup",
    number: "04",
    badge: null,
    title: "GupShup — WhatsApp-Style Chat App",
    description:
      "Real-time WhatsApp-style chat application with an AI bot integration. Fixed bot issues including short responses, language mixing, off-topic replies, and missing conversation memory. Frontend in React, backend in Java Spring Boot with Groq API for AI responses. Per-user conversation history with full context passed on every API call.",
    techTags: ["React", "Java", "Spring Boot", "Groq API", "REST API"],
    links: {
      github: "https://github.com/abhiverma-143/gupshup-frontend",
      demo: "https://gupshup-frontend.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "hospital",
    number: "05",
    badge: null,
    title: "Hospital Management System",
    description:
      "Full-featured hospital management system covering patient records, appointment scheduling, doctor management, and billing. Built as a comprehensive academic project demonstrating full-stack development skills.",
    techTags: ["Java", "Spring Boot", "MySQL", "REST API"],
    links: {
      github: "https://github.com/abhiverma-143/Hospital-Managment-System",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "secretnotes",
    number: "06",
    badge: null,
    title: "Secret Notes App",
    description:
      "A secure notes application where users can create, store, and manage private notes with authentication. Clean UI with a focus on privacy and simplicity.",
    techTags: ["React", "JavaScript", "CSS", "Authentication"],
    links: {
      github: "https://github.com/abhiverma-143/secret-notes-app",
      demo: null,
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Agentic AI Starter Course with Certification",
      issuer: "Saumya Singh",
      icon: "🤖",
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      icon: "🌐",
    },
    {
      name: "B.Tech Computer Science",
      issuer: "Patel College of Science & Technology",
      icon: "🎓",
    },
  ],
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Patel College of Science and Technology, Bhopal",
  cgpa: "6.9",
  graduation: "2026",
  twelfth: "12th – 90.2%",
  tenth: "10th – 90.4%",
};

export const footerContent = {
  taglines: [
    "Frontend & Freelance Web Developer",
    "React · TypeScript · WordPress",
    "Building Real Websites for Real Clients",
  ],
  credential: "B.Tech CSE · CGPA 6.9 · 2026",
  copyright: `© ${new Date().getFullYear()} Abhishek Verma | Built with React`,
};
