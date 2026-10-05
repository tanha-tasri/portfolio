/**
 * Projects data for Tanha Tasri.
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Duplicate one of the project objects below.
 * 2. Fill in your project title, description, tags, and links.
 * 3. Add an image in /public/projects/ or leave imageUrl as null for the automatic gradient placeholder.
 * 4. Save this file — your portfolio updates automatically!
 */

export const projects = [
  {
    id: "mentralink",
    title: "MentraLink",
    subtitle: "Student Mentorship Management System",
    description:
      "A comprehensive student mentorship management platform designed to connect students with academic and industry mentors. Streamlines mentorship discovery, interactive session scheduling, progress monitoring, and collaborative communication.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    featured: true,
    liveUrl: "https://mentra-link.vercel.app/",
    githubUrl: "https://github.com/tanha-tasri", // Placeholder or direct repo link: replace with specific repo URL when ready
    category: "Full Stack",
    highlights: [
      "Mentee & mentor profile onboarding and role workflows",
      "Interactive session booking and scheduling dashboard",
      "Full-stack RESTful API architecture powered by Express & MongoDB",
      "Responsive, clean UI engineered with React and modern styling",
    ],
    // If you have a screenshot, place it in /public/projects/mentralink.png and reference "/projects/mentralink.png"
    imageUrl: null, 
    badge: "Featured Project",
    status: "Live Production",
  },
  {
    id: "upcoming-ml-project",
    isPlaceholder: true,
    title: "[Next Project - Web / ML]",
    subtitle: "Under Active Development",
    description:
      "A placeholder slot ready for your next exciting build in Machine Learning or Data Science. Add your repository and live demo links right here in src/data/projects.js.",
    tags: ["Python", "Machine Learning", "Data Science", "React"],
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/tanha-tasri",
    category: "Machine Learning",
    highlights: [
      "Placeholder for future data pipeline or predictive model",
      "Easily configurable in src/data/projects.js",
    ],
    imageUrl: null,
    badge: "Coming Soon",
    status: "In Progress",
  },
  {
    id: "upcoming-fullstack-project",
    isPlaceholder: true,
    title: "[Next Full-Stack Application]",
    subtitle: "Idea & Design Phase",
    description:
      "A placeholder slot for an upcoming web application using C++, Java, Node.js, or MySQL. Simply fill in the details in src/data/projects.js.",
    tags: ["Node.js", "MySQL", "JavaScript", "Express.js"],
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/tanha-tasri",
    category: "Web Development",
    highlights: [
      "Modular schema ready for your next codebase",
      "Supports demo link, code repository, and tech chips",
    ],
    imageUrl: null,
    badge: "Planned",
    status: "Upcoming",
  },
];
