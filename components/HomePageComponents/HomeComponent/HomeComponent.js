import { useCookies } from "react-cookie";
import Styles from "./HomeComponents.module.css";
import RecycleBin from "../../../public/Assets/RecycleBin.png";
import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
import MyPC from "../../../public/Assets/MyPC.png";
import OSiconblack from "../../../public/Assets/OSiconblack.png";
import Settings from "../../../public/Assets/Settings.png";
import Image from "next/image";
import Menu from "../Menu/Menu";
import { useHomePageContext } from "@/contexts/HomePageContext";
import Folder from "@/components/common/Folder/Folder";
// import ImageViewer from "@/components/common/ImageViewer/ImageViewer";
import ImageViewerComponent from "@/components/common/ImageViewer/ImageViewerComponent";
import SettingsComponent from "@/components/Settings/Settings";
import TextEditor from "@/components/common/TextEditor/TextEditor";
import OpenFlowimg from "../../../public/Assets/Openflow.png";
import CreateFlowimg from "../../../public/Assets/Createflow.png";
import DeleteFlowimg from "../../../public/Assets/Deleteflow.png";
const HomePage = () => {
  const {
    SetmenuState,
    SetfolderState,
    SetsettingsState,
    flowPopUpState,
    SetflowPopUpState,
    OpenFlow,
    DeleteFlow,
    CreateFlow,
    SetOpenFlowState,
    SetDeleteFlow,
    SetCreateFlow,
  } = useHomePageContext();

  const handleMenuClick = () => {
    SetmenuState(true);
  };
  const handleFolderClick = () => {
    SetfolderState(true);
  };

  const handleSettingsClick = () => {
    SetsettingsState(true);
  };
  const handlePopup = () => {
    if (flowPopUpState) {
      SetflowPopUpState(false);
      SetOpenFlowState(false);
      SetCreateFlow(false);
      SetDeleteFlow(false);
    } else {
      SetflowPopUpState(true);
    }
  };

  const [cookie] = useCookies(["JWTtoken"]);

  // console.log(cookie.name, "homepage cookie");
  return (
    <div className={Styles.HomePage}>
      <Folder />

      <Menu />
      <SettingsComponent />
      <TextEditor />
      <ImageViewerComponent />
      <div className={Styles.menubar}>
        <Image
          className={Styles.RecycleBin}
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          src={RecycleBin}
          alt="logo"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
        />

        <Image
          className={Styles.FileManagerIcon}
          src={FileManagerIcon}
          alt="logo1"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handleFolderClick}
        />

        <Image
          className={Styles.OSiconblack}
          src={OSiconblack}
          alt="logo3"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handleMenuClick}
        />
        {flowPopUpState && (
          <div className={Styles.FlowChartPopUp}>
            {OpenFlow ? (
              <Image src={OpenFlowimg} width={500} />
            ) : CreateFlow ? (
              <Image src={CreateFlowimg} width={500} />
            ) : DeleteFlow ? (
              <Image src={DeleteFlowimg} width={500} />
            ) : (
              <div>no items here</div>
            )}
          </div>
        )}
        <Image
          className={Styles.MyPC}
          src={MyPC}
          alt="logo2"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handlePopup}
        />

        <Image
          className={Styles.Settings}
          src={Settings}
          alt="logo4"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handleSettingsClick}
        />
      </div>
    </div>
  );
};

export default HomePage;
