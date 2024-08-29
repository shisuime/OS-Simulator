import Styles from "./TextEditor.module.css";
import Image from "next/image";
import Exit from "../../../public/Assets/Exit.png";
import Maximize from "../../../public/Assets/Maximize.png";
import Minimize from "../../../public/Assets/Minimize.png";
import Input from "../Input/Input";
import InputStyles from "../Input/Input.module.css";
import { useHomePageContext } from "@/contexts/HomePageContext";
import { useEffect } from "react";

const TextEditor = () => {
  const {
    textEditorVariable,
    SettextEditorVariable,
    tempInputValue,
    SettempInputValue,
    textEditorState,
    SetTextEditorState,
  } = useHomePageContext();

  const handleExit = () => {
    SetTextEditorState(false);
  };
  const handleSave = () => {
    SettextEditorVariable(tempInputValue);
  };
  useEffect(() => {
    SettempInputValue(textEditorVariable);
  }, []);

  if (textEditorState)
    return (
      <div className={Styles.TextEditorContainer}>
        <div className={Styles.navBar}>
          <div className={Styles.folderNameContainer}>
            {/* <Image src={File} height={30} width={35} /> */}
            <div className={Styles.folderName}>TextEditor</div>
          </div>
          <div
            className={Styles.navigation}
            style={{ background: "transparent", cursor: "pointer" }}
          >
            <Image
              src={Minimize}
              height={60}
              style={{ background: "transparent", cursor: "pointer" }}
            />
            <Image
              src={Maximize}
              height={60}
              style={{ background: "transparent", cursor: "pointer" }}
            />
            <Image src={Exit} height={60} onClick={handleExit} />
          </div>
        </div>
        <div className={Styles.body}>
          <div className={Styles.Save} onClick={handleSave}>
            Save
          </div>
          <Input
            className={InputStyles.TextEditorInput}
            value={tempInputValue}
            onChange={(e) => SettempInputValue(e.target.value)}
          />
        </div>
      </div>
    );
};
export default TextEditor;
