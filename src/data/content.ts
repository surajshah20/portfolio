export const profile = {
  name: "Suraj Kumar Sah",
  role: "Full-Stack Developer & 3D Web Enthusiast",
  tagline: "Explore the Himalayas of Code",
  location: "Kathmandu / Lalitpur, Nepal",
  email: "suraj27227@gmail.com",
  phone: "+977 9806840056",
  github: "https://github.com/surajshah20",
  linkedin: "https://linkedin.com/in/surajshahcs",
  summary:
    "Final-year BSc IT student with hands-on experience building full-stack web applications using Node.js, Express.js, PostgreSQL, and React. I focus on RESTful APIs, secure authentication, and interfaces that feel as solid as they look — and I'm looking for a team to build that with next.",
};

export const skills = [
  {
    category: "Backend",
    color: "#5CE7FF",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST API Design", level: 80 },
      { name: "NestJS", level: 40, note: "Learning" },
    ],
  },
  {
    category: "Frontend",
    color: "#FF9E5E",
    items: [
      { name: "React.js", level: 80 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "EJS", level: 70 },
    ],
  },
  {
    category: "Database",
    color: "#7C5CFF",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 55 },
      { name: "MongoDB", level: 50 },
    ],
  },
  {
    category: "Auth & Security",
    color: "#5CE7FF",
    items: [
      { name: "JWT", level: 80 },
      { name: "bcrypt", level: 80 },
      { name: "Passport.js", level: 70 },
      { name: "Google OAuth", level: 70 },
      { name: "RBAC", level: 70 },
    ],
  },
  {
    category: "Tools & Workflow",
    color: "#FF9E5E",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Agile Basics", level: 55 },
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
    slug: "primetrade",
    title: "PrimeTrade",
    tagline: "Full-Stack Trading & Finance Platform",
    description:
      "A scalable trading dashboard backed by a REST API with JWT authentication and role-based access control, built to handle real-time-feeling portfolio data without breaking a sweat.",
    status: "Completed",
    tech: ["Node.js", "Express.js", "PostgreSQL", "React.js", "JWT"],
    features: [
      "Scalable REST API with JWT auth and role-based access control",
      "Full CRUD functionality backed by PostgreSQL",
      "React.js frontend with protected routes and a live dashboard",
      "Input validation and documented API contracts",
    ],
    links: { github: "https://github.com/surajshah20/primetrade-backend" },
    accent: "#5CE7FF",
  },
  {
    slug: "ai-solutions",
    title: "AI-Solutions",
    tagline: "AI Startup Platform — Sunderland, UK",
    description:
      "Marketing and inquiry platform for a fictitious AI startup helping companies improve the digital employee experience. Visitors browse services and past work, then reach the team through a structured inquiry form — no account required.",
    status: "Completed",
    tech: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Session Auth"],
    features: [
      "Service showcase, past-solutions gallery, and testimonials",
      "Contact form capturing name, email, phone, company, country, job title, and job details",
      "No account or password required for customers",
      "Password-protected admin dashboard for inquiry analytics",
    ],
    links: { github: "https://github.com/surajshah20/ai-solutions" },
    accent: "#FF9E5E",
  },
  {
    slug: "explorehimalaya",
    title: "ExploreHimalaya",
    tagline: "Full-Stack Trekking Platform",
    description:
      "A booking platform for Himalayan treks: browse destinations, check live availability, and book a trip from a personal dashboard — payment included.",
    status: "Completed",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Payment Integration"],
    features: [
      "Trek booking system with availability handling",
      "Rich destination pages with itinerary details",
      "User dashboard for managing bookings",
      "Integrated payment flow",
    ],
    links: { demo: "https://explorehimalaya.vercel.app", github: "https://github.com/surajshah20/explorehimalaya" },
    accent: "#34D2F2",
  },
  {
    slug: "blushbook",
    title: "Blushbook",
    tagline: "Photobook Web Application",
    description:
      "A full-stack photobook platform that lets people upload images and arrange them into a custom-printed keepsake, template by template.",
    status: "In Progress",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    features: [
      "Image upload and storage pipeline",
      "Template selection for photobook layouts",
      "Drag-and-image arrangement interface",
      "Responsive React.js frontend",
    ],
    links: { github: "https://github.com/surajshah20/travel-photo-book" },
    accent: "#FFC477",
  },
  {
    slug: "secure-auth",
    title: "Secure Authentication System",
    tagline: "Full-Stack Auth Engine",
    description:
      "A standalone authentication system built to be dropped into other projects: hashed passwords, OAuth, and session management done properly from day one.",
    status: "Completed",
    tech: ["Node.js", "Express.js", "PostgreSQL", "bcrypt", "Google OAuth"],
    features: [
      "bcrypt password hashing",
      "Google OAuth integration",
      "Session-based authentication",
      "Secure data management practices throughout",
    ],
    links: { github: "https://github.com/surajshah20" },
    accent: "#7C5CFF",
  },
];

export const timeline = [
  {
    date: "Expected Oct 2026",
    title: "BSc (Hons) Information Technology",
    org: "ISMT College, Kathmandu — University of Sunderland",
    description:
      "Final-year coursework spanning software engineering, databases, and full-stack web development.",
  },
  {
    date: "June 2026",
    title: "Introduction to Software Engineering — Virtual Internship",
    org: "Commonwealth Bank, via Forage",
    description: "Simulated real-world software engineering tasks and workflows.",
  },
  {
    date: "Self-paced",
    title: "Full Stack Web Development",
    org: "Udemy",
    description: "HTML, CSS, JavaScript, React, Node.js, Express.js, REST APIs, PostgreSQL.",
  },
];
