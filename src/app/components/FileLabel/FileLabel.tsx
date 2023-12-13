import { X } from "lucide-react";

import styles from "./filelabel.module.css";

interface FileLabelProps {
  fileName: string;
}

const { filelabel } = styles;

const FileLabel = ({ fileName }: FileLabelProps) => {
  return (
    <div className={filelabel}>
      <p>
        {fileName}
        <X size={12} />
      </p>
    </div>
  );
};

export default FileLabel;
