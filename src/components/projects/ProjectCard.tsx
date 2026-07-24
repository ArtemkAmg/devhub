import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.name}
        />

        {project.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

      </div>

      <div className="project-content">

        <div className="project-top">

          <div>

            <h3>{project.name}</h3>

            <span>{project.year}</span>

          </div>

        </div>

        <p>{project.description}</p>

        <div className="project-stack">

          {project.stack.map((tech) => (

            <span key={tech}>{tech}</span>

          ))}

        </div>

        <div className="project-links">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub size={20} />
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiExternalLink size={20} />
    </a>
  )}
</div>

      </div>

    </article>
  );
}