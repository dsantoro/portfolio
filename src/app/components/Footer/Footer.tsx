import { Linkedin, Facebook, Github } from "lucide-react";
import styles from "./footer.module.css";

const { footer } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <span>find me in:</span>
      <a
        href="https://www.linkedin.com/in/danylo-santoro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="https://www.facebook.com/danylo.santoro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={28} />
      </a>
      <a
        href="https://github.com/dsantoro"
        target="_blank"
        rel="noopener noreferrer"
      >
        @dsantoro
        <Github size={28} />
      </a>
    </footer>
  );
};

export default Footer;
