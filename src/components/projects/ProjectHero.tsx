import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section className="project-hero">

      <img
        src={project.image}
        alt={project.name}
      />

      <div className="project-hero-info">

        <span className="featured">
          Featured Project
        </span>

        <h2>{project.name}</h2>

        <p>{project.description}</p>

        <div className="stack">
          {project.stack.map(tech => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="hero-links">
          <a
            href={project.github}
            target="_blank"
          >
            <FiGithub />
            Github
          </a>

          <a
            href={project.live}
            target="_blank"
          >
            <FiExternalLink />
            Live Demo
          </a>
        </div>

      </div>

    </section>
  );
}