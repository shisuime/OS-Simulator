import Styles from "./TimeDateSetting.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const TimeDate = () => {
  return (
    <div className={Styles.WholeTimeDateSetting}>
      <div className={Styles.TimeDateSettingNav}>
        <div className={Styles.TimeDateSettingNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.TimeDateSettingName}>Setting</div>
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
          <Image src={Exit} height={60} />
        </div>
      </div>
      <div className={Styles.TimeDateSettingMiddleware}>
        <div className={Styles.Back}>Back</div>
        <div className={Styles.TimeDateSettingMiddlewareName}>Time/Date</div>
        <div className={Styles.AllTimeDateSettingMiddleware}>
          <div className={Styles.Clocks}>Clock</div>
          <div className={Styles.Calenders}>Calendar</div>
        </div>
      </div>
    </div>
  );
};
export default TimeDate;
