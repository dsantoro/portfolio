"use client";
import { ReactElement, useState } from "react";

import styles from "./acordeon.module.css";

interface AcordeonProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  iconOpen?: React.ReactNode;
  hasSeparator?: boolean;
  button: undefined | ReactElement | string;
  defaultOpen?: boolean;
}

const { acordeon, toggle, separator } = styles;

const Acordeon = ({
  icon,
  iconOpen,
  children,
  button,
  hasSeparator = false,
  defaultOpen,
}: AcordeonProps) => {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className={acordeon}>
      <button
        className={`${toggle} ${hasSeparator ? separator : ""}`}
        onClick={() => setOpen(!open)}
      >
        {!open ? icon : iconOpen} {button}
      </button>
      {open && children}
    </div>
  );
};

export default Acordeon;
