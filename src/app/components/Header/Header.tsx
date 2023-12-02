"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const { header, title, nav } = styles;

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={header}>
      <div>
        <h1 className={title}>danylo-santoro</h1>
      </div>
      <nav className={nav}>
        <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
          _hello
        </Link>
        <Link
          className={`${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          _about
        </Link>
        <Link
          className={`${pathname === "/projects" ? "active" : ""}`}
          href="/projects"
        >
          _projects
        </Link>
        <Link href="/contact">_contact-me</Link>
      </nav>
    </header>
  );
};

export default Header;
