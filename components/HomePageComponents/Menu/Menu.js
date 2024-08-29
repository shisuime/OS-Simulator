import Styles from "./Menu.module.css";
import Image from "next/image";
import BackIcon from "../../../public/Assets/BackButton.png";
import BacktoSignIn from "../../../public/Assets/Back-to-SignIn.png";
import Search from "@/components/common/Search/Search";
import Bitcoin from "../../../public/Assets/bitcoin.png";
import Calculator from "../../../public/Assets/calculator.png";
import Calendar from "../../../public/Assets/calendar.png";
import Clock from "../../../public/Assets/Clock.png";
import File from "../../../public/Assets/File.png";
import Hen from "../../../public/Assets/Hentai.png";
import ImageViewer from "../../../public/Assets/Image.png";
import Jav from "../../../public/Assets/JAVIcon.png";
import Map from "../../../public/Assets/Map.png";
import MediaPlayer from "../../../public/Assets/MediaPlayer.png";
import MenuSettings from "../../../public/Assets/MenuSettings.png";
import Music from "../../../public/Assets/Music.png";
import Notepad from "../../../public/Assets/Notepad.png";
import Omega from "../../../public/Assets/omega-circle.png";
import PH from "../../../public/Assets/PornHub.png";
import { useEffect } from "react";
import { SignOut } from "../../../services/AuthService/AuthService";
import { useRouter } from "next/router";

import { useHomePageContext } from "@/contexts/HomePageContext";

const Array = [
  { name: "Bitcoin", object: Bitcoin },
  { name: "Calculator", object: Calculator },
  { name: "Calendar", object: Calendar },
  { name: "Clock", object: Clock },
  { name: "File", object: File },
  { name: "Hen", object: Hen },
  { name: "ImageViewer", object: ImageViewer },
  { name: "Jav", object: Jav },
  { name: "Map", object: Map },
  { name: "MenuSettings", object: MenuSettings },
  { name: "MediaPlayer", object: MediaPlayer },
  { name: "Music", object: Music },
  { name: "Notepad", object: Notepad },
  { name: "Omega", object: Omega },
  { name: "PH", object: PH },
];

const Menu = () => {
  const router = useRouter();

  const { filteredArray, SetfilteredArray, menuState, SetmenuState } =
    useHomePageContext();

  useEffect(() => {
    SetfilteredArray(Array);
  }, []);

  const handleBack = () => {
    SetmenuState(false);
  };

  const handleSignOut = () => {
    SignOut();
    SetmenuState(false);
    router.push("/");
  };

  if (menuState)
    return (
      <div className={Styles.menuContainer}>
        <div className={Styles.menuTop}>
          <div className={Styles.navigationIconsAndSearch}>
            <Image
              style={{ cursor: "pointer" }}
              src={BackIcon}
              onClick={handleBack}
            />
            <Search />
            <Image
              src={BacktoSignIn}
              style={{ cursor: "pointer" }}
              onClick={handleSignOut}
            />
          </div>
          <div className={Styles.searchDescription}>
            Trying to find something?
          </div>
        </div>
        <div className={Styles.menuIconsContainer}>
          <div className={Styles.menuIcons}>
            {filteredArray && filteredArray.length === 0 ? (
              <div className={Styles.simmer}>No icons as per your search</div>
            ) : (
              filteredArray.map((event) => (
                <div className={Styles.menuIconContainer} key={event.name}>
                  <Image
                    style={{ height: "150px", width: "150px" }}
                    src={event.object}
                    alt={event.name}
                  />
                  <div className={Styles.iconName}>{event.name}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
};
export { Array };
export default Menu;
