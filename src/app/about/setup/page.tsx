import FileLabel from "@/app/components/FileLabel";
import styles from "./../page.module.css";

const { editor } = styles;

export default function Setup() {
  return (
    <>
      <FileLabel fileName="setup.txt" />
      <div className={editor}>
        <p> {"// CPU: Intel Core i5 12400F"}</p>
        <p> {"// Mobo: B660M"}</p>
        <p> {"// Ram: 2x 16gb Kingston Fury DDR5 4200MHz"}</p>
        <p> {"// GPU: NVidia Geforce RTX 3060 12gb"}</p>
        <p> {"// Monitor: 2x LG 35' Ultrawide 2550x1080 75Hz"}</p>
        <p> {"// CPU Cooler: Water Cooler Coolermaster 240"}</p>
        <p> {"// Mouse: Razer Bazilik 4400dpi"}</p>
        <p> {"// Keyboard: Marvo Mechanic Cherry switche"}</p>
        <p> {"// "}</p>
        <p> {"// Gaming"}</p>
        <p> {"// Playstation 5"}</p>
        <p> {"// Nintendo Switch"}</p>
        <p> {"// Game Cube"}</p>
        <p> {"// Nintendo Wii"}</p>
        <p> {"// Nintendo 3DSXL"}</p>
        <p> {"// Sega Saturn"}</p>
        <p> {"// PSP"}</p>
        <p></p>
      </div>
    </>
  );
}
