import hero from "@/assets/avatar.jpg";
import {
  FiGithub,
  FiSend,
} from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-left">

        <p className="eyebrow">
          FRONTEND DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Artem</span>
        </h1>

        <p className="about-description">
         A passionate frontend developer from Ukraine.
        I enjoy creating fast, modern, and beautiful
        web applications.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/ArtemkAmg"
            target="_blank"
            className="primary-button"
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href="https://t.me/Lebiga5"
            target="_blank"
            className="secondary-button"
          >
            <FiSend />
            Telegram
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={hero}
          alt="Developer"
        />

      </div>

    </section>
  );
}