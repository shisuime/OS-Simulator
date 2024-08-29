import Styles from "./AccountProfile.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const AccountProfile = () => {
  return (
    <div className={Styles.WholeAccountProfile}>
      <div className={Styles.AccountProfileNav}>
        <div className={Styles.AccountProfileNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.AccountProfileName}>Setting</div>
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

      <div className={Styles.AccountProfileMiddleware}>
        <div className={Styles.Back}>Back</div>

        <div className={Styles.AccountProfileMiddlewareName}>
          Account - Profile
        </div>
        <div className={Styles.AllAccountProfileMiddleware}>
          <div className={Styles.ProfilePicture}>Change Profile Picture</div>
          <div className={Styles.Username}>Change User Name</div>
          <div className={Styles.NewAccount}>Create New Account</div>
        </div>
      </div>
    </div>
  );
};
export default AccountProfile;
