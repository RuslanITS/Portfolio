import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <span>
          © {new Date().getFullYear()} Ruslan Cheenov
        </span>

        <a
          href="https://github.com/RuslanITS"
          target="_blank"
          rel="noreferrer"
          className="text-light"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://t.me/Borzot1a"
          target="_blank"
          rel="noreferrer"
          className="text-light"
        >
          <FaTelegram size={20} />
        </a>

        <a
          href="mailto:ruslan.code.it@gmail.com"
          className="text-light"
        >
          <FaEnvelope size={20} />
        </a>
      </Container>
    </footer>
  );
};

export default Footer;