const skills = [
  "React",
  "TypeScript",
  "WordPress",
  "JavaScript",
  "Framer",
  "HTML5",
  "CSS3",
  "Git",
  "Sass",
  "Figma",
];

export default function Skills() {
  return (
    <section className="about-card">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}