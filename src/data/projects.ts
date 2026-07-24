import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "DevHub",
    description:
      "This is not a client's website—it is the developer's own portfolio.",
    image: "src/assets/projects/Portfolio.webp",
    github: "https://artemkamg.github.io/portfolio",
    live: "http://localhost:5173/projects",
    featured: true,
    year: "2026",
    stack: ["React", "TypeScript", "Vite", "Zustand"],
  },

  {
    id: "2",
    name: "Pediatric Practice",
    description:
      "A modern medical center for children in Khmelnytskyi.",
    image: "src/assets/projects/pediatr.webp",
    github: "",
    live: "https://pediatric-practic-khm.com.ua/",
    featured: false,
    year: "2025",
    stack: ["WordPress", "Elementor"],
  },

  {
    id: "3",
    name: "Kiewit",
    description:
      "Website for design, construction, and engineering works.",
    image: "src/assets/projects/kiewit.webp",
    github: "",
    live: "https://www.kiewit.com",
    featured: true,
    year: "2024",
    stack: ["WordPress", "Elementor", "Gutenberg"],
  },

  {
    id: "4",
    name: "Evergreen RTO",
    description:
      "Rent-to-Own Program Management System.",
    image: "src/assets/projects/evergreenrto.webp",
    github: "",
    live: "https://www.evergreenrto.com",
    featured: false,
    year: "2024",
    stack: ["GoHighLevel"],
  },

  {
    id: "5",
    name: "E&K Cleaning Service",
    description:
      "Professional cleaning service in Chicago.",
    image: "src/assets/projects/cleaning.webp",
    github: "",
    live: "https://www.maidschicago.com",
    featured: true,
    year: "2024",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },

  {
    id: "6",
    name: "Mercedes Benz (My Project)",
    description:
      "A personal website is currently under development.",
    image: "src/assets/projects/My_mercedes.webp",
    github: "https://github.com/ArtemkAmg/Mercedes_Benz",
    live: "https://artemkamg.github.io/Mercedes_Benz",
    featured: false,
    year: "2025",
    stack: ["WordPress", "Elementor", "HTML", "CSS", "Figma"],
  },

  {
    id: "7",
    name: "27North",
    description:
      "Luxury expedition vehicles built for adventure and comfort.",
    image: "src/assets/projects/27North.webp",
    github: "",
    live: "https://refreshed-task-263289.framer.app",
    featured: true,
    year: "2023",
    stack: ["Framer", "CMS"],
  }
];