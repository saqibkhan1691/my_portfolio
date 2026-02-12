import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="section">

      <h2 className="section-title">Contact</h2>

      <p className="contact-text">
        Let's connect and build something amazing.
      </p>

      <div className="icon-row">

        <a href="https://www.linkedin.com/in/saqibkhan1691/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/saqibkhan1691" target="_blank">
          <FaGithub />
        </a>

      </div>

    </div>
  );
}
