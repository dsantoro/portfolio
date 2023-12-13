"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const { header, title, nav } = styles;

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    const pathnameToArr = pathname.split("/");
    return pathnameToArr[1] === path;
  };
  return (
    <header className={header}>
      <div>
        <h1 className={title}>danylo-santoro</h1>
      </div>
      <nav className={nav}>
        <Link className={`${isActive("") ? "active" : ""}`} href="/">
          _hello
        </Link>
        <Link className={`${isActive("about") ? "active" : ""}`} href="/about">
          _about
        </Link>
        <Link
          className={`${isActive("projects") ? "active" : ""}`}
          href="/projects"
        >
          _projects
        </Link>
        <Link
          className={`${isActive("contact") ? "active" : ""}`}
          href="/contact"
        >
          _contact-me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
