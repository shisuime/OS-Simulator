import Styles from "./Personilaztion.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const Personilaztion = () => {
  return (
    <div className={Styles.WholePersonliaztion}>
      <div className={Styles.PersonilaztionNav}>
        <div className={Styles.PersonilaztionNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.PersonilaztionName}>Setting</div>
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

      <div className={Styles.PersonilaztionMiddleware}>
        <div className={Styles.Back}>Back</div>
        <div className={Styles.MiddlewareName}>Personilaztion</div>

        <div className={Styles.AllPersonilaztionMiddleware}>
          <div className={Styles.Backgrounds}>Background</div>
          <div className={Styles.Color}>Colors</div>
          <div className={Styles.Font}>Fonts</div>
        </div>
      </div>
    </div>
  );
};
export default Personilaztion;
