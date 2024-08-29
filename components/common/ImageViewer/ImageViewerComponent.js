import Styles from "./ImageViewer.module.css";
import Image from "next/image";
import ImageView from "../../../public/Assets/Image.png";
import Minimize from "../../../public/Assets/Minimize.png";
import Maximize from "../../../public/Assets/Maximize.png";
import Exit from "../../../public/Assets/Exit.png";
import QOP from "../../../public/Assets/qop.jpg";
import { useHomePageContext } from "@/contexts/HomePageContext";

const ImageViewerComponent = () => {
  const {
    imageViewerState,
    imageObj,
    imageName,
    SetfolderState,
    SetimageViewerState,
  } = useHomePageContext();

  const handleExit = () => {
    SetimageViewerState(false);
    // SetfolderState(true);
  };

  if (imageViewerState)
    return (
      <div className={Styles.ImageViewerBackground}>
        <div className={Styles.navBar}>
          <div className={Styles.folderNameContainer}>
            <Image src={ImageView} height={30} width={35} />
            <div className={Styles.folderName}>{imageName}</div>
          </div>
          <div className={Styles.navigation}>
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
        <div className={Styles.body}>
          <Image src={QOP} height={870} width={1904} />
          {/* {console.log(imageValue, "imagevalue")} */}
        </div>
      </div>
    );
};

export default ImageViewerComponent;
