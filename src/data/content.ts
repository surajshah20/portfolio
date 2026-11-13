export const profile = {
  name: "Suraj Kumar Sah",
  role: "Architecting scalable systems. Shipping real products.",
  tagline: "FULL-STACK SOFTWARE ENGINEER",
  location: "Kathmandu, Nepal",
  email: "suraj27227@gmail.com",
  phone: "+977 9806840056",
  github: "https://github.com/surajshah20",
  linkedin: "https://linkedin.com/in/surajshahcs",
  summary:
    "Creator of BlushBook (live commercial SaaS with 30+ print orders fulfilled) and DevGuard AI (autonomous code-security agent). Specializing in React, Node.js, and PostgreSQL web platforms with strong foundations in complex canvas state and static analysis.",
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
    color: "#5CE7FF",
    items: [
      { name: "React", level: 90, note: "Production" },
      { name: "Zustand", level: 85, note: "State Engine" },
      { name: "Konva.js (HTML5 Canvas)", level: 85, note: "2D Canvas" },
      { name: "Vite", level: 88, note: "Build Tooling" },
      { name: "Responsive Design", level: 92, note: "Mobile-First" },
      { name: "JavaScript (ES6+) / HTML5 / CSS3", level: 90, note: "Core Standard" },
    ],
  },
  {
    category: "Backend & APIs",
    color: "#3B82F6",
    items: [
      { name: "Node.js", level: 88, note: "Runtime" },
      { name: "Express.js", level: 88, note: "Framework" },
      { name: "RESTful APIs", level: 90, note: "API Architecture" },
      { name: "Zod", level: 85, note: "Schema Validation" },
      { name: "Octokit (GitHub REST API)", level: 82, note: "GitHub Automation" },
      { name: "ESLint API & AST Analysis", level: 80, note: "Static Analysis" },
      { name: "JWT / OAuth / Passport.js / bcrypt", level: 86, note: "Auth & Security" },
    ],
  },
  {
    category: "Databases & Cloud",
    color: "#7C5CFF",
    items: [
      { name: "PostgreSQL", level: 88, note: "Relational DB" },
      { name: "Neon", level: 84, note: "Serverless Postgres" },
      { name: "MongoDB", level: 75, note: "Document DB" },
      { name: "Cloudinary", level: 85, note: "Media Pipeline" },
    ],
  },
  {
    category: "Testing & QA",
    color: "#FF5E5E",
    items: [
      { name: "Playwright", level: 80, note: "E2E Automation" },
      { name: "API Testing & Postman", level: 88, note: "API Workflows" },
      { name: "Manual & Regression Testing", level: 90, note: "QA & Verification" },
      { name: "Black-box Testing", level: 85, note: "58+ Capstone Tests" },
      { name: "Test Case Design", level: 85, note: "Coverage Analysis" },
    ],
  },
  {
    category: "DevOps & Tooling",
    color: "#FFC477",
    items: [
      { name: "Git & GitHub", level: 88, note: "Version Control" },
      { name: "GitHub Actions (CI)", level: 82, note: "CI/CD Workflows" },
      { name: "Render & Vercel", level: 86, note: "Cloud Hosting" },
      { name: "Postman", level: 88, note: "API Design & Test" },
      { name: "jsPDF", level: 85, note: "300 DPI Print Pipeline" },
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
    tagline: "Commercial Web-to-Print Photobook SaaS",
    description:
      "A production web-to-print SaaS enabling customers across Nepal to design, customize, and order physical photobooks, fulfilling 30+ custom print orders end-to-end.",
    status: "Live",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Konva.js", "Zustand", "Cloudinary", "jsPDF"],
    features: [
      "Architected an interactive HTML5 Konva.js canvas engine with real-time element transformation, photo pan/zoom cropping geometry, and dynamic snap-alignment guides.",
      "Engineered a client-side print pipeline using jsPDF to compile 300 DPI production-ready PDFs with automated bleed margins and dynamic spine-width calculations.",
      "Implemented Zustand state management with multi-step undo/redo history snapshots and automated draft recovery to prevent data loss in long design sessions.",
      "Optimized initial template loading from ~15s to near-instant by resolving PostgreSQL cold starts through in-memory caching and pre-bundled static snapshots.",
      "Built REST APIs with role-based access control (Admin/User), PostgreSQL data management, and Cloudinary image handling; performed functional and regression testing across auth, editor, and order workflows.",
    ],
    links: { demo: "https://getblushbook.com" },
    accent: "#5CE7FF",
  },
  {
    slug: "devguard-ai",
    title: "DevGuard AI",
    tagline: "Autonomous Code Review & Security Analysis Agent",
    description:
      "Full-stack security review agent combining deterministic AST static analysis with Google Gemini LLMs to detect vulnerabilities, explain root causes, and propose automated fixes.",
    status: "Live",
    tech: ["Node.js", "Express", "React", "Vite", "Google Gemini API", "ESLint", "Zod", "Octokit"],
    features: [
      "Architected a full-stack security review agent combining deterministic AST static analysis with Google Gemini LLMs to detect vulnerabilities, explain root causes, and propose automated fixes.",
      "Designed an in-memory repository inspection engine over the GitHub REST API that bounds file size/counts, redacts credentials (PATs, AWS keys, tokens), and mitigates prompt injection through strict data isolation.",
      "Built a custom vulnerability detector covering OWASP Top 10 and CWEs (command injection, SQLi, eval, path traversal, weak cryptography) alongside an in-memory ESLint engine with zero disk writes.",
      "Implemented unified git diff patch generation (.patch) so proposed fixes can be applied directly with git apply.",
      "Shipped a dark-theme dashboard with severity distribution bars, filtering, and markdown reports, backed by 44 automated tests and a GitHub Actions CI workflow.",
    ],
    links: { demo: "https://devguardai-gqng.onrender.com" },
    accent: "#38BDF8",
  },
  {
    slug: "ledger",
    title: "Ledger Dashboard",
    tagline: "Finance & Expense Analytics Dashboard",
    description:
      "A responsive personal finance dashboard featuring real-time balance analytics, transaction CRUD, simulated role-based access, and centralized state management.",
    status: "Completed",
    tech: ["Vanilla JavaScript (ES6+)", "HTML5", "CSS3", "Chart.js"],
    features: [
      "Developed a responsive personal finance dashboard with balance analytics, transaction CRUD, simulated role-based access, and light/dark themes.",
      "Engineered a lightweight reactive state store in vanilla JS with localStorage, keeping UI and data in sync without an external framework.",
      "Integrated Chart.js for visualizing spending dynamics, cash-flow trends, and balance analytics.",
      "Implemented simulated role-based UI toggling (Admin/Viewer) with custom themed components.",
    ],
    links: {
      demo: "https://finance-dashboardui.netlify.app/",
      github: "https://github.com/surajshah20/finance-dashboard",
    },
    accent: "#7C5CFF",
  },
  {
    slug: "explorehimalaya",
    title: "ExploreHimalaya",
    tagline: "Trekking Booking Platform",
    description:
      "An end-to-end trekking booking application with destination pages, interactive booking workflows, and payment integration for multi-tier packages.",
    status: "Completed",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Destination exploration and booking workflows for multi-tier trekking packages across the Himalayas.",
      "Robust RESTful API endpoints handling itinerary selection, booking state, and payment transactions.",
      "PostgreSQL relational database modeling routes, client bookings, and guide assignments.",
      "Seamless client-to-server integration with responsive UI and verified deployment workflows.",
    ],
    links: {
      demo: "https://explorehimalaya.vercel.app",
      github: "https://github.com/surajshah20/explorehimalaya",
    },
    accent: "#34D2F2",
  },
  {
    slug: "primetrade",
    title: "PrimeTrade",
    tagline: "Trading Platform & Dashboard",
    description:
      "A trading platform backend and React dashboard with JWT authentication, role-based access control, and protected PostgreSQL-backed routes.",
    status: "Completed",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "Role-based access control and JWT authentication securing trader and admin accounts.",
      "React dashboard interface with protected backend routes and transaction logs.",
      "Full CRUD workflows and trade order processing backed by PostgreSQL.",
    ],
    links: {
      github: "https://github.com/surajshah20/primetrade-backend",
    },
    accent: "#FF9E5E",
  },
  {
    slug: "ai-solutions",
    title: "AI-Solutions",
    tagline: "AI Startup Platform & CMS (Capstone)",
    description:
      "A full-stack capstone project featuring a custom content management system, bcrypt-secured admin dashboard, and an integrated AI virtual assistant.",
    status: "Completed",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS", "bcrypt"],
    features: [
      "Secure admin CMS with full CRUD capabilities, bcrypt password hashing, and session authentication.",
      "Responsive EJS templates for public company pages, inquiry forms, and event schedules.",
      "Integrated AI virtual assistant providing automated user support and lead triage.",
      "Validated system reliability and edge-case resilience through 58 documented black-box test cases.",
    ],
    links: {
      github: "https://github.com/surajshah20/ai-solutions",
    },
    accent: "#FFC477",
  },
];

export const timeline = [
  {
    date: "Jan 2026 — Present",
    title: "Full-Stack Software Engineer — BlushBook",
    org: "BlushBook (Commercial Web-to-Print SaaS)",
    description:
      "Architected and deployed a commercial web-to-print photobook SaaS fulfilling 30+ physical print orders across Nepal. Developed the HTML5 Konva.js canvas engine, jsPDF 300 DPI client-side print pipeline, and near-instant template loading through PostgreSQL cold-start optimizations.",
  },
  {
    date: "2026",
    title: "Creator & Lead Developer — DevGuard AI",
    org: "Autonomous Security & AST Code Review Agent",
    description:
      "Architected a full-stack security review agent combining deterministic AST static analysis with Google Gemini LLMs to detect OWASP Top 10 vulnerabilities, redact credentials, and generate unified git .patch automated fixes.",
  },
  {
    date: "2023 — 2026",
    title: "BSc (Hons) Computer Systems Engineering",
    org: "ISMT College, Kathmandu (Affiliated with the University of Sunderland, UK)",
    description:
      "Final-year results published; official degree certificate pending convocation. Strong foundation in software architecture, static analysis, distributed systems, and REST API design.",
  },
  {
    date: "2025 — 2026",
    title: "Full-Stack Web & Systems Developer",
    org: "Independent & Capstone Engineering",
    description:
      "Delivered production-grade platforms including ExploreHimalaya booking system, PrimeTrade trading dashboard, Ledger vanilla JS finance analytics, and the AI-Solutions capstone verified with 58 documented black-box test cases.",
  },
];
