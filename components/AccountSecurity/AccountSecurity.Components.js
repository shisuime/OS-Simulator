import Styles from "./AccountSecurity.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const AccountSecurity = () => {
  return (
    <div className={Styles.WholeAccountSecurity}>
      <div className={Styles.AccountSecurityNav}>
        <div className={Styles.AccountSecurityNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.AccountSecurityName}>Setting</div>
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

      <div className={Styles.AccountSecurityMiddleware}>
        <div className={Styles.Back}>Back</div>
        <div className={Styles.AccountSecurityMiddlewareName}>
          Account - Security
        </div>
        <div className={Styles.AllAccountSecurityMiddleware}>
          <div className={Styles.Password}>Update Your Password</div>
          <div className={Styles.ForgetPassword}>Forget Your Password</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;
