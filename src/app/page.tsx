import { Terminal } from "lucide-react";

import styles from "./page.module.css";

const { welcome, token, key, code } = styles;

export default function Home() {
  return (
    <div className={welcome}>
      <h2>Hallo allemaal! Ik ben</h2>
      <h1>Danylo Santoro</h1>
      <h3>
        <Terminal />
        Front-end developer
      </h3>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <p>// see more at</p>
      <p>
        <span className={token}>const</span>{" "}
        <span className={key}>githubLink</span> ={" "}
        <a
          title="Github"
          href="https://github.com/dsantoro"
          target="_blank"
          rel="noopener noreferrer"
          className={code}
        >
          https://github.com/dsantoro
        </a>
      </p>
    </div>
  );
}
