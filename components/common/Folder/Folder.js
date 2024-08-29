import Styles from "./Folder.module.css";

import MyPC from "../../../public/Assets/MyPC.png";
import File from "../../../public/Assets/FileManagerIcon.png";
import Exit from "../../../public/Assets/Exit.png";
import Maximize from "../../../public/Assets/Maximize.png";
import Minimize from "../../../public/Assets/Minimize.png";
import Back from "../../../public/Assets/Back.png";
import Forward from "../../../public/Assets/Forward.png";
import ToDesktop from "../../../public/Assets/ToDesktop.png";
import ArrowRight from "../../../public/Assets/arrow-right.png";
import Search from "../../../public/Assets/SearchIcon.png";
import NewIcon from "../../../public/Assets/NewIcon.png";
import ViewArrow from "../../../public/Assets/ViewArrow.png";
import Cut from "../../../public/Assets/Cut.png";
import Copy from "../../../public/Assets/Copy.png";
import Paste from "../../../public/Assets/Paste.png";
import Delete from "../../../public/Assets/Delete.png";
import Home from "../../../public/Assets/home.png";
import Download from "../../../public/Assets/Download.png";
import Document from "../../../public/Assets/Document.png";
import Picture from "../../../public/Assets/Image.png";
import Music from "../../../public/Assets/Music.png";
import Notepad from "../../../public/Assets/Notepad.png";
import ImageviewerIcon from "../../../public/Assets/Image.png";
import MediaPlayer from "../../../public/Assets/MediaPlayer.png";
import OpenFlow from "../../../public/Assets/Openflow.png";
import CreateFlow from "../../../public/Assets/Createflow.png";
import DeleteFlow from "../../../public/Assets/Deleteflow.png";
import Image from "next/image";
import { useHomePageContext } from "@/contexts/HomePageContext";
import { useEffect, useState } from "react";

import {
  getDirectory,
  createFolder,
  deleteFolder,
} from "../../../services/AuthService/AuthService";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Folder = () => {
  const categoriesFolderArray = [
    { object: Home, name: "Home" },
    { object: MyPC, name: "Desktop" },
    { object: Download, name: "Downloads" },
    { object: Document, name: "Documents" },
    { object: Picture, name: "Pictures" },
    { object: Music, name: "Music" },
    { object: MediaPlayer, name: "Videos" },
  ];
  const {
    folderState,
    SetfolderState,
    SetTextEditorState,
    SetimageViewerState,
    SetOpenFlowState,
    SetDeleteFlow,
    SetCreateFlow,
  } = useHomePageContext();
  const [pathArray, setpathArray] = useState(["Home"]);

  const [selectedCategory, SetselectedCategory] = useState({
    object: Home,
    name: "Home",
  });
  const [selectedCategoryObjects, SetselectedCategoryObjects] = useState();

  const [responseDataobj, SetresponseDataobj] = useState({});

  const [backFolderCache, SetbackFolderCache] = useState([]);
  const [folderCreateDropdownState, SetFolderCreateDropdownState] =
    useState(false);
  const [createFolderInput, SetCreateFolderInput] = useState("");

  useEffect(() => {
    const initialGetData = async () => {
      const response = await getDirectory(selectedCategory.name);
      handleGetChildrenforCategory(selectedCategory.name, response["data"]);
      SetresponseDataobj(response["data"]);
    };
    initialGetData();
  }, [selectedCategory]);

  const handleGetChildrenforCategory = (name, obj) => {
    // console.log(obj[name], "handegetchildrent for category");
    if (!obj[name]) return;
    const selectedObj1 = Object.values(obj[name].children);

    SetselectedCategoryObjects(selectedObj1);
  };

  const handleFolderClick = (name, type) => {
    if (type === "text") {
      SetTextEditorState(true);
    } else if (type === "image") {
      SetimageViewerState(true);
    } else {
      pathArray.push(name);
      setpathArray(pathArray);
      let childObj = responseDataobj;
      pathArray.map((a, i) => {
        // console.log(childObj, pathArray, "childobj");
        if (i !== 0) {
          childObj = childObj[a].children;
        } else {
          childObj = childObj[a].children;
        }
      });
      const childArray = [];
      Object.keys(childObj).forEach((a) => {
        childArray.push(childObj[a]);
      });
      SetselectedCategoryObjects(childArray);
      SetOpenFlowState(true);
    }
  };
  const handleCategorySelect = async ({ object, name }) => {
    const response = await getDirectory(name);

    console.log(response["data"], "checking object here");
    handleGetChildrenforCategory(name, response["data"]);
    SetresponseDataobj(response["data"]);
    SetbackFolderCache([]);
    setpathArray([name]);
    SetOpenFlowState(true);
  };
  const handleBack = () => {
    const temp = pathArray.pop();
    backFolderCache.push(temp);
    SetbackFolderCache([...backFolderCache]);
    console.log(backFolderCache, "checking cache");
    setpathArray([...pathArray]);
    let childObj = responseDataobj;
    pathArray.forEach((a, i) => {
      childObj = childObj[a].children;
    });
    const childArray = Object.values(childObj);
    SetselectedCategoryObjects(childArray);

    console.log(pathArray, "handleBack");
  };
  const handlePrev = () => {
    const temp = backFolderCache.pop();
    pathArray.push(temp);
    SetbackFolderCache([...backFolderCache]);

    setpathArray([...pathArray]);
    let childObj = responseDataobj;
    pathArray.forEach((a, i) => {
      childObj = childObj[a].children;
    });
    const childArray = Object.values(childObj);
    SetselectedCategoryObjects(childArray);
    console.log(backFolderCache);
  };

  const handleExit = () => {
    setpathArray(["Home"]);
    SetbackFolderCache([]);
    SetfolderState(false);
    SetselectedCategory({
      object: Home,
      name: "Home",
    });
  };

  const handleDelete = async (_id) => {
    const response = await deleteFolder(pathArray[0], _id);
    handleGetChildrenforCategory(pathArray[0], response["data"]);
    SetresponseDataobj(response["data"]);
    SetbackFolderCache([]);
    SetDeleteFlow(true);
  };
  const handleDropdownArrow = () => {
    if (folderCreateDropdownState) {
      SetFolderCreateDropdownState(false);
    } else {
      SetFolderCreateDropdownState(true);
    }
  };
  const handleCreateDirectorybtn = async () => {
    const response = await createFolder(pathArray[0], createFolderInput);
    handleGetChildrenforCategory(pathArray[0], response["data"]);
    SetresponseDataobj(response["data"]);
    SetbackFolderCache([]);
    SetFolderCreateDropdownState(false);
    SetCreateFolderInput("");
    SetCreateFlow(true);
    // setpathArray([name]);
  };

  if (folderState)
    return (
      <div className={Styles.folderDirectory}>
        <div className={Styles.folderBackground}>
          <div className={Styles.navBar}>
            <div className={Styles.folderNameContainer}>
              <Image src={File} height={30} width={35} />
              <div className={Styles.folderName}>{pathArray[0]}</div>
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
              <Image src={Exit} height={60} onClick={handleExit} />
            </div>
          </div>
          <div className={Styles.folderPathAndNavigation}>
            <div className={Styles.folderNavigation}>
              <Image
                src={Back}
                style={{
                  cursor: "pointer",
                  pointerEvents: pathArray.length > 1 ? "auto" : "none",
                  opacity: pathArray.length > 1 ? "1.3" : "0.3",
                }}
                onClick={handleBack}
              />
              <Image
                src={Forward}
                onClick={handlePrev}
                style={{
                  cursor: "pointer",
                  pointerEvents: backFolderCache.length > 0 ? "auto" : "none",
                  opacity: backFolderCache.length > 0 ? "1.3" : "0.3",
                }}
              />
              <Image src={ToDesktop} />
            </div>
            <div className={Styles.path}>
              {/* <Image src={File} height={30} /> */}
              <Image src={ArrowRight} height={30} width={30} />
              <div className={Styles.folderName}>{pathArray[0]}</div>
            </div>
            <div className={Styles.searchInFolder}>
              <div className={Styles.folderName}>Search</div>
              <Image src={Search} height={30} width={30} />
            </div>
          </div>
        </div>

        <div className={Styles.Content}>
          <div className={Styles.NewFolderNavigation}>
            <div className={Styles.newicon}>
              <Image src={NewIcon} />
            </div>
            <div className={Styles.Newicon}>New</div>
            <div className={Styles.ViewArrow}>
              <Image
                src={ViewArrow}
                onClick={handleDropdownArrow}
                style={{ cursor: "pointer" }}
              />
              {folderCreateDropdownState && (
                <div className={Styles.createDirectoryDropdown}>
                  <Input
                    style={{ height: "50px", width: "200px" }}
                    value={createFolderInput}
                    onChange={(e) => SetCreateFolderInput(e.target.value)}
                  />
                  <Button
                    style={{ height: "50px", width: "100px" }}
                    onClick={handleCreateDirectorybtn}
                  >
                    Create Directory
                  </Button>
                </div>
              )}
            </div>

            <div className={Styles.Line}></div>
            {/* <div className={Styles.Cuticon}>
              <Image src={Cut} />
            </div>
            <div className={Styles.Copyicon}>
              <Image src={Copy} />
            </div>
            <div className={Styles.Pasteicon}>
              <Image src={Paste} />
            </div>
            <div className={Styles.Deleteicon}>
              <Image src={Delete} />
            </div>
            <div className={Styles.Line}></div> */}
          </div>
          <div className={Styles.body}>
            <div className={Styles.inFolderNavigations}>
              {categoriesFolderArray.map((category, index) => (
                <div
                  key={index}
                  className={Styles.iconsAndNameContainer}
                  onClick={(e) => {
                    handleCategorySelect(category);
                  }}
                >
                  <Image src={category.object} height={35} width={32} />
                  <div className={Styles.iconname}>{category.name}</div>
                </div>
              ))}
            </div>

            <div className={Styles.mainBody}>
              <div className={Styles.classifier}>
                <div className={Styles.classifierName}>Name</div>
                <div className={Styles.classifierSize}>Size</div>
                <div className={Styles.classifierItemType}>Item Type</div>
                <div className={Styles.classifierDateModified}>
                  Date Modified
                </div>
              </div>
              <div className={Styles.mainContents}>
                {selectedCategoryObjects &&
                selectedCategoryObjects.length > 0 ? (
                  selectedCategoryObjects.map(
                    ({ _id, size, type, DOM }, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          // cursor: "pointer",
                        }}
                      >
                        <div
                          className={Styles.contentName}
                          onClick={() => handleFolderClick(_id, type)}
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={
                              type === "text"
                                ? Notepad
                                : type === "image"
                                ? ImageviewerIcon
                                : File
                            }
                            height={30}
                            width={30}
                            alt="file"
                          />
                          {_id}
                        </div>
                        <div className={Styles.contentSize}>{size}</div>
                        <div className={Styles.contentItemType}>{type}</div>
                        <div className={Styles.contentDateModified}>{DOM}</div>
                        <Image
                          src={Delete}
                          onClick={() => handleDelete(_id)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    )
                  )
                ) : (
                  <div style={{ color: "white" }}>no items</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Folder;
