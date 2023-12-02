import { Folder as FolderIcon } from "lucide-react";
import styles from "./folder.module.css";

interface FolderProps {
  label: string;
}

const { text, red, green, blue } = styles;

const Folder = ({ label }: FolderProps) => {
  const randomColor = () => {
    const colors = [red, green, blue];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <span className={text}>
      <FolderIcon className={randomColor() as string} size={16} /> {label}
    </span>
  );
};

export default Folder;
