const stats = [
  {
    title: "Projects",
    value: "15+",
  },
  {
    title: "Experience",
    value: "3+ Years",
  },
  {
    title: "Technologies",
    value: "10+",
  },
  {
    title: "Completed",
    value: "100%",
  },
];

export default function QuickStats() {
  return (
    <section className="stats-grid">

      {stats.map((item) => (

        <div
          className="stat-card"
          key={item.title}
        >

          <h2>{item.value}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </section>
  );
}