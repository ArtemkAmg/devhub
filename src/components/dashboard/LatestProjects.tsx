import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function LatestProjects() {
  return (
    <section>

      <div className="section-title">
        <h2>Latest Projects</h2>
      </div>

      <div className="dashboard-projects">

        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}