import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import Acordeon from "../components/Acordeon";
import Sidebar from "../components/Sidebar";
import Folder from "../components/Folder";
import styles from "./page.module.css";
import File from "../components/File";

const { container } = styles;

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const RootLayout = ({ children }: Props) => {
  return (
    <div className={container}>
      <Sidebar>
        <Acordeon
          button="personal-info"
          hasSeparator
          defaultOpen
          icon={<ChevronRight size={20} />}
          iconOpen={<ChevronDown size={20} />}
        >
          <Acordeon
            button={<Folder label="bio" />}
            defaultOpen
            icon={<ChevronRight size={20} />}
            iconOpen={<ChevronDown size={20} />}
          >
            <Link href="/about">
              <File fileName="about-me.md" />
            </Link>
          </Acordeon>
          <Acordeon
            button={<Folder label="technologies" />}
            icon={<ChevronRight size={20} />}
            iconOpen={<ChevronDown size={20} />}
          >
            <Link href="/about/technologies">
              <File fileName="technologies.ts" />
            </Link>
          </Acordeon>
          <Acordeon
            button={<Folder label="education" />}
            icon={<ChevronRight size={20} />}
            iconOpen={<ChevronDown size={20} />}
          >
            <Link href="/about/education">
              <File fileName="education.ts" />
            </Link>
          </Acordeon>
          <Acordeon
            button={<Folder label="setup" />}
            icon={<ChevronRight size={20} />}
            iconOpen={<ChevronDown size={20} />}
          >
            <Link href="/about/setup">
              <File fileName="setup.txt" />
            </Link>
          </Acordeon>
        </Acordeon>

        <Acordeon
          button="contacts"
          hasSeparator
          icon={<ChevronRight size={20} />}
          iconOpen={<ChevronDown size={20} />}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eos
          expedita. Doloribus harum qui fugit eos deserunt eaque eligendi
          reprehenderit, laboriosam quibusdam incidunt ipsa sed earum magni
          odio! Ut, amet!
        </Acordeon>
      </Sidebar>
      <div style={{ overflowY: "auto" }}>{children}</div>
    </div>
  );
};

export default RootLayout;
