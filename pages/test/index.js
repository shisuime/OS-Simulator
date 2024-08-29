import Styles from "./test.module.css";
import SettingsComponent from "@/components/Settings/Settings";
import Menu from "@/components/HomePageComponents/Menu/Menu";
import Folder from "@/components/common/Folder/Folder";

import Personilaztion from "@/components/Personilaztion/Personilaztion.Components";
import AppSetting from "@/components/AppSetting/AppSetting.Components";
import AccountSetting from "@/components/Account/AccountSetting.Components";
import TimeDate from "@/components/Time-Date/TimeDateSetting.Components";
import Calendar from "@/components/Calendar/Calendar.Components";
import Clock from "@/components/Clock/Clock.Components";
import AccountProfile from "@/components/AccountProfile/AccountProfile.Components";
import AccountSecurity from "@/components/AccountSecurity/AccountSecurity.Components";
import PersonaalizationBackGroundPicture from "@/components/PersonalizationBackgroundpicture/PersonalizationBackGroundPicture.Components";
import PersonalizationFonts from "@/components/PersonalizationFonts/PersonalizationFonts.Components";
import TextEditor from "@/components/common/TextEditor/TextEditor";
import ImageViewerComponent from "@/components/common/ImageViewer/ImageViewerComponent";
const Test = () => {
  return (
    <div>
      {/* <TextEditor /> */}
      {/* <Menu /> */}
      {/* <Folder /> */}
      {/* <SettingsComponent /> */}
      <ImageViewerComponent />
      {/* <Personilaztion /> */}
      {/* <AppSetting /> */}
      {/* <AccountSetting /> */}
      {/* <TimeDate /> */}
      {/* <Calendar /> */}
      {/* <Clock /> */}
      <AccountProfile />
      {/* <AccountSecurity /> */}
      {/* <PersonaalizationBackGroundPicture /> */}
      {/* <PersonalizationFonts /> */}
    </div>
  );
};

export default Test;
