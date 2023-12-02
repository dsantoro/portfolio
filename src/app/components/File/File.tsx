import { FileJson2 } from "lucide-react";
import styles from "./file.module.css";

interface FileProps {
  fileName: string;
}

const { file } = styles;

const File = ({ fileName }: FileProps) => {
  return (
    <div className={file}>
      <FileJson2 size={18} />
      <span>{fileName}</span>
    </div>
  );
};

export default File;
