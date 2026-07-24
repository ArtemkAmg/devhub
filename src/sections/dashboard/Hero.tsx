import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="eyebrow">
          FRONTEND DEVELOPER
        </p>

        <h1>
          Hi 👋 <br />
          I'm <span>Artem</span>
        </h1>

        <p>
          I build modern websites using
          React, TypeScript and Next.js.
        </p>

        <button className="primary-button">
          View Projects
          <FiArrowRight />
        </button>
      </div>

      <div className="hero-right">
        <img
          src="/hero.png"
          alt="Hero"
        />
      </div>
    </section>
  );
}