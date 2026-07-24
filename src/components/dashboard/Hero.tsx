import { FiGithub } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          Frontend Developer
        </span>

        <h1>
          Building
          <br />
          modern web
          <br />
          experiences.
        </h1>

        <p>
       Hi, I'm Artem.
       I build modern, responsive websites and web applications
       using React, JavaScript, and leading CMS platforms..
        </p>

        <div className="hero-buttons">

          <a href="/projects" className="primary-button">
            View Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="secondary-button"
          >
            <FiGithub />
            Github
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-avatar">

          <img
            src="src/assets/I.webp"
            alt="Artem"
          />

        </div>

      </div>

    </section>
  );
}