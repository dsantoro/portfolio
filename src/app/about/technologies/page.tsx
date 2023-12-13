import FileLabel from "@/app/components/FileLabel";
import styles from "../page.module.css";
import homeStyles from "../../page.module.css";

const { editor } = styles;
const { token, key, code } = homeStyles;

export default function Interests() {
  return (
    <>
      <FileLabel fileName="interests.ts" />

      <div className={editor}>
        <p className={token}>
          const <span className={key}>mostRecentTechnologies</span> ={" "}
          <span className={token}>{"{}"}</span>
        </p>
      </div>
    </>
  );
}
