import Styles from "./SettingsComponents.module.css";
import Image from "next/image";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";
import Settingsimg from "../../public/Assets/Settings.png";
import Account from "../../public/Assets/Account.png";
import App from "../../public/Assets/App.png";
import Time from "../../public/Assets/Time.png";
import Personilaztion from "../../public/Assets/Personilaztion.png";
import { useHomePageContext } from "@/contexts/HomePageContext";
import AccountSetting from "../Account/AccountSetting.Components";
import AppSetting from "../AppSetting/AppSetting.Components";

const SettingsComponent = () => {
  const {
    settingsState,
    SetsettingsState,
    accountSettingState,
    SetaccountSettingState,
    appSettingState,
    SetappSettingState,
  } = useHomePageContext();

  const handleExit = () => {
    SetsettingsState(false);
  };
  const handleAccounts = () => {
    SetaccountSettingState(true);
  };
  const handleApp = () => {
    SetappSettingState(true);
  };
  if (settingsState)
    return (
      <div className={Styles.SettingsContainer}>
        <div className={Styles.Settingnavigation}>
          <div className={Styles.settingNameContainer}>
            <Image src={Settingsimg} height={30} width={35} />
            <div className={Styles.settingName}>Settings</div>
          </div>
          <div
            className={Styles.navigation}
            // style={{ background: "transparent", cursor: "pointer" }}
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
            <Image
              src={Exit}
              height={60}
              style={{ background: "transparent", cursor: "pointer" }}
              onClick={handleExit}
            />
          </div>
        </div>
        {accountSettingState ? (
          <AccountSetting />
        ) : appSettingState ? (
          <AppSetting />
        ) : (
          <div className={Styles.Settingmiddleware}>
            <div className={Styles.SettingAllapp}>
              <Image
                className={Styles.account}
                src={Account}
                onClick={handleAccounts}
              />

              <Image className={Styles.account} src={App} onClick={handleApp} />

              <Image className={Styles.account} src={Time} />

              <Image className={Styles.account} src={Personilaztion} />
            </div>
          </div>
        )}
      </div>
    );
};
export default SettingsComponent;
