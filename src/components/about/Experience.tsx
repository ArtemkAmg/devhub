const experience = [
  {
    year: "2023",
    title: "Started learning Frontend",
    company: "Self Education",
  },
  {
    year: "2024",
    title: "Built first React projects",
    company: "Personal Projects and Company  Projects",
  },
  {
    year: "2026",
    title: "Create Portfolio for future job",
    company: "Freelance / Open Source",
  },
];

export default function Experience() {
  return (
    <section className="about-card">

      <h2>Experience</h2>

      <div className="timeline">

        {experience.map((item) => (
          <div
            key={item.year}
            className="timeline-item"
          >
            <div className="timeline-dot" />

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.company}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}