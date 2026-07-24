import { create } from "zustand";
import type { Project } from "@/types/project";

interface ProjectStore {
  projects: Project[];

  addProject: (project: Project) => void;

  removeProject: (id: string) => void;

  updateProject: (
    id: string,
    data: Partial<Project>
  ) => void;
}

export const useProjectStore =
  create<ProjectStore>((set) => ({
    projects: [
  {
    id: "1",

    name: "DevHub",

    description:
      "Portfolio dashboard built with React.",

    image: "/react.svg",

    github: "https://github.com",

    live: "https://example.com",

    year: "2025",

    featured: true,

    stack: [
      "React",
      "TypeScript",
      "Zustand",
    ],
  },

  {
    id: "2",

    name: "Weather App",

    description:
      "Weather forecast application.",

    image: "/vite.svg",

    github: "https://github.com",

    live: "https://example.com",

    year: "2025",

    featured: false,

    stack: [
      "React",
      "API",
      "CSS",
    ],
  },
],

    addProject: (project) =>
      set((state) => ({
        projects: [...state.projects, project],
      })),

    removeProject: (id) =>
      set((state) => ({
        projects: state.projects.filter(
          (p) => p.id !== id
        ),
      })),

    updateProject: (id, data) =>
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id
            ? { ...project, ...data }
            : project
        ),
      })),
  }));