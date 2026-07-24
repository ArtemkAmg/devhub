const facts = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

export default function Facts() {
  return (
    <section>

      <div className="facts-grid">

        {facts.map((fact) => (
          <div
            key={fact.label}
            className="fact-card"
          >
            <h2>{fact.value}</h2>

            <p>{fact.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}