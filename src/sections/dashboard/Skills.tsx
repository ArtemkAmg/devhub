const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind",
  "SCSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Figma",
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Tech Stack</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-card"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}