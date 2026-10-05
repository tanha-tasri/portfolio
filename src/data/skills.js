/**
 * Skills data for Tanha Tasri.
 * Categories: Languages, Web, Databases, Tools.
 * Each skill includes category, accent colors, proficiency badge, and icon name.
 */

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web Development" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & Platforms" },
];

export const skills = [
  // --- Programming Languages ---
  {
    name: "C++",
    category: "languages",
    level: "Advanced / Core",
    description: "Object-oriented programming, data structures, algorithm problem solving, and computational efficiency.",
    color: "from-blue-500 to-indigo-600",
    badge: "Core Language",
  },
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    description: "Robust OOP concepts, class hierarchies, software design patterns, and application engineering.",
    color: "from-orange-500 to-amber-600",
    badge: "OOP Specialist",
  },
  {
    name: "Python",
    category: "languages",
    level: "Proficient",
    description: "Data analysis scripting, ML algorithm exploration, automation, and backend computational logic.",
    color: "from-emerald-500 to-teal-600",
    badge: "Data / ML",
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Proficient",
    description: "ES6+, asynchronous programming, DOM manipulation, full-stack event-driven scripting.",
    color: "from-yellow-400 to-amber-500",
    badge: "Modern ES6+",
  },

  // --- Web Development ---
  {
    name: "HTML5",
    category: "web",
    level: "Proficient",
    description: "Semantic document markup, accessibility (ARIA), web standards, and responsive hierarchy.",
    color: "from-orange-600 to-red-500",
    badge: "Semantic & a11y",
  },
  {
    name: "CSS3",
    category: "web",
    level: "Proficient",
    description: "Responsive layouts, Flexbox, CSS Grid, custom properties, animations, and clean design systems.",
    color: "from-blue-400 to-indigo-500",
    badge: "Modern Styling",
  },
  {
    name: "React.js",
    category: "web",
    level: "Proficient",
    description: "Component-driven architecture, custom hooks, state management, SPA routing, and virtual DOM.",
    color: "from-cyan-400 to-blue-500",
    badge: "Frontend Core",
  },
  {
    name: "Node.js",
    category: "web",
    level: "Intermediate",
    description: "Server-side JavaScript runtime, asynchronous event loop, npm ecosystem, and backend scripting.",
    color: "from-emerald-500 to-green-600",
    badge: "Server Runtime",
  },
  {
    name: "Express.js",
    category: "web",
    level: "Intermediate",
    description: "RESTful API development, custom middleware, HTTP routing, and database controllers.",
    color: "from-slate-400 to-slate-600",
    badge: "REST APIs",
  },

  // --- Databases ---
  {
    name: "MySQL",
    category: "databases",
    level: "Intermediate",
    description: "Relational database schema modeling, normalized tables, complex queries, joins, and indexing.",
    color: "from-sky-500 to-blue-600",
    badge: "Relational SQL",
  },
  {
    name: "MongoDB",
    category: "databases",
    level: "Intermediate",
    description: "NoSQL document store, JSON/BSON modeling, collections, aggregation pipelines, and CRUD.",
    color: "from-emerald-500 to-green-700",
    badge: "NoSQL Store",
  },

  // --- Tools & Platforms ---
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    description: "Version control workflows, branching strategies, commits, rebasing, and merge resolution.",
    color: "from-orange-500 to-red-600",
    badge: "Version Control",
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    description: "Remote code repository management, pull requests, project tracking, and collaboration.",
    color: "from-purple-500 to-slate-700",
    badge: "Collaboration",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Proficient",
    description: "Primary IDE, developer extensions, debugging workflows, and integrated terminal productivity.",
    color: "from-blue-500 to-cyan-500",
    badge: "Primary IDE",
  },
];
