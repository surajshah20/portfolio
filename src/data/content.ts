export const profile = {
  name: "Suraj Kumar Sah",
  role: "I write the code and find the edge cases.",
  tagline: "SOFTWARE QA & FULL-STACK DEVELOPER",
  location: "Kathmandu / Lalitpur, Nepal",
  email: "suraj27227@gmail.com",
  phone: "+977 9806840056",
  github: "https://github.com/surajshah20",
  linkedin: "https://linkedin.com/in/surajshahcs",
  summary:
    "Hey, I'm Suraj. I build full-stack web platforms with React and Node.js, and apply rigorous QA practices to ensure they never break. I care about sharp interfaces, thoughtful backend architecture, and shipping software that actually works.",
};

export type SkillCategory = {
  category: string;
  color: string;
  items: {
    name: string;
    level: number;
    note?: string;
  }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    color: "#FF9E5E",
    items: [
      { name: "React", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "Konva.js (Canvas)", level: 75 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "#5CE7FF",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    category: "Database & Storage",
    color: "#7C5CFF",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 60 },
      { name: "Cloudinary", level: 80 },
    ],
  },
  {
    category: "QA & Testing",
    color: "#FF5E5E",
    items: [
      { name: "Manual Testing", level: 90 },
      { name: "API Testing", level: 85 },
      { name: "Edge-Case Identification", level: 85 },
      { name: "Black-Box Testing", level: 80 },
    ],
  },
  {
    category: "Authentication",
    color: "#34D2F2",
    items: [
      { name: "JWT", level: 85 },
      { name: "OAuth", level: 75 },
      { name: "Passport.js", level: 75 },
      { name: "bcrypt", level: 85 },
    ],
  },
  {
    category: "Deployment & Tools",
    color: "#FFC477",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Vercel / Render", level: 80 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Live" | "In Progress" | "Completed";
  tech: string[];
  features: string[];
  links: { demo?: string; github?: string };
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "blushbook",
    title: "BlushBook",
    tagline: "Full-Stack Photobook SaaS",
    description:
      "A full-stack web application for creating and customizing printed photobooks, deployed fully end-to-end.",
    status: "Live",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Cloudinary"],
    features: [
      "React-based photobook editor with photo uploads, templates, and previews",
      "Backend REST APIs, authentication, and PostgreSQL data management",
      "Image upload and storage pipeline integrated with Cloudinary",
      "Debugged and resolved complex frontend state, CSS, and editor rendering logic",
    ],
    links: { demo: "https://getblushbook.com" },
    accent: "#FFC477",
  },
  {
    slug: "ai-solutions",
    title: "AI-Solutions",
    tagline: "AI Startup Platform & CMS",
    description:
      "A full-stack capstone project featuring a custom content management system, secure lead-generation, and an integrated AI-powered virtual assistant.",
    status: "Completed",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS", "bcrypt"],
    features: [
      "Secure admin CMS with full CRUD capabilities and session authentication",
      "Responsive EJS templates for public pages and data-driven dashboards",
      "Robust PostgreSQL schema handling inquiries, articles, and events",
      "Validated system reliability through 58 documented black-box test cases",
    ],
    links: { github: "https://github.com/surajshah20/ai-solutions" },
    accent: "#FF9E5E",
  },
  {
    slug: "primetrade",
    title: "PrimeTrade",
    tagline: "Trading Platform",
    description:
      "A full-stack trading platform with REST APIs, JWT authentication, role-based access control, and CRUD workflows.",
    status: "Completed",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Role-based access control and JWT authentication",
      "React dashboard functionality with protected backend routes",
      "Full CRUD workflows backed by PostgreSQL",
    ],
    links: { github: "https://github.com/surajshah20/primetrade-backend" },
    accent: "#5CE7FF",
  },
  {
    slug: "explorehimalaya",
    title: "ExploreHimalaya",
    tagline: "Trekking Booking Platform",
    description:
      "An end-to-end trekking booking application with destination pages, booking workflows, and payment integration.",
    status: "Completed",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Destination browsing and live booking workflows",
      "Integration of frontend, backend APIs, and database",
      "Prepared end-to-end deployment workflows",
    ],
    links: { demo: "https://explorehimalaya.vercel.app", github: "https://github.com/surajshah20/explorehimalaya" },
    accent: "#34D2F2",
  },
  {
    slug: "finance-dashboard",
    title: "Ledger Dashboard",
    tagline: "Interactive Finance Tracker",
    description:
      "A responsive personal finance dashboard featuring dynamic data visualization, simulated role-based access control, and centralized state management.",
    status: "Completed",
    tech: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
    features: [
      "Engineered centralized state management using Vanilla JS and localStorage",
      "Integrated Chart.js for real-time balance trends and expense distribution",
      "Implemented role-based UI toggling (Admin/Viewer) with custom themed components",
      "Built a fully responsive layout with seamless dark/light mode switching",
    ],
    links: {
      demo: "https://finance-dashboardui.netlify.app/",
      github: "https://github.com/surajshah20/finance-dashboard"
    },
    accent: "#7C5CFF",
  }
];

export const timeline = [
  {
    date: "Jan 2023 — Present",
    title: "Independent Frontend & Full-Stack Developer",
    org: "Freelance / Self-Employed",
    description: "Architected, built, and deployed 5+ production-ready web applications focusing on clean UI/UX, scalable backend systems, and rigorous QA testing.",
  },
  {
    date: "2023 — 2026",
    title: "BSc (Hons) Information Technology",
    org: "ISMT College, Kathmandu — University of Sunderland",
    description: "Exams completed; awaiting graduation. Bridged academic theory with practical application by building full-stack web platforms and utilizing modern QA methodologies.",
  },
  {
    date: "June 2026",
    title: "Software Engineering Job Simulation",
    org: "Forage",
    description: "Completed practical, simulated industry tasks focusing on website creation, UI styling, financial cybersecurity, and web hosting proposals.",
  },
];