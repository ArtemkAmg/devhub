import { useProjectStore } from "@/store/projectStore";

export default function Stats() {
  const projects = useProjectStore(
    (s) => s.projects
  );

  return (
    <section className="stats">
      <div className="stat">
        <h2>{projects.length}</h2>
        <span>Projects</span>
      </div>

      <div className="stat">
        <h2>15+</h2>
        <span>Technologies</span>
      </div>

      <div className="stat">
        <h2>2+</h2>
        <span>Years Learning</span>
      </div>

      <div className="stat">
        <h2>100%</h2>
        <span>Passion</span>
      </div>
    </section>
  );
}