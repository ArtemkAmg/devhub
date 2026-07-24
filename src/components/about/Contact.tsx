import {
  FiGithub,
  FiMail,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-card">

      <div>

        <p className="eyebrow">
          LET'S WORK TOGETHER
        </p>

        <h2>
          Interested in working together?
        </h2>

        <p>
          I'm always open to new opportunities,
          freelance projects and collaborations.
        </p>

      </div>

      <div className="contact-buttons">

        <a
          href="https://github.com/"
          target="_blank"
          className="primary-button"
        >
          <FiGithub />
          GitHub
        </a>

        <a
          href="mailto:atamancuck2006@gmail.com"
          className="secondary-button"
        >
          <FiMail />
          Email
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

    </section>
  );
}