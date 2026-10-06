/**
 * Education and Timeline data for Tanha Tasri.
 * Accurately reflects her degree at Green University of Bangladesh.
 * Any additional academic entries or past milestones are provided as editable placeholders.
 */

export const educationTimeline = [
  {
    id: "gub-bsc-se",
    degree: "BSc in Software Engineering",
    institution: "Green University of Bangladesh",
    period: "Ongoing",
    status: "Currently Enrolled",
    cgpa: "3.63 / 4.00",
    description:
      "Pursuing a comprehensive curriculum in Software Engineering, focusing on software design architecture, algorithm design, full-stack web engineering, and applied intelligent systems.",
    highlight: "Academic Standing: CGPA 3.63 / 4.00",
    focusAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java, C++)",
      "Web Technologies & Frameworks",
      "Database Management Systems (MySQL, MongoDB)",
      "Software Quality Assurance & Architecture",

    ],
    isCurrent: true,
  },
  {
    id: "hsc-amirjan-college",
    isPlaceholder: false,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Amirjan College",
    period: "2021 - 2022",
    status: "Completed",
    cgpa: "GPA 5.00 / 5.00",
    description:
      "Completed Higher Secondary Certificate with a strong foundation in Science and Mathematics.",
    highlight: "Academic Standing: GPA 5.00 / 5.00 (Science)",
    focusAreas: ["Mathematics", "Physics", "Information & Communication Technology"],
    isCurrent: false,
  },
];

export const certificationsPlaceholder = [
  {
    id: "cert-1",
    isPlaceholder: true,
    title: "[Certification / Course Name Placeholder]",
    issuer: "[Issuing Organization e.g. Coursera / HackerRank / University]",
    year: "[Year]",
    credentialUrl: "#",
    description: "Placeholder for your web development or machine learning certifications. Add your certificate credentials easily here.",
    badge: "Verified Certificate",
  },
  {
    id: "cert-2",
    isPlaceholder: true,
    title: "[Hackathon / Academic Achievement Placeholder]",
    issuer: "[Competition / Department Event]",
    year: "[Year]",
    credentialUrl: "#",
    description: "Placeholder for hackathon participation, dean's list recognition, or programming contest achievements.",
    badge: "Achievement",
  },
];
