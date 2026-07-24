const stack = [
  "React",
  "TypeScript",
  "WordPress",
  "JavaScript",
  "Framer",
  "HTML5",
  "CSS3",
  "Sass",
  "Git",
  "Figma",
];

export default function TechStack() {
  return (
    <section>

      <div className="section-title">
        <h2>Tech Stack</h2>
      </div>

      <div className="tech-grid">

        {stack.map((tech) => (
          <div
            className="tech-card"
            key={tech}
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}