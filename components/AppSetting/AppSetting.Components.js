import Styles from "./AppSetting.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";
import { useHomePageContext } from "@/contexts/HomePageContext";

const AppSetting = () => {
  const { SetappSettingState } = useHomePageContext();
  const handleBack = () => {
    SetappSettingState(false);
  };
  return (
    <div className={Styles.WholeAppSetting}>
      <div className={Styles.Backbtn} onClick={handleBack}>
        Back
      </div>
      <div
        style={{
          height: "900px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={Styles.ManageApp}>Manage App</div>
      </div>
    </div>
  );
};
export default AppSetting;
