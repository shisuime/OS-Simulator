import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";
import Styles from "./PersonalizationFonts.module.css";

const PersonalizationFonts = () => {
  return (
    <div className={Styles.WholePersonalizationFonts}>
      <div className={Styles.PersonalizationFontsNav}>
        <div className={Styles.PersonalizationFontsNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.PersonalizationFontsName}>Setting</div>
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

      <div className={Styles.PersonalizationFontsMiddleware}>
        <div className={Styles.Back}>Back</div>
        <div className={Styles.PersonalizationFontsMiddlewareName}>
          Personalization - Fonts
        </div>
        <div className={Styles.AllPersonalizationFontsMiddleware}>
          <div className={Styles.Fontone}>DOGGOS is Best</div>
          <div className={Styles.Fonttwo}>DOGGOS is Best</div>
          <div className={Styles.Fontthree}>DOGGOS is Best</div>
        </div>
      </div>
    </div>
  );
};
export default PersonalizationFonts;
