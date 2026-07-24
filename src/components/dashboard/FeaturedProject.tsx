import { FiArrowRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);

  if (!project) return null;

  return (
    <section className="featured-project">

      <div className="featured-image">
        <img
          src={project.image}
          alt={project.name}
        />
      </div>

      <div className="featured-content">

        <span className="featured-label">
          Featured Project
        </span>

        <h2>{project.name}</h2>

        <p>{project.description}</p>

        <div className="featured-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="featured-buttons">

          <a
            href={project.live}
            target="_blank"
          >
            Open Website
            <FiArrowRight />
          </a>

          <a
            href={project.github}
            target="_blank"
          >
            <FiGithub />
          </a>

        </div>

      </div>

    </section>
  );
}