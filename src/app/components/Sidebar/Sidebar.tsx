import { TerminalSquare, CircleUser, Gamepad } from "lucide-react";
import styles from "./sidebar.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const { sidebar, content } = styles;

const ICON_SIZE = 24;

const Sidebar = ({ children }: Props) => {
  return (
    <aside className={sidebar}>
      <div className={styles["icon-tray"]}>
        <TerminalSquare size={ICON_SIZE} />
        <CircleUser size={ICON_SIZE} />
        <Gamepad size={ICON_SIZE} />
      </div>
      <div className={content}>{children}</div>
    </aside>
  );
};

export default Sidebar;
