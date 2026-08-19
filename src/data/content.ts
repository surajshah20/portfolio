export const profile = {  
  name: "Suraj Kumar Sah",  
  role: "Full-Stack Developer",  
  tagline: "Building scalable applications from frontend to deployment.",  
  location: "Kathmandu / Lalitpur, Nepal",  
  email: "suraj27227@gmail.com",  
  phone: "+977 9806840056",  
  github: "https://github.com/surajshah20",  
  linkedin: "https://linkedin.com/in/surajshahcs",  
  summary:  
    "Final-year BSc IT student and full-stack developer with hands-on experience building React, Node.js, and PostgreSQL applications. I am comfortable working across the frontend and backend, debugging complex application issues, and shipping full-stack projects end to end.",  
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
    category: "Authentication",  
    color: "#FF5E5E",  
    items: [  
      { name: "JWT", level: 85 },  
      { name: "OAuth", level: 75 },  
      { name: "Passport.js", level: 75 },  
      { name: "bcrypt", level: 85 },  
    ],  
  },  
  {  
    category: "Deployment",  
    color: "#34D2F2",  
    items: [  
      { name: "Vercel", level: 85 },  
      { name: "Render", level: 80 },  
      { name: "Neon PostgreSQL", level: 80 },  
    ],  
  },  
  {  
    category: "Tools",  
    color: "#FFC477",  
    items: [  
      { name: "Git / GitHub", level: 85 },  
      { name: "Postman", level: 85 },  
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
      "Resolved complex frontend state, CSS, and editor rendering logic",  
    ],  
    links: { demo: "https://getblushbook.com" },  
    accent: "#FFC477",  
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
    slug: "secure-auth",  
    title: "Secure Authentication System",  
    tagline: "Authentication Engine",  
    description:  
      "A standalone, secure authentication flow including password hashing, Google OAuth, sessions, and protected routes.",  
    status: "Completed",  
    tech: ["Node.js", "Express", "PostgreSQL", "bcrypt", "Passport.js"],  
    features: [  
      "bcrypt password hashing and session management",  
      "Google OAuth integration",  
      "Implementation of protected backend routes",  
    ],  
    links: { github: "https://github.com/surajshah20" },  
    accent: "#7C5CFF",  
  },  
];

export const timeline = [  
  {  
    date: "Expected 2026",  
    title: "BSc (Hons) Information Technology",  
    org: "ISMT College, Kathmandu — University of Sunderland",  
    description:  
      "Final-year coursework.",  
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