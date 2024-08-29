import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";
import Styles from "./PersonalizationBackPicture.module.css";

const PersonaalizationBackGroundPicture = () => {
  return (
    <div className={Styles.WholeBackgroundProfile}>
      <div className={Styles.BackgroundProfileNav}>
        <div className={Styles.BackgroundProfileeNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.BackgroundProfileName}>Setting</div>
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

      <div className={Styles.BackgroundProfileMiddleware}>
        <div className={Styles.Back}>Back</div>
        <div className={Styles.BackgroundProfileMiddlewareName}>
          Personalization - Background
        </div>
        <div className={Styles.AllBackgroundProfileMiddleware}>
          <div className={Styles.Picture}>Change Background Style</div>
          <div className={Styles.Image}>Change Background Image</div>
        </div>
      </div>
    </div>
  );
};
export default PersonaalizationBackGroundPicture;
