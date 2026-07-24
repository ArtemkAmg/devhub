import {
  FiCode,
  FiLayout,
  FiSmartphone,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    text: "Modern web applications with scalable architecture.",
  },
  {
    icon: <FiLayout />,
    title: "UI / UX",
    text: "Clean interfaces focused on user experience.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    text: "Perfect layouts for every device.",
  },
];

export default function Services() {
  return (
    <section>

      <h2 className="section-title">
        What I Do
      </h2>

      <div className="services-grid">

        {services.map((service) => (
          <div
            key={service.title}
            className="service-card"
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}